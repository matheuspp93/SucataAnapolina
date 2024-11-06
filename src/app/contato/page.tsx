import Banner from "@/components/Banner";
import DestaqueProdutos from "@/components/DestaqueProdutos";
import Valores from "@/components/Valores";
import { BiLogoWhatsappSquare } from "react-icons/bi";

export const metadata = {
  title: "Contato",
  description:
    "Entre em contato com a nossa equipe especializada em sucata e materiais recicláveis. Oferecemos soluções rápidas e eficientes para venda e compra de sucata. Solicite seu orçamento via WhatsApp ou envie uma mensagem para obter mais informações sobre nossos serviços.",
};

export default function Contato() {
  return (
    <>
      <Banner
        title="Contato"
        img="https://i0.wp.com/asisprojetos.com.br/wp-content/uploads/2023/02/sucata_ou_subproduto.jpg?w=1920&ssl=1s"
      />

      <section className="bg-white">
        <Valores />
        <DestaqueProdutos />
        <a
          href="https://wa.me/5562994921652?text=Ol%C3%A1,%20Estou%20no%20site%20agora%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
          className="fixed bottom-0 right-0 m-4 bg-[#4ec932] flex items-center px-2 rounded-md text-white"
          target="_blank"
        >
          Faça um orçamento
          <BiLogoWhatsappSquare size={63} color="#ebebeb" />
        </a>
      </section>
    </>
  );
}
