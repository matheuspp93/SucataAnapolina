"use client";
import React from "react";
import { MdOutlineKeyboardOptionKey } from "react-icons/md";

export interface DestaqueProps {
  img: string;
  titulo: string;
  tag: string;
  bg: "transparent" | "color";
  texto: string;
  flexDir?: "reverse";
  animateIn?: string;
}

const Destaque: React.FC<DestaqueProps> = ({
  img,
  titulo,
  tag,
  bg,
  texto,
  flexDir,
}) => {
  return (
    <section
      className={`flex w-full items-center lg:items-start gap-5 side-padding mt-10 flex-col lg:h-[400px] ${
        bg === "color" ? "bg-gray-300" : "bg-transparent"
      } ${flexDir === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="relative w-full py-5 lg:w-1/2 lg:h-full">
        <img
          src={img}
          alt="Imagem destaque"
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 py-5">
        <p className="text-2xl flex items-center font-bold text-[#71717a]">
          {tag.toUpperCase()} <MdOutlineKeyboardOptionKey size={32} />
        </p>
        <h2 className="text-4xl font-bold text-[#218200] py-2">{titulo}</h2>
        <p className="mt-4 text-lg">{texto}</p>
      </div>
    </section>
  );
};

export default Destaque;
