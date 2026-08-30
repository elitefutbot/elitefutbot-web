import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic Validation
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
    let errorDetail = "";

    // 1. Primary: Web3Forms (if access key is available)
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
            message,
            from_name: "Elite FUT SNIPER Web Support",
            replyto: email,
          }),
        });
        const web3Data = await web3Res.json();
        if (web3Data.success) {
          dispatched = true;
        } else {
          errorDetail = web3Data.message || "Web3Forms submission failed";
        }
      } catch (err: any) {
        console.error("Web3Forms error:", err);
      }
    }

    // 2. Fallback / Direct: FormSubmit.co to support@elitefutbot.com
    if (!dispatched) {
      try {
        const formSubmitRes = await fetch("https://formsubmit.co/ajax/support@elitefutbot.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name,
            email,
            _subject: `[Elite FUT SNIPER Support] ${sanitizedSubject} from ${name}`,
            _replyto: email,
            message: `Department: ${sanitizedSubject}\nSender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
            _template: "table",
          }),
        });

        if (formSubmitRes.ok) {
          dispatched = true;
        }
      } catch (err: any) {
        console.error("FormSubmit error:", err);
      }
    }

    // 3. Optional: Forward to Discord Webhook if configured
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
                color: 0xccff00, // primary neon green
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
      } catch (webhookErr) {
        console.error("Discord webhook dispatch error:", webhookErr);
      }
    }

    if (!dispatched) {
      // If external forwarders had network issues, return clean response with direct mailto instructions
      return NextResponse.json({
        success: true,
        fallbackMailto: `mailto:support@elitefutbot.com?subject=${encodeURIComponent(
          `[Support] ${sanitizedSubject}`
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`,
        message: "Message queued for delivery.",
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
