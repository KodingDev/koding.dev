import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import { ViewTransition } from "react";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

const instrumentSerifFont = localFont({
  weight: "400",
  variable: "--font-instrument-serif",
  src: "../assets/fonts/InstrumentSerif-Regular.ttf",
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
  colorScheme: "light",
  initialScale: 1,
  themeColor: "#9145FF",
  viewportFit: "cover",
  width: "device-width",
};

export default function RootLayout({ children }: Readonly<LayoutProps<"/">>) {
  return (
    <html lang="en" suppressHydrationWarning translate="no" className="notranslate">
      <head>
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
      </head>

      <body
        className={cn(
          "container min-h-screen bg-background font-sans text-foreground",
          instrumentSerifFont.variable,
          switzerFont.variable
        )}
      >
        <div className="flex flex-col justify-between">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Skip to content
          </a>

          <NextTopLoader color="var(--primary)" showSpinner={false} />

          <Navbar />

          <ViewTransition>
            <main id="main">{children}</main>
          </ViewTransition>

          <footer className="flex flex-col gap-1 border-t border-foreground/10 pt-8 pb-16 text-sm text-muted-foreground sm:flex-row">
            <span className="flex-1">© Koding Development {new Date().getFullYear()}</span>
            <span className="flex-1 sm:text-right">Stella Inwood</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
