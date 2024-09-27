"use client";

import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
