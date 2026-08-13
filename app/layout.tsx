import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Валентина, это для тебя ♥",
  description: "Приглашение от Тимура на свидание в ресторан «Романтика».",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
