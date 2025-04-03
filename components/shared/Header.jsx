"use client";

import React from "react";
import siteConfig from "@/config/site";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: `${siteConfig.name}`, path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Newsletter", path: "/newsletter" },
];

function Header() {
  // THEME TOGGLE
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") === "dark";

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialMode =
      savedMode || (!("theme" in localStorage) && systemPrefersDark);
    setDarkMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    document.documentElement.classList.toggle("dark", newMode);

    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // NAVIGATION TOGGLE
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsNavOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // THEME BUTTON CLASS
  const themeToggleClass =
    "relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:rounded-full";

  return (
    <>
      <header className="relative py-3 md:pt-5 md:pb-8 xl:pt-7.5 xl:pb-12.5 mb-3 sm:mb-5">
        <div className="container">
          <nav className="flex items-center justify-between py-1.75">
            <Link
              href="/"
              className="text-[calc(var(--text-sm)_+_2px)] font-semibold"
            >
              {siteConfig.name}
            </Link>
            <div
              className={`fixed inset-0 z-1 h-screen md:h-fit md:static ${
                isNavOpen ? 'flex' : 'hidden'
              } md:flex flex-col md:flex-row items-center justify-center gap-4 ${
                darkMode ? "bg--gray" : "bg-theme"
              }  md:bg-transparent`}
            >
              <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-4">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className="first:md:hidden first:mb-8 [&:first-of-type>a]:p-0"
                  >
                    <Link
                      href={item.path}
                      className="text-[calc(var(--text-sm)_+_2px)] p-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                title={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
                onClick={toggleTheme}
                className={`relative flex items-center gap-4 mx-auto ${
                  darkMode ? "bg-white" : "bg-dark"
                } py-2 px-4 rounded-full`}
              >
                <div
                  className={`${themeToggleClass} ${
                    darkMode ? "before:bg-dark" : ""
                  }`}
                >
                  <img
                    src="/images/icons/sun.png"
                    alt="Sun"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  className={`${themeToggleClass} ${
                    !darkMode ? "before:bg-theme" : ""
                  }`}
                >
                  <img
                    src="/images/icons/moon.png"
                    alt="Moon"
                    width={24}
                    height={24}
                  />
                </div>
              </button>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <img
                className={`${darkMode ? "invert" : ""}`}
                src="/images/icons/menu.png"
                alt="List_Vector"
                width={32}
                height={32}
              />
            </button>
            {isNavOpen && (
            <button
              className={`fixed top-auto right-0 bottom-5 left-0 z-1 w-fit md:hidden mx-auto`}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <img
                className={`${darkMode ? "" : "invert"}`}
                src="/images/icons/cross.png"
                alt="Cross_Icon"
                width={32}
                height={32}
              />
            </button>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
