import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import { Acme, Courier_Prime } from 'next/font/google';

const acme = Acme({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-acme',
  });
  
  const courier = Courier_Prime ( {
    subsets: ['latin'],
    weight: '400',
    variable: '--font-courier',
  })

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
        className={` antialiased`}
      >
         <main className={`relative bg-info flex justify-center items-center flex-col overflow-hidden ${acme.variable} ${courier.variable}`}>
            <Suspense>{children}</Suspense>
            {/* <FloatingNav /> */} 
          </main>
      </body>
    </html>
  );
}
