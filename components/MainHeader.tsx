import React from "react";
import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./MainHeaderBackground";
import logoImg from "@/assets/logo.png";

const MainHeader = () => (
  <>
    <MainHeaderBackground />
    <header className="flex justify-between items-center py-8 px-4 md:px-[10%]">
      <Link
        href="/"
        className="flex items-center justify-center gap-8 text-[#ddd6cb] font-bold font-montserrat tracking-wide uppercase text-2xl"
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
            <Link
              href="/meals"
              className="no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-shadow-[0_0_18px_rgba(248,190,42,0.8)] active:text-transparent active:bg-clip-text active:bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331] active:text-shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-shadow-[0_0_18px_rgba(248,190,42,0.8)] active:text-transparent active:bg-clip-text active:bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331] active:text-shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default MainHeader;
