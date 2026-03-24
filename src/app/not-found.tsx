import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false },
};

// biome-ignore lint/style/noDefaultExport: NextJS
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <h1 className="font-serif text-8xl italic tracking-tight sm:text-9xl">404</h1>

      <div className="flex flex-col gap-2">
        <h2 className="font-medium text-xl">Page Not Found</h2>
        <p className="text-muted-foreground">How did you get here?!?</p>
      </div>

      <Link
        href="/"
        className="mt-2 rounded-lg border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
      >
        Go home
      </Link>
    </div>
  );
}
