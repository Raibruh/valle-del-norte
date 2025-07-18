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

export default function AceitunasVerdesRellenasPage() {
  const productos = [
    {
      imagen: "/images/productos/packaging/premium_aceitunas_verdes_rellenas_pimenton_natural.jpg",
      titulo: "Con Pimentón Natural",
      descripcion: "Aceitunas verdes rellenas con pimentón natural de la más alta calidad"
    },
    {
      imagen: "/images/productos/packaging/premium_aceitunas_verdes_rellenas_aji.jpg",
      titulo: "Con Ají Natural",
      descripcion: "Aceitunas verdes rellenas con ají natural, sabor picante y auténtico"
    },
    {
      imagen: "/images/productos/packaging/premium_aceitunas_verdes_rellenas_almendras.jpg",
      titulo: "Con Almendras",
      descripcion: "Aceitunas verdes rellenas con almendras, sabor dulce y salado"
    },
    {
      imagen: "/images/productos/packaging/premium_aceitunas_verdes_rellenas_almendras_pimenton.jpg",
      titulo: "Con Almendras y Pimentón",
      descripcion: "Aceitunas verdes rellenas con almendras y pimentón, sabor dulce y salado"
    }
  ];

  const oliomio = [
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_rellenas_aji_natural.jpg",
      titulo: "Con Ají Natural",
      descripcion: "Aceitunas verdes rellenas con ají natural, sabor picante y auténtico"
    },
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_rellenas_ajo.jpg",
      titulo: "Con Ajo",
      descripcion: "Aceitunas verdes rellenas con ajo, sabor salado y auténtico"
    },
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_rellenas_almendras.jpg",
      titulo: "Con Almendras",
      descripcion: "Aceitunas verdes rellenas con almendras, sabor dulce y salado"
    },
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_rellenas_jalapeno.jpg",
      titulo: "Con Jalapeño",
      descripcion: "Aceitunas verdes rellenas con jalapeño, sabor picante y auténtico"
    },
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_rellenas_jalapeno_ajo.jpg",
      titulo: "Con Jalapeño y Ajo",
      descripcion: "Aceitunas verdes rellenas con jalapeño y ajo, sabor picante y salado"
    },
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_rellenas_pimenton_almendras.jpg",
      titulo: "Con Pimentón y Almendras",
      descripcion: "Aceitunas verdes rellenas con pimentón y almendras, sabor dulce y salado"
    },
    {
      imagen: "/images/productos/packaging/oliomio_aceitunas_verdes_rellenas_pimiento_natural.jpg",
      titulo: "Con Pimiento Natural",
      descripcion: "Aceitunas verdes rellenas con pimiento natural, sabor dulce y auténtico"
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
              ACEITUNAS&nbsp;VERDES&nbsp;RELLENAS
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
                  src="/images/productos/sin_fondo/premium_aceitunas_verdes_rellenas_almendras_pimenton.png"
                  alt="Aceitunas Verdes Rellenas Valle del Norte"
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
                  Aceitunas Verdes Rellenas
                </h1>
                <div className="w-24 h-1 bg-green-800"></div>
              </div>
              
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  Las aceitunas verdes rellenas de Valle del Norte representan la excelencia 
                  en la artesanía culinaria, donde cada aceituna es cuidadosamente rellenada 
                  con ingredientes naturales de la más alta calidad.
                </p>
                <p>
                  Nuestras aceitunas rellenas se caracterizan por su textura firme y su 
                  sabor equilibrado, donde el sabor natural de la aceituna se complementa 
                  perfectamente con los ingredientes seleccionados para el relleno.
                </p>
                <p>
                  Disponibles en múltiples variedades: con pimiento natural, ají natural, almendras,
                  almendras y pimiento, nuestras aceitunas rellenas son perfectas para aperitivos 
                  sofisticados, cócteles y platos gourmet que requieren un toque especial.
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
            
            <div className="grid md:grid-cols-4 gap-12">
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

        {/* Oliomio */}
        <Reveal>
          <section className="space-y-16">
            <h2 className="text-5xl font-light text-green-800 text-center leading-tight">
              Oliomio
            </h2>
            
            {/* Primera fila - 4 elementos */}
            <div className="grid md:grid-cols-4 gap-8">
              {oliomio.slice(0, 4).map((producto, index) => (
                <div key={index} className="space-y-4">
                  <figure className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100">
                    <img
                      src={producto.imagen}
                      alt={producto.titulo}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-light text-green-800 leading-tight">
                      {producto.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      {producto.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Segunda fila - 3 elementos */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {oliomio.slice(4, 7).map((producto, index) => (
                <div key={index} className="space-y-4">
                  <figure className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100">
                    <img
                      src={producto.imagen}
                      alt={producto.titulo}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-light text-green-800 leading-tight">
                      {producto.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
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