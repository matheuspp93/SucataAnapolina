import BlogDestaque from "@/components/BlogDestaque";
import CarouselBanner from "@/components/Carossel";
import Destaque from "@/components/Destaque";
import DestaqueProdutos from "@/components/DestaqueProdutos";
import ProcessLine from "@/components/ProcessLine";

export default function Home() {
  return (
    <>
      <section className="h-[600px]">
        <CarouselBanner />
      </section>
      <Destaque
        bg="color"
        img="https://industriasa.com.br/wp-content/uploads/2023/05/Sucata-Metalica-Brasileira.webp"
        tag="Sobre"
        texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        titulo="Nossa História"
      />
      <DestaqueProdutos />
      <ProcessLine />
      <BlogDestaque />
    </>
  );
}
