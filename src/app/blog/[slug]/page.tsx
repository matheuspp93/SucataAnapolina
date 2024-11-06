"use client";

import Banner from "@/components/Banner";
import { articles } from "@/data/blog";
import { usePathname } from "next/navigation";

export default function Slug() {
  const path = usePathname();
  const title = path
    .split("/")
    [path.split("/").length - 1].replaceAll("%20", " ");

  const item = articles.find((e) => e.title.replaceAll(" ", "") === title);

  return (
    <>
      <Banner
        title={item?.title ?? ""}
        img={
          item?.imgSrc ??
          "https://i0.wp.com/asisprojetos.com.br/wp-content/uploads/2023/02/sucata_ou_subproduto.jpg?w=1920&ssl=1"
        }
      />
      <div
        className="py-16 bg-[#ededed] side-padding flex flex-col gap-3"
        dangerouslySetInnerHTML={{ __html: item?.html ?? "<div></div>" }}
      ></div>
    </>
  );
}
