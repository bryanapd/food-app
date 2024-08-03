import React from "react";
import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./MainHeaderBackground";
import logoImg from "@/assets/logo.png";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-8 px-4 md:px-[10%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 text-[#ddd6cb] font-bold font-montserrat tracking-wider uppercase text-2xl"
        >
          <Image
            width={100}
            height={100}
            src={logoImg.src}
            alt="A plate with food on it"
            className="w-20 h-20 object-contain drop-shadow-custom"
            priority
          />
          NextLevel Food
        </Link>

        <nav className="nav">
          <ul className="list-none m-0 p-0 flex gap-6 text-xl font-montserrat">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
