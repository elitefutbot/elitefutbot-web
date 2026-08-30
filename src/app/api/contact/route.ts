import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (name, email, message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const sanitizedSubject = subject || "General Support";
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    let dispatched = false;
    let activationPending = false;

    // 1. Primary: Web3Forms (if access key is configured in env)
    if (web3Key) {
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            name,
            email,
            subject: `[Elite FUT SNIPER] ${sanitizedSubject} - ${name}`,
            message: `Department: ${sanitizedSubject}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            from_name: "Elite FUT SNIPER Support Form",
            replyto: email,
          }),
        });
        const web3Data = await web3Res.json();
        if (web3Data.success) {
          dispatched = true;
        }
      } catch (err) {
        console.error("Web3Forms error:", err);
      }
    }

    // 2. Direct FormSubmit dispatch to support@elitefutbot.com & cc elitefutbotfc@gmail.com
    if (!dispatched) {
      try {
        const formSubmitRes = await fetch("https://formsubmit.co/ajax/support@elitefutbot.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: "https://elitefutbot.com",
            Referer: "https://elitefutbot.com/contact",
          },
          body: JSON.stringify({
            name,
            email,
            _subject: `[Elite FUT SNIPER Support] ${sanitizedSubject} from ${name}`,
            _replyto: email,
            _cc: "elitefutbotfc@gmail.com",
            message: `Department: ${sanitizedSubject}\nSender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
            _template: "table",
          }),
        });

        const formSubmitData = await formSubmitRes.json();
        if (formSubmitData.success === "true" || formSubmitData.success === true) {
          dispatched = true;
        } else if (formSubmitData.message && formSubmitData.message.includes("Activation")) {
          activationPending = true;
        }
      } catch (err) {
        console.error("FormSubmit error:", err);
      }
    }

    // 3. Optional: Discord Webhook dispatch (instant alerts to Discord staff channel)
    const discordWebhookUrl = process.env.DISCORD_CONTACT_WEBHOOK_URL;
    if (discordWebhookUrl) {
      try {
        await fetch(discordWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "Support Ticket Bot",
            avatar_url: "https://elitefutbot.com/logo-elite.png",
            embeds: [
              {
                title: `📩 New Support Inquiry: ${sanitizedSubject}`,
                color: 0xccff00,
                fields: [
                  { name: "👤 Name", value: name, inline: true },
                  { name: "📧 Email", value: email, inline: true },
                  { name: "🏷️ Department", value: sanitizedSubject, inline: true },
                  { name: "💬 Message", value: message.length > 1000 ? message.substring(0, 997) + "..." : message },
                ],
                timestamp: new Date().toISOString(),
                footer: { text: "Elite FUT SNIPER Support Desk" },
              },
            ],
          }),
        });
        dispatched = true;
      } catch (webhookErr) {
        console.error("Discord webhook dispatch error:", webhookErr);
      }
    }

    if (activationPending && !dispatched) {
      return NextResponse.json({
        success: true,
        activationPending: true,
        message: "Form activation link has been sent to support@elitefutbot.com / elitefutbotfc@gmail.com. Please click 'Activate Form' once in your email to begin receiving submissions.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been dispatched to support@elitefutbot.com.",
    });
  } catch (error: any) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch message. Please email support@elitefutbot.com directly." },
      { status: 500 }
    );
  }
}
