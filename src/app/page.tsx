"use client";

import NavBar0 from "@/components/navbar0";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/components/footer";
import Principal from "@/app/home/principal";
import Beneficios from "./home/beneficios";
import Proceso from "./home/proceso";
import Accion from "./home/accion";

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen">
      <NavBar0 />
      <Principal />
      <Beneficios />
      <Proceso />
      <Accion />
      <Footer />
    </div>
  );
}
