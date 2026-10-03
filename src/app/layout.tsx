import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nivenportfolio.netlify.app"),
  title: "Niven Liyanage | Junior Game Developer",
  description:
    "Portfolio of Niven Liyanage, a Junior Game Developer and Computing undergraduate building Roblox experiences, full-stack applications, and IoT systems.",
  keywords: [
    "Niven Liyanage",
    "Junior Game Developer",
    "Roblox Developer",
    "Luau",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "IoT",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: "Niven Liyanage" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Niven Liyanage | Game Developer Portfolio",
    description: "Junior Game Developer, full-stack builder, and Computing undergraduate.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Niven Liyanage | Game Developer Portfolio",
    description: "Junior Game Developer, full-stack builder, and Computing undergraduate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-slate-800 transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
