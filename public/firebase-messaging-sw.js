// Static file — Next.js doesn't process public/, so this can't read
// NEXT_PUBLIC_* env vars at build time. Firebase's client config is public
// by design (safe to ship as-is), unlike the backend's service account key.
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDmI-w5u6RxYhz96-mBjMJAVeIssdcmefI",
  authDomain: "elitefutbot.firebaseapp.com",
  projectId: "elitefutbot",
  storageBucket: "elitefutbot.firebasestorage.app",
  messagingSenderId: "849339528865",
  appId: "1:849339528865:web:7a926033c4dbbe5bd1a2e0",
});

const messaging = firebase.messaging();

// Data-only messages (see fifa-snipe-bot-backend's notifyUser) don't trigger
// Chrome's automatic notification display, so this fires for every push
// received while the tab is open but not focused. Relay it to any open
// dashboard tab instead of showing an OS notification — it's just a
// "something changed, go re-fetch" signal (GB-21), not something the user
// needs to be interrupted for.
messaging.onBackgroundMessage(() => {
  self.clients.matchAll({ type: "window" }).then((clients) => {
    for (const client of clients) {
      client.postMessage({ type: "EliteFutBot_PUSH_REFRESH" });
    }
  });
});
