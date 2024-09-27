"use client";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { useState, useEffect } from "react";
import { BlogPost } from "@/types/blog";
import BlogSkeleton from "./skeleton";

const BlogDestaque = () => {
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

  console.log(data);

  return (
    <section className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container w-96 sm:w-auto">
        <div className="flex flex-col items-center justify-center">
          <SectionTitle tag="blog" title="ultimas notícias" />
        </div>
        {loading ? (
          <BlogSkeleton />
        ) : (
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                {data.map((e, idx) => {
                  if (idx <= 1) {
                    return (
                      <article key={idx} className="sm:w-1/2 relative">
                        <time className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          {e.date}
                        </time>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold text-white">
                            {e.title}
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            {e.description}
                          </p>
                          <Link
                            href={`/blog/${e.title.replaceAll(" ", "")}`}
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-green-500 hover:text-green-700 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              className="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                        <img src={e.imgSrc} className="w-full" alt={e.alt} />
                      </article>
                    );
                  }
                })}
              </div>
              <article className="relative">
                <time className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {data[2].date}
                </time>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {data[2].title}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    {data[2].description}
                  </p>
                  <Link
                    href={`/blog/${data[2].title.replaceAll(" ", "")}`}
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-green-500 hover:text-green-700 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <img
                  src={data[2].imgSrc}
                  alt={data[2].alt}
                  className="w-full mt-8 md:mt-6 hidden sm:block"
                />
              </article>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <article className="relative">
                <time className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {data[3].date}
                </time>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {data[3].title}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    {data[3].description}
                  </p>
                  <Link
                    href={`/blog/${data[3].title.replaceAll(" ", "")}`}
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-green-500 hover:text-green-700 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <img
                  src={data[3].imgSrc}
                  alt={data[3].alt}
                  className="w-full sm:block hidden"
                />
              </article>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                {data.map((e, idx) => {
                  if (idx > 3 && idx <= 5) {
                    return (
                      <article key={idx} className="sm:w-1/2 relative">
                        <time className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                          {e.date}
                        </time>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold text-white">
                            {e.title}
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            {e.description}
                          </p>
                          <Link
                            href={`/blog/${e.title.replaceAll(" ", "")}`}
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-green-500 hover:text-green-700 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read More
                            </p>
                            <svg
                              className="fill-stroke"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 12.5L10.25 8L5.75 3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                        <img src={e.imgSrc} className="w-full" alt={e.alt} />
                      </article>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDestaque;
