import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { NextUIProvider } from "@nextui-org/react";
export const metadata: Metadata = {
  title: "MyTvStick.de - Dein TV Stick mit allen Kanälen",
  description: "Schnell, einfach unkompliziert einrichten! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="">
          <NextUIProvider>{children}</NextUIProvider>
        </div>
      </body>
    </html>
  );
}
