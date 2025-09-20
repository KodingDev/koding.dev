import type { InstrumentationOnRequestError } from "next/dist/server/instrumentation/types";
import { env } from "@/env.config";

export function register() {
  // No-op for initialization
}

export const onRequestError: InstrumentationOnRequestError = async (err, request) => {
  if (process.env.NEXT_RUNTIME === "nodejs" && env.POSTHOG_API_KEY && env.POSTHOG_ENV_ID) {
    const { getPostHogServer } = require("./lib/posthog-server");
    const posthog = await getPostHogServer();
    let distinctId = null;

    if (request.headers.cookie) {
      const cookieString = request.headers.cookie as string;
      const postHogCookieMatch = cookieString.match(/ph_phc_.*?_posthog=([^;]+)/);

      if (postHogCookieMatch?.[1]) {
        try {
          const decodedCookie = decodeURIComponent(postHogCookieMatch[1]);
          const postHogData = JSON.parse(decodedCookie);
          distinctId = postHogData.distinct_id;
        } catch (e) {
          console.error("Error parsing PostHog cookie:", e);
        }
      }
    }

    await posthog.captureException(err, distinctId || undefined);
  }
};
