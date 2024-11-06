import Banner from "@/components/Banner";
import Destaque from "@/components/Destaque";
import Valores from "@/components/Valores";

export const metadata = {
  title: "Sobre Nós",
};

export default function SobreNos() {
  return (
    <>
      <Banner
        title="Sobre Nós"
        img="https://www.mggrupo.com.br/blog/wp-content/uploads/2024/02/sucata.jpg"
      />
      <section className="bg-white">
        <Destaque
          bg="color"
          img="https://industriasa.com.br/wp-content/uploads/2023/05/Sucata-Metalica-Brasileira.webp"
          tag="Sobre"
          texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          titulo="Nossa História"
        />
        <Destaque
          flexDir="reverse"
          bg="transparent"
          img="https://grandesconstrucoes.com.br/Imagens/Noticias/04_sucata.jpg"
          tag="Nossa"
          titulo="Visão"
          texto="Ser líder de mercado no segmento de gestão comercial nas transformações de sucatas ferrosas, atendendo as expectativas dos clientes e parceiros sendo reconhecido por promover sustentabilidade ambiental."
        />
        <Valores />
        <Destaque
          bg="color"
          img="https://grandesconstrucoes.com.br/Imagens/Noticias/04_sucata.jpg"
          tag="Nossa"
          titulo="Missão"
          texto="Atender com excelência nossos clientes, visando a sustentabilidade comercial e ambiental a fim de garantir uma gestão correta de resíduo contribuindo para o meio ambiente, com qualidade e segurança nos processos."
        />
      </section>
    </>
  );
}
