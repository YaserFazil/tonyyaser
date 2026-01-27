import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tony Yaser | AI Automation Specialist",
  description: "Personal portfolio showcasing AI agents and automation solutions. 6 years of experience building intelligent systems that save businesses time and reduce costs.",
  keywords: ["AI automation", "AI agents", "business automation", "real estate automation", "Tony Yaser"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}
