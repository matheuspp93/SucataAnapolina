"use client";

import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Header />
          <main>{children}</main>
          <footer></footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
