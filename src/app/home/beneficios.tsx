"use client";

const benefits = [
  {
    icon: "fa-pencil-ruler",
    title: "Diseño Personalizado",
    description:
      "Cada proyecto es único. Nos aseguramos de reflejar tu estilo y visión en cada detalle.",
    color: "text-blue-500",
  },
  {
    icon: "fa-bolt",
    title: "Entrega Rápida",
    description:
      "Sabemos que el tiempo es crucial. Trabajamos con plazos cortos sin comprometer la calidad.",
    color: "text-yellow-500",
  },
  {
    icon: "fa-headset",
    title: "Soporte Continuo",
    description:
      "No solo creamos tu proyecto; estamos aquí para asegurarnos de que siempre funcione al 100%.",
    color: "text-green-500",
  },
  {
    icon: "fa-dollar-sign",
    title: "Accesible para Todos",
    description:
      "Ofrecemos precios justos que se ajustan a cualquier presupuesto, sin sacrificar calidad.",
    color: "text-purple-500",
  },
];

export default function Beneficios() {
  return (
    <section className=" py-16 bg-gray-50 dark:bg-slate-800 w-9/12 ">
      <div className="md:grid grid-cols-2 ">
        <div className=" content-center justify-center mx-auto md:w-96 mb-10">
          <p className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl poppins-bold">
            {" "}
            ¿Por qué elegirnos?
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 roboto-regular">
            Creamos soluciones digitales que conectan con tu audiencia y
            potencian tus ideas.
          </p>
        </div>
        <div className=" md:grid md:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center  border p-5  rounded-xl mb-5"
            >
              <i
                className={`fa-solid ${benefit.icon} ${benefit.color} text-4xl `}
              ></i>
              <h3 className="mt-4 text-lg font-bold text-gray-800 dark:text-white poppins-bold">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 roboto-regular text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
