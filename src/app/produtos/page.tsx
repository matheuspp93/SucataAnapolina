/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SectionTitle from "@/components/SectionTitle";
import { teamMembers } from "./data";
import { SetStateAction, useState } from "react";
import Banner from "@/components/Banner";

export default function Produtos() {
  // Definindo o número de itens por página
  const itemsPerPage = 12;

  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula o índice inicial e final dos itens a serem exibidos na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Obtém os produtos para a página atual
  const currentItems = teamMembers.slice(indexOfFirstItem, indexOfLastItem);

  // Função para mudar de página
  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  // Número total de páginas
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  return (
    <>
      <Banner
        title="Produtos"
        img="https://www.mggrupo.com.br/blog/wp-content/uploads/2024/02/sucata.jpg"
      />
      <section className="w-full px-4 py-12 side-padding bg-white">
        <div className="text-center pb-12">
          <SectionTitle tag="Produtos" title="Conheça os nossos produtos" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((product, index) => (
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
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
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

        {/* Paginação */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      </section>
    </>
  );
}
