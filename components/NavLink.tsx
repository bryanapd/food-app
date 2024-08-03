"use client";

import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={classNames(
        "no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-shadow-[0_0_18px_rgba(248,190,42,0.8)]",
        {
          "text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a05] to-[#f9b331] text-shadow-[0_0_18px_rgba(248,190,42,0.8)]":
            path.startsWith(href),
        }
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
