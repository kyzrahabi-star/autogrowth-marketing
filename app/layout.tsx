import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AutoGrowth AI — AI Receptionist & Growth Platform for HVAC Companies",
    template: "%s | AutoGrowth AI",
  },
  description:
    "We help HVAC companies book more jobs without hiring more office staff. 24/7 AI receptionist, estimate follow-up, review automation, and AI search visibility — done for you.",
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
