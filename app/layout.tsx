import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AutoGrowth AI — AI Growth Platform for Local Service Businesses",
    template: "%s | AutoGrowth AI",
  },
  description:
    "Free AI-powered business audit. See how your Google presence, reviews, and AI visibility stack up — and how much revenue you're leaving on the table.",
  openGraph: {
    type: "website",
    url: "https://autogrowthai.co",
    siteName: "AutoGrowth AI",
  },
  twitter: { card: "summary_large_image" },
  metadataBase: new URL("https://autogrowthai.co"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        {/* Analytics placeholder — uncomment to activate
        <Script src="https://plausible.io/js/script.js" data-domain="autogrowthai.co" />
        */}
      </body>
    </html>
  );
}
