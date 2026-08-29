// A tiny pub-sub so useAccountStats (and anything else that wants to react
// to "something changed on the server") doesn't need to know anything about
// Firebase — the FCM foreground/background listeners are the only things
// that call emitRefresh(), everything else just subscribes.
type Listener = () => void;

const listeners = new Set<Listener>();

export function subscribeToRefresh(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function emitRefresh(): void {
  for (const listener of listeners) {
    try {
      listener();
    } catch (error) {
      console.error("refreshBus listener threw:", error);
    }
  }
}
