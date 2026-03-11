import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "OsmanXMedia | Premium Digital Marketing Agency",
  description: "High-impact video production and data-driven advertising strategies.",
};

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white text-primary-navy`}
      >
        {children}
      </body>
    </html>
  );
}
