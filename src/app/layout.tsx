import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Stem Hack Club",
  description:
    "Stem Hack Club is a community of students who are passionate about STEM and coding.",
  keywords: [
    "STEM",
    "stem",
    "hack club",
    "Hack Club",
    "Coding Club",
    "Programming",
    "Students",
    "Technology",
    "egypt"
  ],
  metadataBase: new URL("https://stem-hack-club-site.vercel.app"),  
  alternates: {
    canonical: "https://stem-hack-club-site.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://stem-hack-club-site.vercel.app",
    title: "Stem Hack Club - Learn & Code",
    description:
      "Join Stem Hack Club to learn STEM and coding with other passionate students.",
    siteName: "Stem Hack Club",
    images: [
      {
        url: "https://stem-hack-club-site.app/og-image.jpg",  
        width: 1200,
        height: 630,
        alt: "Stem Hack Club Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitter",  
    creator: "@yourtwitter",
    title: "Stem Hack Club - Learn & Code",
    description:
      "Join Stem Hack Club to learn STEM and coding with other passionate students.",
    images: [
      "https://stem-hack-club-site.app/og-image.jpg", 
    ],
  },
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
