"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
    console.log(window.scrollY);
  };

  useEffect(() => {
    // Adiciona o evento de scroll apenas no cliente
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {scrollY <= 0 && (
        <section className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <LuPhoneCall />
            <span>99 99999-9999</span>
          </div>
          <div className="flex space-x-4">
            <a href="">
              <IoLogoInstagram />
            </a>
            <a href="">
              <IoLogoFacebook />
            </a>
          </div>
        </section>
      )}
      <header
        className={`w-full ${
          scrollY >= 75 ? "fixed left-0" : ""
        } text-gray-700 bg-white transition-opacity`}
      >
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
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
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li>
                <a
                  className="px-4 py-2 text-sm font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="#"
                >
                  {scrollY}
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 text-sm font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 text-sm font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 text-sm font-semibold text-[#218200] bg-transparent rounded-lg"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
