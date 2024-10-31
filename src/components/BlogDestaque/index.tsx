"use client";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import { articles } from "@/data/blog";

const BlogDestaque = () => {
  return (
    <section className="w-full mx-auto px-4 mb-12 side-padding">
      <article>
        <SectionTitle tag="Blog" title="Ultimas notícias" />
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          {articles.map((post) => (
            <article
              key={post.id}
              className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              style={{ backgroundImage: `url(${post.imgSrc})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <Link
                    href={`/blog/${post.title.replaceAll(" ", "")}`}
                    className="text-white text-2xl font-bold text-center"
                  >
                    <span className="absolute inset-0"></span>
                    {post.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </section>
      </article>
    </section>
  );
};

export default BlogDestaque;
