import React from "react";
import SectionTitle from "../SectionTitle";

const teamMembers = [
  {
    name: "Vigas W, H, U",
    description:
      "Vigas de Construção de Alta Qualidade! Temos vigas robustas e duráveis, para garantir a resistência e segurança das suas obras.",
    img: "/img/vigas-aco-cortadas-venda-02-768x576.webp",
  },
  {
    name: "Porta Paletes",
    description:
      "Porta Paletes resistentes para otimizar o armazenamento em diversos tipos de estoque. Estrutura robusta, fácil de montar e ajustar conforme a necessidade. Peça já o seu!",
    img: "/img/porta-pallets-11.webp",
  },
  {
    name: "Chapas",
    description:
      "Chapas de alta resistência para diversos projetos. Disponíveis em diferentes tamanhos e espessuras, ideais para aplicações industriais e de construção. Solicite seu orçamento!",
    img: "/img/chapas.webp",
  },
];

const DestaqueProdutos = () => (
  <section className="w-full px-4 py-12 side-padding">
    <div className="text-center pb-12">
      <SectionTitle tag="Produtos" title="Produtos em destaque" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((product, index) => (
        <article
          key={index}
          className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <figure className="h-[200px] w-full overflow-hidden">
            <img
              className="object-cover h-full w-full transition-transform duration-300 hover:scale-110"
              src={product.img}
              alt={`Imagem de ${product.name}`}
            />
          </figure>
          <div className="p-6">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:text-green-800 transition-colors duration-300"
            >
              Saiba mais
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default DestaqueProdutos;
