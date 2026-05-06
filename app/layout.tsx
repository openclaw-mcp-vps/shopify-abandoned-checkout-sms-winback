import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMS Abandoned Checkout Recovery for Shopify",
  description: "Automatically recover lost sales by sending personalized SMS messages to customers who abandon checkout. Smart timing, discount codes, and Shopify integration."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="23faed1b-b706-4cf8-8c07-607fd39c8caa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
