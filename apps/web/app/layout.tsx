import type { Metadata } from "next";
import '@repo/ui/globals.css'
import NavBar from "./lib/components/navbar";
import {Inter} from "next/font/google";

const inter = Inter({
  weight:"variable",
  variable:"--font-sans"
})



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}