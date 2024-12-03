import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/generales.css";
import "@/styles/components/botones.css";
import "@/styles/fuentes.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Moncont",
  description: "Moncont Studio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={` antialiased`}>
        <>{children}</>
      </body>
    </html>
  );
}
