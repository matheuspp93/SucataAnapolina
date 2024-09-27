"use client";

import { Breadcrumbs } from "@material-tailwind/react";
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
        className="w-full h-[500px] fixed z-[-10] object-cover"
      />
      <section className="w-full side-padding h-[500px] bg-[#01180692] relative z-10 flex flex-col justify-center gap-3">
        <p className="text-2xl flex items-center font-bold text-[#eeeeee]">
          Sucatas Anapolina
        </p>
        <h2 className="text-6xl text-[#2ea107] font-bold">
          {title.toUpperCase()}
        </h2>
        <Breadcrumbs
          separator="-"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder={undefined}
        >
          <Link href={"/"}>Home</Link>
          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");

            return (
              <Link href={href} key={href} className="text-gray-900">
                {segment[0].toUpperCase() + segment.substring(1)}
              </Link>
            );
          })}
        </Breadcrumbs>
      </section>
    </>
  );
};

export default Banner;
