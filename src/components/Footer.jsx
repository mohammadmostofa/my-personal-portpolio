import React from "react";
import { FaGithub, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import Navlink from "./shared/Navlink";

const FooterPage = () => {
  return (
    <footer
      className="footer footer-horizontal footer-center
      bg-gradient-to-r from-[#00285c] via-[#0b1220] to-[#10131b]
      text-white rounded  mt-10 py-12 px-6 md:px-15 relative overflow-hidden"
    >
      {/* soft glow background */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

      {/* Brand */}
      <h1
        className="relative font-extrabold pt-8 pb-10 text-4xl md:text-5xl
        bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400
        bg-clip-text text-transparent
        transition-all duration-300 hover:scale-105"
      >
        Mostofa.dev
      </h1>

      {/* NAV GRID (same structure kept) */}
      <nav className="relative grid grid-flow-col gap-4">
        <div className="flex gap-4">
          <Navlink />
        </div>
      </nav>

      {/* SOCIAL GRID (same structure kept) */}
      <nav className="relative">
        <div className="grid grid-flow-col gap-6 text-2xl">
          <a
            href="https://www.facebook.com/mohammadmostofa.dev"
            className="transition-all duration-300 hover:scale-125 hover:text-blue-500"
          >
            <FaSquareFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammadmostofa"
            className="transition-all duration-300 hover:scale-125 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/mohammadmostofa"
            className="transition-all duration-300 hover:scale-125 hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>
      </nav>

      {/* COPYRIGHT */}
      <aside className="relative pt-8 text-sm text-gray-400">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="text-white font-semibold">Mohammad Mostofa</span>
        </p>
      </aside>
    </footer>
  );
};

export default FooterPage;