import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammed Fahiz - Web Developer",
  description: "Muhammed Fahiz's portfolio showcasing web development projects and skills.",
  keywords: "Muhammed Fahiz k, Mavoor , Web Developer, Frontend Developer, Portfolio, Next.js, React, JavaScript, MERN Stack ,Kerala , Kozhikode  ",
  authors: [
    {
      name: "Muhammed Fahiz", 
      url: "https://yourwebsite.com",
    },
  ], 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <main className="relative bg-info flex justify-center items-center flex-col overflow-hidden">
            <Suspense>{children}</Suspense>
            {/* <FloatingNav /> */} 
          </main>
      </body>
    </html>
  );
}
