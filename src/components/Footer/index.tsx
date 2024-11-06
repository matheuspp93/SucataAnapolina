import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#218200] body-font mt-5">
      <div className="container flex flex-col items-center justify-between px-5 py-5 mx-auto md:flex-col">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 ">
          <Link
            prefetch={false}
            href="/"
            className="flex items-center justify-center font-medium text-white title-font md:justify-start"
          >
            <Image
              src="/img/logoWhite.png"
              width="200"
              height={100}
              alt="Sucata Anapolina Logo"
            />
          </Link>
          <p className="mt-2 text-sm text-white">
            Rodovia br 153 n° 2565 Bairro jardim arco verde Cep 75105-505
          </p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a
                href="https://www.instagram.com/sucatasanapolina/"
                className="text-white cursor-pointer hover:text-gray-700"
              >
                <FaInstagram color="#fff" />
              </a>
            </span>
          </div>
        </div>
        <div className="-mb-10 -mx-4 md:mt-0 mt-10 ">
          <div className="w-full ">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font text-center">
              SOBRE
            </h2>
            <ul className="list-none mb-10 flex items-center gap-5 w-full">
              <li>
                <Link
                  prefetch={false}
                  href="/sobre-nos"
                  className="text-white cursor-pointer hover:text-gray-800"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  prefetch={false}
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-800"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  prefetch={false}
                  href="/blog"
                  className="text-white cursor-pointer hover:text-gray-800"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-gray-700 capitalize xl:text-center">
            © 2020 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
