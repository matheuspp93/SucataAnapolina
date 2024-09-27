// components/Footer.js

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#218200] body-font mt-5">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
            <Image
              src="/img/ColorLogo.svg"
              width="100"
              height={100}
              alt="Sucata Anapolina Logo"
            />
          </a>
          <p className="mt-2 text-sm text-white">Design, Code and Ship!</p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-white cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.225 0h-20.45C.996 0 0 .996 0 2.225v19.55C0 23.004.996 24 2.225 24h20.45C23.004 24 24 23.004 24 22.225V2.225C24 .996 23.004 0 22.225 0zM8 20H4v-8h4v8zm-2-9.184A2.157 2.157 0 112 8.816 2.156 2.156 0 016 8.816zM20 20h-4v-4.204c0-1.032-.397-1.9-1.058-2.578A3.591 3.591 0 0016 12c-1.859 0-3 1.04-3 3.03V20h-4v-8h4v1.093c.562-.868 1.512-1.593 2.77-1.593 1.919 0 3.233 1.254 3.233 3.278V20z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white cursor-pointer hover:text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.425 0H3.575A3.575 3.575 0 000 3.575v17.85A3.575 3.575 0 003.575 24h16.85A3.575 3.575 0 0024 20.425V3.575A3.575 3.575 0 0020.425 0zM16.124 20.425h-3.68v-6.79c0-1.67-.608-2.813-2.137-2.813-1.167 0-1.858.78-2.154 1.527-.111.27-.139.645-.139 1.016v7.057H8.012V10.113h3.73v1.565c.496-.762 1.385-1.839 3.174-1.839 2.313 0 4.069 1.517 4.069 4.775V20.425z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap -mb-10 -mx-4 md:mt-0 mt-10">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
              RESOURCES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Resource One
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Resource Two
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Resource Three
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Resource Four
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
              ABOUT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-white cursor-pointer hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
            </nav>
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
