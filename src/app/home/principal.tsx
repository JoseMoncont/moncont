"use client";

import Image from "next/image";
import LogoL from "@/assets/logos/logo-p.svg";
import Link from "next/link";

export default function Principal() {
  return (
    <main className="flex flex-col h-screen px-6">
      {/* Navbar fija en la parte superior */}

      {/* Contenedor centralizado */}
      <div className="flex flex-col flex-1 items-start justify-center">
        <Image
          className=""
          src={LogoL}
          alt="logo"
          width={180}
          height={38}
          priority
        />
        <div className="text-center mt-8">
          <p className="text-3xl md:text-4xl dark:text-white gris poppins-regular">
            Transformamos tus ideas en experiencias{" "}
            <span className="text-white naranja font-bold poppins-bold">
              digitales
            </span>
            .
          </p>
          <p className="text-gray-500 dark:text-slate-400 pt-4">
            Ya sea una aplicación móvil, un sitio web o un prototipo, damos vida
            a tu visión con soluciones personalizadas y diseño profesional.
          </p>
        </div>
        <div className="flex gap-4 items-center mt-8">
          <Link
            className="btn-primario transition-colors flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/cotizacion"
            rel="noopener noreferrer"
          >
            Comienza hoy
          </Link>
          <Link
            className="btn-secundario dark:btn-secundario-dark border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/plantillas"
            rel="noopener noreferrer"
          >
            Explorar plantillas
          </Link>
        </div>
      </div>
    </main>
  );
}
