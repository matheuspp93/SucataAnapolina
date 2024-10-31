import React from "react";
import SectionTitle from "../SectionTitle";

const teamMembers = [
  {
    name: "Vigas W, H, U",
    position:
      "Vigas de Construção de Alta Qualidade! Temos vigas robustas e duráveis, para garantir a resistência e segurança das suas obras.",
    img: "/img/vigas-aco-cortadas-venda-02-768x576.webp",
  },
  {
    name: "Porta Paletes",
    position:
      "Porta Paletes resistentes para otimizar o armazenamento em diversos tipos de estoque. Estrutura robusta, fácil de montar e ajustar conforme a necessidade. Peça já o seu!",
    img: "/img/porta-pallets-11.webp",
  },
  {
    name: "Chapas",
    position:
      "Chapas  de alta resistência para diversos projetos. Disponíveis em diferentes tamanhos e espessuras, ideais para aplicações industriais e de construção. Solicite seu orçamento!",
    img: "/img/chapas.webp",
  },
  // Adicione outros membros da equipe conforme necessário
];

const DestaqueProdutos = () => (
  <section className="w-full px-4 py-12 side-padding">
    <div className="text-center pb-12">
      <SectionTitle tag="Produtos" title="Produtos em destaque" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member, index) => (
        <article
          key={index}
          className="w-full bg-[#4ec932] rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
        >
          <figure className="h-[288px] w-full">
            <img
              className="object-center object-cover h-full w-full"
              src={member.img}
              alt={`Photo of ${member.name}`}
            />
          </figure>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-white font-bold mb-2">{member.name}</p>
            <p className="text-base text-white font-normal px-1">
              {member.position}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default DestaqueProdutos;
