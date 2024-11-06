"use client";

import Link from "next/link";
import Banner from "@/components/Banner";
import { articles } from "@/data/blog";

export default function Blog() {
  return (
    <>
      <Banner
        title="Blog"
        img="https://i0.wp.com/asisprojetos.com.br/wp-content/uploads/2023/02/sucata_ou_subproduto.jpg?w=1920&ssl=1s"
      />
      <ul className="gap-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 side-padding bg-[#ededed] py-16 min-[320px]:grid-cols-1">
        {articles.map((item, index) => (
          <li
            key={index}
            className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6 w-full"
          >
            <div
              color="blue-gray"
              className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-blue-gray-500 text-white shadow-blue-gray-500/40 shadow-lg -mt-6 relative h-56"
            >
              <img src={item.imgSrc} alt={item.alt} loading="lazy" />
            </div>
            <div className="p-6">
              <h2 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href={`/blog/${item.title.replaceAll(" ", "")}`}
                className="bg-green-600 p-3 rounded-lg text-white shadow-lg"
              >
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
