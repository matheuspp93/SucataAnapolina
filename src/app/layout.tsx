import LayoutClient from "./layout.client";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { BiLogoWhatsappSquare } from "react-icons/bi";

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
          <a
            href="https://wa.me/5562994921652?text=Ol%C3%A1,%20Estou%20no%20site%20agora%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            className="fixed bottom-0 right-0 m-4 bg-[#4ec932] flex items-center px-2 rounded-md text-white"
            target="_blank"
          >
            Faça um orçamento
            <BiLogoWhatsappSquare size={63} color="#ebebeb" />
          </a>
          <Footer />
        </LayoutClient>
      </body>
    </html>
  );
}
