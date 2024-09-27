"use client";
import Banner from "@/components/Banner";
import { BlogPost } from "@/types/blog";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Blog() {
  const [data, setData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Banner
        title="Blog"
        img="https://i0.wp.com/asisprojetos.com.br/wp-content/uploads/2023/02/sucata_ou_subproduto.jpg?w=1920&ssl=1s"
      />
      <ul className="gap-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  side-padding bg-[#ededed] py-16 min-[320px]:grid-cols-1">
        {data.map((item, index) => (
          <li
            key={index}
            className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6 w-full"
          >
            <CardHeader
              color="blue-gray"
              className="relative h-56"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <img src={item.imgSrc} alt={item.alt} />
            </CardHeader>
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {item.title}
              </Typography>
              <Typography
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter
              className="pt-0"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Link
                href={`/blog/${item.title.replaceAll(" ", "")}`}
                className="bg-green-500 p-3 rounded-lg text-white shadow-lg"
              >
                Read More
              </Link>
            </CardFooter>
          </li>
        ))}
      </ul>
    </>
  );
}
