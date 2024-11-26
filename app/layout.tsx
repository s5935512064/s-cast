import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "S-CAST เรื่องเล่าชาวสินธร",
  description:
    "แพลตฟอร์มที่จะเชื่อมความรู้และประสบการณ์ของครอบครัวสยามสินธรเข้าด้วยกัน",
};

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSansThai.className}>{children}</body>
    </html>
  );
}
