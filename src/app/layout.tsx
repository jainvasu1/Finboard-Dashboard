import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "FinBoard",
  description: "Customizable Finance Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
