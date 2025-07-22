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

export default function AceitunasVerdesPage() {
  const productos = [
    {
      imagen: "/images/productos/packaging/aceitunas_verdes.jpg",
      titulo: "Aceitunas Verdes",
      descripcion: "Aceitunas verdes tradicionales con carozo, perfectas para cualquier ocasión"
    },
    {
      imagen: "/images/productos/packaging/aceitunas_verdes_cocktail_descarozadas.jpg",
      titulo: "Aceitunas Verdes Cocktail Descarozadas",
      descripcion: "Aceitunas verdes descarozadas ideales para cócteles y aperitivos"
    },
    {
      imagen: "/images/productos/packaging/aceitunas_verdes_rodajas.jpg",
      titulo: "Aceitunas Verdes en Rodajas",
      descripcion: "Aceitunas verdes cortadas en rodajas, perfectas para ensaladas y platos"
    }
  ];

  const oliomio = [
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes.jpg",
      titulo: "Oliomio Verde",
      descripcion: "Aceite de oliva extra virgen de aceitunas verdes, sabor suave y equilibrado"
    },
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_natural.jpg",
      titulo: "Oliomio Premium",
      descripcion: "Aceite de oliva premium de la más alta calidad, perfecto para cocina gourmet"
    },
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_cocktail_descarozadas.jpg",
      titulo: "Oliomio Orgánico",
      descripcion: "Aceite de oliva orgánico certificado, cultivado sin pesticidas ni químicos"
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
              <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  src="/images/logo.png"
                  alt="Logo Valle del Norte"
                  className="w-full h-full object-contain -mt-32"
                />
              </a>
            </div>
            <p className="text-[#3e541a] text-4xl font-light tracking-widest">
              ACEITUNAS&nbsp;VERDES
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
                  src="/images/productos/sin_fondo/aceitunas_verdes_cocktail_descarozadas.png"
                  alt="Aceitunas Verdes Valle del Norte"
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
                  Aceitunas Verdes
                </h1>
                <div className="w-24 h-1 bg-[#3e541a]"></div>
              </div>
              
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  Las aceitunas verdes de Valle del Norte son cultivadas en el fértil Valle de Azapa, 
                  donde los olivos centenarios reciben el sol del norte de Chile y las condiciones 
                  climáticas ideales para desarrollar su sabor único.
                </p>
                <p>
                  Nuestras aceitunas verdes se cosechan en el momento óptimo de maduración, 
                  cuando mantienen su color verde vibrante y su textura firme pero tierna. 
                  Cada aceituna es seleccionada cuidadosamente para garantizar la mejor calidad.
                </p>
                <p>
                  Disponibles en múltiples presentaciones: con carozo, descarozadas, en rodajas 
                  y en mezclas especiales, nuestras aceitunas verdes son perfectas para cualquier 
                  ocasión, desde aperitivos hasta platos gourmet.
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

        {/* Oliomio */}
        <Reveal>
          <section className="space-y-16">
            <h2 className="text-5xl font-light text-[#3e541a] text-center leading-tight">
              Oliomio
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {oliomio.map((producto, index) => (
                <div key={index} className="space-y-6">
                  <figure className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100">
                    <img
                      src={producto.imagen}
                      alt={producto.titulo}
                      className="w-full h-full object-cover"
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

       
      </main>
    </>
  )
} 