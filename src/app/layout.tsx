import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import { ViewTransition } from "react";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

const boskaFont = localFont({
  weight: "400",
  variable: "--font-boska",
  src: "../assets/fonts/Gambarino-Regular.woff2",
});

const switzerFont = localFont({
  variable: "--font-switzer",
  src: "../assets/fonts/Switzer-Variable.woff2",
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

// biome-ignore lint/style/noDefaultExport: NextJS
export default function RootLayout({ children }: Readonly<LayoutProps<"/">>) {
  // noinspection HtmlRequiredTitleElement
  return (
    // eslint-disable-next-line better-tailwindcss/no-unregistered-classes -- Fixes Google Translate
    <html lang="en" suppressHydrationWarning translate="no" className="notranslate">
      <head>
        {/* TODO: Fix Google translate breaking the DOM properly, see fixes below */}
        {/* https://www.npmjs.com/package/eslint-plugin-react-google-translate */}
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
      </head>

      <body
        className={cn(
          "container min-h-screen bg-background font-sans text-foreground",
          boskaFont.variable,
          switzerFont.variable
        )}
      >
        <div className="flex flex-col justify-between">
          <NextTopLoader color="var(--primary)" showSpinner={false} />

          <Navbar />

          <ViewTransition>
            <div>{children}</div>
          </ViewTransition>

          {/* Footer */}
          <div className="flex flex-row pb-24">
            <span className="flex-1 font-medium opacity-50">Copyright © Koding Development 2025</span>
            <span className="flex-1 text-right font-medium opacity-50">Stella, Software Engineer</span>
          </div>
        </div>
      </body>
    </html>
  );
}
