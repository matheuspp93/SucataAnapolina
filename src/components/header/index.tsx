"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header
      className={`side-padding fixed w-full z-50 bg-white ${
        scrollY >= 75 ? " md:bg-white shadow-md" : "md:bg-transparent"
      } `}
    >
      {scrollY <= 0 && (
        <section className="hidden md:flex justify-between items-center py-2 md:text-white ">
          <div className="flex items-center space-x-2">
            <LuPhoneCall />
            <span>{"(62)"} 3324-0361</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/sucatasanapolina/">
              <IoLogoInstagram size={32} />
            </a>
          </div>
        </section>
      )}

      <section className="md:hidden flex justify-between items-center py-2 md:text-white ">
        <div className="flex items-center space-x-2">
          <LuPhoneCall />
          <span>{"(62)"} 3324-0361</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/sucatasanapolina/">
            <IoLogoInstagram size={32} />
          </a>
        </div>
      </section>
      <section
        className={`w-full text-gray-700 bg-white transition-opacity rounded-lg`}
      >
        <div className="flex w-full md:px-4 justify-between md:items-center md:flex-row">
          <div className="md:p-4 flex flex-row items-center justify-between w-full">
            <a
              href="#"
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white"
            >
              <Image
                src="/img/colorLogo.svg"
                alt="Sucata Anapolina logo"
                width="100"
                height="30"
              />
            </a>
            <button
              className="md:hidden rounded-lg focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <ul
              className={`flex flex-col md:flex-row md:space-x-4 md:relative md:w-auto w-screen ${
                isOpen
                  ? "absolute text-end p-[10px] w-[150px] right-[0] top-[99%] bg-white  gap-3"
                  : ""
              }`}
            >
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  prefetch={false}
                  className="px-4 py-2 lg:text-sm text-lg font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  prefetch={false}
                  className="px-4 py-2 lg:text-sm text-lg font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  prefetch={false}
                  className="px-4 py-2 lg:text-sm text-lg font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="/sobre-nos"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  prefetch={false}
                  className="px-4 py-2 lg:text-sm text-lg font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="/contato"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  prefetch={false}
                  className="px-4 py-2 lg:text-sm text-lg font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="/produtos"
                >
                  Produtos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
