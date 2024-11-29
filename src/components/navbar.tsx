"use client";

import { useState, useEffect } from "react";
import LogoN from "@/assets/logos/logo-n.svg";
import LogoL from "@/assets/logos/logo-p.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [theme, setTheme] = useState<string>("light");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cargar tema desde localStorage o establecer "light" por defecto
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light"; // Predeterminado "light"
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Cambiar tema y actualizar localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // const clearLocalStorage = () => {
  //   localStorage.removeItem("theme"); // Elimina solo la clave "theme"
  //   // localStorage.clear(); // Usa esto si quieres limpiar todo
  //   setTheme("light"); // Establece el tema a light por defecto
  //   document.documentElement.classList.remove("dark"); // Asegúrate de quitar la clase "dark"
  // };

  // Alternar el menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 dark:text-white rounded-full w-full md:w-full lg:w-9/12 align-middle mt-20 lg:mt-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={theme === "light" ? LogoL : LogoN}
              alt="Logo"
              className="h-8 "
            />
          </Link>
        </div>

        {/* Botón de menú para pantallas pequeñas */}

        {/* Menú de navegación */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-32 sm:top-44  w-80 mx-auto lg:static lg:block lg:w-auto  lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent z-10 rounded-3xl`}
          id="navbar-default"
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 p-4 lg:p-0 lg:mt-0 border lg:border-0 border-gray-100 lg:rounded-none rounded-md bg-gray-100 lg:bg-transparent dark:bg-gray-800 dark:border-gray-700 lg:dark:bg-transparent">
            <li>
              <Link
                href="/plantillas"
                className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
              >
                Plantillas
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <button className="btn-primario block w-full lg:w-auto px-3 py-2 ">
                Cotizar
              </button>
            </li>
          </ul>
        </div>

        <div className="flex">
          <div>
            <button
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
              onClick={toggleMobileMenu}
              aria-controls="navbar-default"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menú</span>
              <i className="fa-solid fa-bars"></i>
            </button>
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
        {/* <button onClick={clearLocalStorage} className="btn">
          Restablecer tema
        </button> */}
      </div>
    </nav>
  );
}
