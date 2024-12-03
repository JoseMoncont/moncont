"use client";

export default function Proceso() {
  const steps = [
    {
      icon: "fa-lightbulb",
      title: "1. Exploración",
      description:
        "Analizamos tus necesidades y objetivos para crear una estrategia personalizada.",
      color: "bg-blue-500",
    },
    {
      icon: "fa-pencil-ruler",
      title: "2. Diseño",
      description:
        "Creamos diseños únicos y atractivos que reflejan tu visión.",
      color: "bg-yellow-500",
    },
    {
      icon: "fa-code",
      title: "3. Desarrollo",
      description:
        "Transformamos los diseños en soluciones funcionales y eficientes.",
      color: "bg-green-500",
    },
    {
      icon: "fa-rocket",
      title: "4. Lanzamiento",
      description:
        "Ponemos tu proyecto en marcha y brindamos soporte continuo.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className=" py-16 bg-gray-50 dark:bg-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl poppins-bold">
          Nuestro Proceso de Trabajo
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 roboto-regular">
          Descubre cómo transformamos tus ideas en experiencias digitales
          excepcionales.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md"
            >
              <div
                className={`${step.color} text-white w-14 h-14 flex items-center justify-center rounded-full mb-4`}
              >
                <i className={`fa-solid ${step.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white poppins-bold">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-center roboto-regular">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
