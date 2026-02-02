import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
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
    <html lang="zh-CN" className={notoSerif.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
