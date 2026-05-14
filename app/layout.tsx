import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AutoGrowth AI — AI Search Domination for Trades",
    template: "%s | AutoGrowth AI",
  },
  description:
    "When homeowners ask ChatGPT who to call, your competitors get recommended. You don't. AutoGrowth AI fixes that — with 5 specialists that run 24/7.",
  openGraph: {
    type: "website",
    url: "https://autogrowthai.co",
    siteName: "AutoGrowth AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
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
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
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
