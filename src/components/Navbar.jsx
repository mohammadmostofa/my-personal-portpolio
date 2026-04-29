import Navlink from "./shared/Navlink";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative">

      {/* BACKGROUND GLOW (LIGHTWEIGHT) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00285c]/40 via-[#0b1220] to-[#10131b] blur-0"></div>

      <div className="navbar 
        bg-[rgba(0,40,92,0.75)] backdrop-blur-md
        shadow-md py-2 px-4 container mx-auto mt-3 rounded-2xl
        transition-all duration-300 hover:shadow-xl"
      >

        {/* LEFT */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0b1220] rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              <Navlink />
            </ul>
          </div>

          {/* LOGO */}
          <h1
            className="font-extrabold text-lg tracking-widest cursor-pointer
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            transition-all duration-300 hover:scale-110"
          >
            WEB.DEV
          </h1>

        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <Navlink />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">

          <a
            href="https://wa.me/8801784562127"
            className="relative inline-flex items-center justify-center px-5 py-2 rounded-xl text-white font-medium
            bg-gradient-to-r from-blue-600 to-indigo-600
            shadow-md overflow-hidden group
            transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl"
          >
            <span className="relative z-10">Hire Me</span>

            {/* subtle shine */}
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

          </a>

        </div>

      </div>
    </div>
  );
};

export default Navbar;