import type { Metadata } from "next";
import "./globals.css";
import { Root } from "../components/Root";

export const metadata: Metadata = {
  title: "Telegram Mini App",
  description: "A simple Telegram Mini App using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Root> {children}</Root>
      </body>
    </html>
  );
}
