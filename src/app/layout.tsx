import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";

const sohne = localFont({
  src: [
    {
      path: '../fonts/Sohne-Buch.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Sohne-Kraftig.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-sohne',
});

export const metadata: Metadata = {
  title: "我的个人网站", // Temporary title
  description: "Personal website, blog and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={sohne.variable} suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
