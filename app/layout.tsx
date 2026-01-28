import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tony Yaser | AI Automation Specialist",
  description: "Personal portfolio showcasing AI agents and automation solutions. 7 years of experience building intelligent systems that save businesses time and reduce costs.",
  keywords: ["AI automation", "AI agents", "business automation", "real estate automation", "Tony Yaser"],
  authors: [{ name: "Tony Yaser" }],
  creator: "Tony Yaser",
  publisher: "Tony Yaser",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tonyyaser.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tony Yaser | AI Automation Specialist",
    description: "Personal portfolio showcasing AI agents and automation solutions. 7 years of experience building intelligent systems that save businesses time and reduce costs.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tonyyaser.com',
    siteName: "Tony Yaser Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/tonyyasercom-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tony Yaser - AI Automation Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tony Yaser | AI Automation Specialist",
    description: "Personal portfolio showcasing AI agents and automation solutions. 7 years of experience building intelligent systems that save businesses time and reduce costs.",
    images: ['/tonyyasercom-og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
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
