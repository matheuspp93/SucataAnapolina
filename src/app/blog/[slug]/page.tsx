"use client";
import Banner from "@/components/Banner";
import { BlogPost } from "@/types/blog";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Slug() {
  const path = usePathname();
  const title = path
    .split("/")
    [path.split("/").length - 1].replaceAll("%20", " ");

  const [data, setData] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const item = data.find((e) => e.title.replaceAll(" ", "") === title);

  return (
    <>
      <Banner
        title={item?.title ?? ""}
        img="https://i0.wp.com/asisprojetos.com.br/wp-content/uploads/2023/02/sucata_ou_subproduto.jpg?w=1920&ssl=1s"
      />
      <div
        className="py-16 bg-[#ededed] side-padding flex flex-col gap-3"
        dangerouslySetInnerHTML={{ __html: item ? item.html : <div></div> }}
      ></div>
    </>
  );
}
