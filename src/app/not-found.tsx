import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="layout-container flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-16 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-9xl">404</h1>
        <div className="h-1 w-full rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl">Page Not Found</h2>
        <p className="text-lg opacity-50">Looks like you got lost... how peculiar</p>
      </div>
    </div>
  );
}
