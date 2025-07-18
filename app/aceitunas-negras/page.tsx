"use client";

import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import { motion, useInView, useAnimation } from "framer-motion";

/* ---------- helper que reaplica la animación ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" as const } }
};

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const ctrl = useAnimation();

  useEffect(() => {
    ctrl.start(inView ? "show" : "hidden");
  }, [inView, ctrl]);

  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={ctrl}>
      {children}
    </motion.div>
  );
}

export default function AceitunasNegrasPage() {
  const productos = [
    {
      imagen: "/images/productos/packaging/aceitunas_negras.jpg",
      titulo: "Aceitunas Negras",
      descripcion: "Aceitunas negras maduras con carozo, de sabor intenso y característico"
    },
    {
      imagen: "/images/productos/packaging/aceitunas_negras_descarozadas.jpg",
      titulo: "Aceitunas Negras Descarozadas",
      descripcion: "Aceitunas negras descarozadas, perfectas para ensaladas y platos gourmet"
    },
    {
      imagen: "/images/productos/packaging/aceitunas_negras_rodajas.jpg",
      titulo: "Aceitunas Negras en Rodajas",
      descripcion: "Aceitunas negras cortadas en rodajas, ideales para pizzas y pastas"
    }
  ];

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 lg:px-0 pt-8 pb-32 font-sans text-gray-800 space-y-32">
        {/* Intro */}
        <Reveal>
          <section className="text-center -space-y-32">
            <div className="mx-auto w-[32rem] h-[32rem] flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Logo Valle del Norte"
                className="w-full h-full object-contain -mt-32"
              />
            </div>
            <p className="text-green-800 text-4xl font-light tracking-widest">
              ACEITUNAS&nbsp;NEGRAS
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
                  src="/images/productos/sin_fondo/aceitunas_negras.png"
                  alt="Aceitunas Negras Valle del Norte"
                  className="w-full h-full object-contain"
                />
              </figure>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-green-800 text-xl font-medium tracking-widest">
                  ACEITUNAS&nbsp;DE&nbsp;MESA
                </p>
                <h1 className="text-5xl md:text-6xl font-light text-green-800 leading-tight">
                  Aceitunas Negras
                </h1>
                <div className="w-24 h-1 bg-green-800"></div>
              </div>
              
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  Las aceitunas negras de Valle del Norte representan la madurez perfecta del fruto, 
                  cosechadas en el momento óptimo cuando han alcanzado su color negro intenso y 
                  su sabor más rico y complejo.
                </p>
                <p>
                  Nuestras aceitunas negras se caracterizan por su textura suave y carnosa, 
                  con un sabor profundo y equilibrado que las hace perfectas para cualquier 
                  ocasión, desde aperitivos hasta platos principales.
                </p>
                <p>
                  Disponibles en múltiples presentaciones: con carozo, descarozadas, en rodajas 
                  y en mezclas especiales, nuestras aceitunas negras aportan elegancia y sabor 
                  a cualquier preparación culinaria.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Productos */}
        <Reveal>
          <section className="space-y-16">
            <h2 className="text-5xl font-light text-green-800 text-center leading-tight">
              Nuestras Variedades
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {productos.map((producto, index) => (
                <div key={index} className="space-y-6">
                  <figure className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100">
                    <img
                      src={producto.imagen}
                      alt={producto.titulo}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-light text-green-800 leading-tight">
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

        {/* Características */}
        <Reveal>
          <section className="text-center space-y-12">
            <h2 className="text-5xl font-light text-green-800 leading-tight">
              Características
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">🌙</span>
                </div>
                <h3 className="text-2xl font-light text-green-800 leading-tight">
                  Maduración Completa
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Cosechadas en su punto óptimo de maduración para máximo sabor
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">⭐</span>
                </div>
                <h3 className="text-2xl font-light text-green-800 leading-tight">
                  Sabor Intenso
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Aroma y sabor profundo característico de las aceitunas maduras
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-light text-green-800 leading-tight">
                  Textura Premium
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Carne suave y carnosa que se deshace en la boca
                </p>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  )
} 