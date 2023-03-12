/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

declare global {
  interface Window {
    Pusher: any;
    Echo: LaravelEcho;
  }
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
import Pusher from "pusher-js";
window.Pusher = Pusher;

import LaravelEcho from "laravel-echo";

export const Echo = new LaravelEcho({
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? "mt1",
  wsHost: import.meta.env.VITE_PUSHER_HOST,
  wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
  wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
  forceTLS: false,
  encrypted: true,
  disableState: true,
  enabledTransports: ["ws", "wss"],
});

window.Echo = Echo;
