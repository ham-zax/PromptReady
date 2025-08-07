// src/hooks/useAnalytics.ts

/**
 * A simple utility function to log analytics events.
 * This can be expanded to send data to any service (Google Analytics, Plausible, etc.).
 * @param eventName - The name of the event to track.
 * @param payload - A data object associated with the event.
 */
export const trackEvent = (eventName: string, payload: Record<string, any>) => {
  console.log(`[Analytics] Event: ${eventName}`, payload);
  // Example: window.gtag('event', eventName, payload);
};