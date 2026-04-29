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
    return `font-medium text-md px-4 py-2 rounded-md transition-all duration-200 ${
      pathName === href
        ? "bg-gray-900 text-white shadow-md"
        : ""
    }`;
  };

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={linkClass(link.href)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navlink;