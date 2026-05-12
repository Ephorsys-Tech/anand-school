"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkItem = {
  label: string;
  to: string;
};

const navLinks: NavLinkItem[] = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/aboutus" },
  { label: "ACADEMICS", to: "/academics" },
  { label: "ADMISSIONS", to: "/admissions" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CONTACT", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-330 mx-auto px-6 lg:px-10 flex items-center justify-between h-20 lg:h-22">
          
          {/* Logo */}
          <Link href="/" className="flex items-center select-none">
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden">
              <img
                src="images/logo.png"
                alt="School Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 md:gap-5 xl:gap-7">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  href={to}
                  className={`
                    relative px-1 py-2
                    text-[12px] lg:text-[13px] xl:text-[14px]
                    font-semibold uppercase
                    tracking-[0.12em] lg:tracking-[0.15em] xl:tracking-[0.18em]
                    transition-all duration-300
                    ${
                      isActive(to)
                        ? "text-blue"
                        : "text-gray-800 hover:text-blue/90"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMenuOpen(true)}
            >
              <span className="w-6 h-0.5 bg-blue rounded" />
              <span className="w-4 h-0.5 bg-blue rounded" />
              <span className="w-6 h-0.5 bg-blue rounded" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[320px] z-70 bg-white px-6 py-6 shadow-2xl transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-14 h-14 rounded-full object-cover"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:text-blue hover:bg-blue/10 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              href={to}
              onClick={() => setMenuOpen(false)}
              className={`
                px-4 py-3 rounded-xl
                text-sm font-semibold uppercase
                tracking-[0.14em]
                transition-all
                ${
                  isActive(to)
                    ? "bg-blue/10 text-blue"
                    : "text-gray-700 hover:bg-blue/5 hover:text-blue"
                }
              `}
            >
              {label}
            </Link>
          ))}
        </ul>
      </aside>
    </>
  );
}