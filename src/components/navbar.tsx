"use client"; // Indica que este es un componente de cliente

import { useState, useEffect } from "react";
import LogoN from "@/assets/logos/logo-n.svg";
import LogoL from "@/assets/logos/logo-p.svg";
import Image from "next/image";

export default function NavBar() {
  const [theme, setTheme] = useState<string>("light");

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

  return (
    <nav className="bg-gray-100 gris dark:bg-gray-900 dark:text-white  rounded-full  md:w-8/12 w-full ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Sección del logo */}
          <div className="flex-shrink-0">
            <a href="/" className="">
              <Image
                src={theme === "light" ? LogoL : LogoN}
                alt={"Logo"}
                className="h-8"
              ></Image>
            </a>
          </div>

          {/* Sección de navegación */}
          <div className="hidden lg:flex  space-x-8">
            <a href="#" className="hover:text-gray-500">
              Plantillas
            </a>
            <a href="#" className="hover:text-gray-500">
              Precios
            </a>
            <a href="#" className="hover:text-gray-500">
              Nosotros
            </a>
          </div>

          {/* Botón de cambio de tema */}
          <div>
            <button
              onClick={toggleTheme}
              className={`${
                theme === "light" ? "fondo-gris" : "fondo-alabaster"
              } ${
                theme === "light" ? "text-white" : "gris"
              }  px-3 py-2  text-sm font-medium rounded-full`}
            >
              <i
                className={`${
                  theme === "light" ? "fas fa-moon" : "fas fa-sun"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
