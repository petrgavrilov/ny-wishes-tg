import "../styles/reset.scss";
import "../styles/globals.scss";

import type { Metadata } from "next";
import { Root } from "../components/Root";

export const metadata: Metadata = {
  title: "New Year Wishes",
  description: "Choose New Year wishes and send them to your friends",
  viewport: "width=device-width, initial-scale=1.0, user-scalable=no",
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
