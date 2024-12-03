export default function Accion() {
  return (
    <>
      <div className="w-9/12">
        {" "}
        <div className="md:grid grid-cols-2 gap-5 ">
          <div className="mb-5">
            <p className="text-2xl poppins-bold">
              ¿Estás listo para transformar tus ideas en realidad digital?
            </p>
          </div>
          <div className="grid gap-3 ">
            <button className="btn-primario h-10">
              Cotiza tu proyecto ahora
            </button>
            <button className="btn-secundario h-10">Explorar plantillas</button>
            <button className="btn-terciario">Contáctanos</button>
          </div>
        </div>
      </div>
    </>
  );
}
