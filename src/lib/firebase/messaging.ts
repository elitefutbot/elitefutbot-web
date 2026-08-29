"use client";

import {
  getToken,
  getMessaging,
  isSupported,
  onMessage,
} from "firebase/messaging";
import { getFirebaseApp, VAPID_KEY } from "./config";
import { authFetch } from "@/lib/auth/authClient";
import { emitRefresh } from "./refreshBus";

// Requests notification permission, registers the service worker, obtains
// an FCM token, and sends it to the backend so it knows where to push this
// browser's updates. No-ops (rather than throwing) on anything unsupported
// or denied — FCM is a freshness optimization, not a requirement, and the
// 60s poll keeps the dashboard correct either way.
export async function setUpPushNotifications(): Promise<void> {
  if (typeof window === "undefined") return;
  if (!(await isSupported())) return;
  if (!VAPID_KEY) {
    console.warn(
      "NEXT_PUBLIC_FIREBASE_VAPID_KEY is not set — skipping FCM setup",
    );
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
    );

    const messaging = getMessaging(getFirebaseApp());
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    if (!token) {
      console.warn("[FCM] getToken() returned no token");
      return;
    }

    console.log(
      "[FCM] token obtained, registering with backend:",
      token.slice(0, 20) + "...",
    );

    const res = await authFetch("/api/users/fcm-token", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    console.log("[FCM] token registration response:", res.status);

    // Foreground messages (tab open and focused) don't go through the
    // service worker at all — handle them directly here.
    onMessage(messaging, (payload) => {
      console.log("[FCM] foreground message received:", payload);
      emitRefresh();
    });

    // Background messages (tab open but not focused) are received by the
    // service worker, which relays them to any open client via postMessage.
    navigator.serviceWorker.addEventListener("message", (event) => {
      console.log("[FCM] service worker message received:", event.data);
      if (event.data?.type === "EliteFutBot_PUSH_REFRESH") emitRefresh();
    });

    console.log("[FCM] setup complete, listening for pushes");
  } catch (error) {
    console.error("Failed to set up push notifications:", error);
  }
}
