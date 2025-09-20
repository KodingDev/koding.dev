import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import type React from "react";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "koding.dev",
    template: "%s | koding.dev",
  },
  metadataBase: new URL("https://koding.dev"),
  robots: {
    follow: true,
    googleBot: "index, follow",
    index: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  initialScale: 1,
  themeColor: "#9145FF",
  viewportFit: "cover",
  width: "device-width",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en" suppressHydrationWarning translate="no" className="notranslate">
      <head>
        {/* TODO: Fix Google translate breaking the DOM properly, see fixes below */}
        {/* https://www.npmjs.com/package/eslint-plugin-react-google-translate */}
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
      </head>

      <body className={cn("min-h-screen bg-primary-800 font-sans text-white", poppins.variable)}>
        <div className="flex min-h-screen flex-col justify-between bg-primary-800">{children}</div>
      </body>
    </html>
  );
}
