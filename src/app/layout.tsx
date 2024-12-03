import type { Metadata } from "next";
import "./globals.css";
import "@/styles/generales.css";
import "@/styles/components/botones.css";
import "@/styles/fuentes.css";

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
      <body className={` `}>
        <>{children}</>
      </body>
    </html>
  );
}
