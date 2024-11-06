"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Banner = ({ title, img }: { title: string; img: string }) => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <>
      <img
        src={img}
        alt="Banner Image"
        className="w-full h-[400px] fixed z-[-10] object-cover"
      />
      <section className="w-full side-padding h-[400px] bg-[#01180692] relative z-10 flex flex-col justify-end gap-3">
        <p className="text-2xl flex items-center font-bold text-[#eeeeee]">
          Sucatas Anapolina
        </p>
        <h2 className="text-4xl md:text-6xl text-[#33c203] font-bold">
          {title.toUpperCase()}
        </h2>
        <ul className="mb-14 flex flex-wrap items-center w-fit bg-blue-gray-50 bg-opacity-60 py-2 px-4 rounded-md">
          <li>
            <Link className="pr-[5px]" href={"/"}>
              Home -
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");

            return (
              <li key={index}>
                <Link href={href} key={href} className="text-gray-900">
                  {segment[0].toUpperCase() + segment.substring(1)}
                  {index === pathSegments.length - 1 ? "" : " -"}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Banner;
