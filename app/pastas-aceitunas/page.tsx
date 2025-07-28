"use client";

import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useInView, useAnimation } from "framer-motion";

/* ---------- helper de animación que se reinicia ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } }
};

function Reveal({ children }: { children: React.ReactNode }) {
  const ref     = useRef(null);
  const inView  = useInView(ref, { amount: 0.35 });
  const control = useAnimation();

  useEffect(() => {
    if (inView) control.start("show");
    else        control.start("hidden"); // se esconde al salir
  }, [inView, control]);

  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={control}>
      {children}
    </motion.div>
  );
}

export default function PastasAceitunasPage() {
  const productos = [
    {
      imagen: "/images/productos/pastas/pasta1.png",
      titulo: "Pasta de Aceitunas Verdes",
      descripcion: "Pasta elaborada con aceitunas verdes seleccionadas, perfecta para untar en pan o usar en recetas"
    },
    {
      imagen: "/images/productos/pastas/pasta2.png",
      titulo: "Pasta de Aceitunas Negras",
      descripcion: "Pasta intensa elaborada con aceitunas negras maduras, ideal para platos gourmet"
    },
    {
      imagen: "/images/productos/pastas/pasta3.png",
      titulo: "Pasta Premium de Aceitunas",
      descripcion: "Pasta premium elaborada con una mezcla especial de aceitunas, perfecta para ocasiones especiales"
    }
  ];

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 lg:px-0 pt-8 pb-32 font-sans text-gray-800 space-y-32">
        {/* Fondo de imagen en toda la página */}
        <div className="fixed inset-0 -z-10 bg-[url('/images/patterns/olives-bg.png')] bg-cover bg-center opacity-[0.05]" />

        {/* Intro */}
        <Reveal>
          <section className="text-center -space-y-32">
            <div className="mx-auto w-[32rem] h-[32rem] flex items-center justify-center">
              <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  src="/images/logo.png"
                  alt="Logo Valle del Norte"
                  className="w-full h-full object-contain -mt-32"
                />
              </a>
            </div>
            <p className="text-[#3e541a] text-4xl font-light tracking-widest">
              PASTAS&nbsp;DE&nbsp;ACEITUNAS
            </p>
          </section>
        </Reveal>

        {/* Hero Section with Main Image */}
        <Reveal>
          <section className="grid md:grid-cols-2 gap-16 items-center">
            {/* Main Image */}
            <div className="flex justify-center">
              <figure className="w-full max-w-[64rem] aspect-square">
                <img
                  src="/images/productos/pastas/pasta_show1.png"
                  alt="Pastas de Aceitunas Valle del Norte"
                  className="w-full h-full object-contain"
                />
              </figure>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#3e541a] text-xl font-medium tracking-widest">
                  ACEITUNAS&nbsp;DE&nbsp;MESA
                </p>
                <h1 className="text-5xl md:text-6xl font-light text-[#3e541a] leading-tight">
                  Pastas de Aceitunas
                </h1>
                <div className="w-24 h-1 bg-[#3e541a]"></div>
              </div>
              
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  Las pastas de aceitunas de Valle del Norte representan la innovación en la tradición, 
                  donde transformamos nuestras aceitunas de mesa en productos versátiles y deliciosos 
                  que mantienen todo el sabor y la calidad que nos caracteriza.
                </p>
                <p>
                  Nuestras pastas están elaboradas con aceitunas seleccionadas y técnicas artesanales 
                  que preservan el sabor auténtico del fruto, creando productos únicos perfectos para 
                  untar, cocinar o disfrutar como aperitivo.
                </p>
                <p>
                  Disponibles en diferentes variedades y presentaciones, nuestras pastas de aceitunas 
                  son ideales para chefs profesionales, restaurantes y consumidores que buscan productos 
                  gourmet de la más alta calidad.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Productos */}
        <Reveal>
          <section className="space-y-16">
            <h2 className="text-5xl font-light text-[#3e541a] text-center leading-tight">
              Nuestras Variedades
            </h2>
            
            <div className="grid md:grid-cols-3 gap-16">
              {productos.map((producto, index) => (
                <div key={index} className="space-y-6">
                  <figure className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                    <img
                      src={producto.imagen}
                      alt={producto.titulo}
                      className="w-full h-full object-contain max-w-[80%] max-h-[80%]"
                    />
                  </figure>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-light text-[#3e541a] leading-tight">
                      {producto.titulo}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      {producto.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Información adicional */}
        <Reveal>
          <section className="space-y-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/images/productos/pastas/pasta_show2.png"
                  alt="Pastas de Aceitunas Valle del Norte"
                  className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-light text-[#3e541a] leading-tight">
                  Versatilidad y Calidad
                </h2>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                  <p>
                    Nuestras pastas de aceitunas son perfectas para múltiples usos culinarios: 
                    desde untar en pan tostado hasta usar como ingrediente en salsas, aderezos 
                    y platos principales.
                  </p>
                  <p>
                    Elaboradas con ingredientes 100% naturales y sin conservantes artificiales, 
                    nuestras pastas mantienen el sabor auténtico de las aceitunas mientras 
                    ofrecen una textura suave y cremosa.
                  </p>
                </div>
                
                {/* Lista de usos */}
                <ul className="space-y-4 text-lg text-gray-700">
                  {[
                    "Ideal para untar en pan tostado o crackers",
                    "Perfecta para salsas y aderezos",
                    "Excelente ingrediente para platos mediterráneos",
                    "Versátil para cocina gourmet y profesional",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 block w-2 h-2 rounded-full bg-[#3e541a]" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
