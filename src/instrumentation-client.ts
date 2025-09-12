import posthog from "posthog-js";
import { env } from "@/env.config";

if (env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    capture_exceptions: true,
    capture_pageleave: true,
    capture_pageview: "history_change", // Enable pageleave capture
    debug: process.env.NODE_ENV === "development", // This enables capturing exceptions using Error Tracking, set to false if you don't want this
    ui_host: "https://us.posthog.com",
    defaults: "2025-05-24",
  });
}
