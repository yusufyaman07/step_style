import { Link } from "react-router-dom";
import { GiHamburgerMenu as Menu } from "react-icons/gi";
import { RxCross2 as Close } from "react-icons/rx";
import { useEffect, useRef, useState, type FC } from "react";
import UserInfo from "./UserInfo";

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-4 relative z-[200] overflow-visible grid grid-cols-3
      p-4 md:p-6 xl:p-8 rounded-[16px] md:rounded-[24px] xl:rounded-[32px]
      mb-[24px] md:mb-[28px] xl:mb-[32px] border transition-colors duration-300
      ${
        scrolled
          ? "bg-[#0b1220]/90 border-white/20 shadow-2xl"
          : "bg-white/5 border-white/10 backdrop-blur-sm"
      }`}
    >
      {/* Mobile Menu Button */}
      <button
        className="md:hidden cursor-pointer text-xl text-white"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? <Close /> : <Menu />}
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 xl:gap-10 font-semibold text-white/80">
        <Link to="/" className="hover:text-white text-nowrap">
          New Arrivals 🔥
        </Link>
        <Link to="/" className="hover:text-white">
          Man
        </Link>
        <Link to="/" className="hover:text-white">
          Woman
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

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[190] bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          {/* Panel */}
          <div
            id="mobile-nav"
            ref={panelRef}
            className="absolute left-0 right-0 top-full mt-2 z-[300]
                       border border-white/15 bg-[#0b1220]/95 backdrop-blur-sm
                       rounded-2xl shadow-2xl"
          >
            <nav className="flex flex-col p-4 gap-3 font-semibold text-white/90">
              <Link to="/" className="hover:text-white">
                New Arrivals 🔥
              </Link>
              <Link to="/" className="hover:text-white">
                Man
              </Link>
              <Link to="/" className="hover:text-white">
                Woman
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
