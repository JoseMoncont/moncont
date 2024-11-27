import NavBar from "@/components/navbar";

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-slate-950">
          {" "}
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  );
}
