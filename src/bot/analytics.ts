import { PostHog } from "posthog-node";

const key = process.env.POSTHOG_API_KEY;

if (!key) {
  throw new Error("POSTHOG_API_KEY must be provided!");
}

const client = new PostHog(key, {
  host: "https://us.i.posthog.com",
  flushAt: 1,
  flushInterval: 0,
});

interface AnalyticsEvent {
  distinctId: string;
  event: string;
  properties: Record<string, any>;
}

export const sendAnalyticsEvent = async ({
  distinctId,
  event,
  properties,
}: AnalyticsEvent) => {
  await client.capture({
    distinctId,
    event,
    properties,
  });
  await client.shutdown();
};
