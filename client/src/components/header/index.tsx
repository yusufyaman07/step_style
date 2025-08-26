import { Link } from "react-router-dom";
import { GiHamburgerMenu as Menu } from "react-icons/gi";
import type { FC } from "react";
import UserInfo from "./UserInfo";

const Header: FC = () => {
  return (
    <header className="bg-dark sticky  relative z-[200] overflow-visible top-4 mx-3  card grid grid-cols-3 p-4 md:p-6 xl:p-8 rounded-[16px] md:rounded-[24px] xl:rounded-[32px] mb-[24px] md:mb-[28px] xl:mb-[32px]">
      {/* Mobile Menu */}
      <button className="md:hidden cursor-pointer text-xl text-white">
        <Menu />
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 xl:gap-10 font-semibold text-white/80">
        <Link to="/" className="hover:text-white text-nowrap">
          Yeni Gelenler 🔥
        </Link>
        <Link to="/" className="hover:text-white">
          Erkek
        </Link>
        <Link to="/" className="hover:text-white">
          Kadın
        </Link>
      </nav>

      {/* Logo */}
      <Link to="/" className="flex justify-center items-center">
        <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
      </Link>

      {/* Right Side: User & Cart */}
      <div className="flex justify-end items-center">
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
