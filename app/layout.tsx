import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Валентина, открой коробочку ♥",
  description: "Приглашение от Тимура на свидание в гастробар «Коробок» в Новосибирске.",
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
