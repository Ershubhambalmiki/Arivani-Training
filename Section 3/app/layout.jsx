"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Next Practice</title>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
