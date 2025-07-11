import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshayakumar Portfolio",
  description:
    "Welcome to the portfolio of Akshay — IT Specialist & Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* OG meta tags (for WhatsApp, LinkedIn, etc.) */}
        <meta property="og:title" content="Akshayakumar Portfolio" />
        <meta
          property="og:description"
          content="Welcome to the portfolio of Akshay — IT Specialist & Web Developer."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://akshayakumar-portfolio-nxtjs-22h6.vercel.app/og-image.png"
        />
        <meta
          property="og:url"
          content="https://akshayakumar-portfolio-nxtjs-22h6.vercel.app"
        />

        {/* Twitter preview card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akshayakumar Portfolio" />
        <meta
          name="twitter:description"
          content="Welcome to the portfolio of Akshay — IT Specialist & Web Developer."
        />
        <meta
          name="twitter:image"
          content="https://akshayakumar-portfolio-nxtjs-22h6.vercel.app/og-image.png"
        />

        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
