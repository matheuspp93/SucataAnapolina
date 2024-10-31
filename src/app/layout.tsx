import Header from "@/components/Header";
import LayoutClient from "./layout.client";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Home",
  generator: "Next.js",
  applicationName: "SucatasAnapolina",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Sucatas",
    "Reciclagem de metais",
    "Compra de sucata",
    "Venda de sucata",
    "Reciclagem industrial",
    "Sucatas em Anápolis",
    "Viga",
    "Ferragem",
    "Ferro",
  ],
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <LayoutClient>
          <Header />
          <main className="flex flex-col h-auto">{children}</main>
          <Footer />
        </LayoutClient>
      </body>
    </html>
  );
}
