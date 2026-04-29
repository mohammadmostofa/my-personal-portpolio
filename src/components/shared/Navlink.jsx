"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" },
];

const Navlink = () => {
  const pathName = usePathname();
const linkClass = (href) => {
  return `
    relative font-medium text-md px-4 py-2 rounded-lg cursor-pointer
    transition-all duration-300 ease-in-out

    hover:bg-[#1c2028] hover:text-white hover:shadow-md
    hover:scale-105

    ${
      pathName === href
        ? "bg-[#1c2028] text-white shadow-md scale-105"
        : "text-gray-300"
    }
  `;

  };

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={  linkClass(link.href)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navlink;