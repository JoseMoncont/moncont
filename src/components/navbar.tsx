"use client";

import { useState, useEffect } from "react";
import LogoN from "@/assets/logos/logo-n.svg";
import LogoL from "@/assets/logos/logo-p.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [theme, setTheme] = useState<string>("light");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cargar tema desde localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // Cambiar tema y actualizar localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Alternar el menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 dark:text-white rounded-full md:w-9/12 align-middle mt-20 lg:mt-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={theme === "light" ? LogoL : LogoN}
              alt="Logo"
              className="h-8"
            />
          </Link>
        </div>

        {/* Botón de menú para pantallas pequeñas */}
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={toggleMobileMenu}
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-24 w-80 mx-auto lg:static lg:block lg:w-auto bg-gray-50 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent z-10`}
          id="navbar-default"
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 p-4 lg:p-0 lg:mt-0 border lg:border-0 border-gray-100 lg:rounded-none rounded-md bg-white lg:bg-transparent dark:bg-gray-800 dark:border-gray-700 lg:dark:bg-transparent">
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
              >
                Plantillas
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
              >
                Precios
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <button className="btn-primario block w-full lg:w-auto px-3 py-2 rounded">
                Cotizar
              </button>
            </li>
          </ul>
        </div>

        {/* Botón para cambiar el tema */}
        <button
          onClick={toggleTheme}
          className={`${
            theme === "light"
              ? "bg-gray-200 text-gray-800"
              : "bg-gray-700 text-white"
          } px-3 py-2 text-sm font-medium rounded-full ml-4`}
        >
          <i
            className={`${theme === "light" ? "fas fa-moon" : "fas fa-sun"}`}
          ></i>
        </button>
      </div>
    </nav>
  );
}
