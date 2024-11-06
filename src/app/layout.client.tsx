"use client";
import "animate.css/animate.compat.css"
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preconnect("https://fonts.googleapis.com", {
    crossOrigin: "anonymous",
  });
  ReactDOM.preconnect("https://fonts.gstatic.com", {
    crossOrigin: "anonymous",
  });

  return null;
}

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
