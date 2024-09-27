import React from "react";
import { MdOutlineKeyboardOptionKey } from "react-icons/md";

export interface DestaqueProps {
  img: string;
  titulo: string;
  tag: string;
  bg: "transparent" | "color";
  texto: string;
}

const Destaque: React.FC<DestaqueProps> = ({ img, titulo, tag, bg, texto }) => {
  return (
    <section
      className={`flex w-full items-center gap-5 side-padding my-10 ${
        bg === "color" ? "bg-gray-300" : "bg-transparent"
      } `}
    >
      <div className="relative w-1/2 py-5">
        <img
          src={img}
          alt="Imagem destaque"
          className="w-full h-auto rounded-xl"
        />
      </div>
      <div className="w-1/2">
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
