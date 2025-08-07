"use client";

import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export default function FormatosPage() {
  const formatos = [
    {
      imagen: "/images/productos/tipos/sachet1.png",
      titulo: "Sachet",
      descripcion: "Presentación práctica en sachet individual, ideal para consumo personal y para llevar"
    },
    {
      imagen: "/images/productos/sin_fondo/aceitunas_negras.png",
      titulo: "Potes",
      descripcion: "Potes de diferentes tamaños, perfectos para el hogar y uso doméstico"
    },
    {
      imagen: "/images/productos/packaging/aceitunas_verdes_jar.jpg",
      titulo: "Granel en Baldes",
      descripcion: "Baldes de granel para restaurantes, eventos y consumo a gran escala"
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
              FORMATOS&nbsp;DE&nbsp;PRESENTACIÓN
            </p>
          </section>
        </Reveal>

        {/* Hero Section */}
        <Reveal>
          <section className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-light text-[#3e541a] leading-tight">
              Nuestros Formatos
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Diferentes presentaciones para adaptarse a todas tus necesidades
            </p>
          </section>
        </Reveal>

        {/* Formatos Grid */}
        <Reveal>
          <section className="space-y-12">
            <div className="grid md:grid-cols-3 gap-16">
              {formatos.map((formato, index) => (
                <div key={index} className="space-y-6">
                  <figure className="aspect-square rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={formato.imagen}
                      alt={formato.titulo}
                      className="w-[120%] h-[120%] object-contain"
                    />
                  </figure>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-light text-[#3e541a] leading-tight">
                      {formato.titulo}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      {formato.descripcion}
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
              <div className="space-y-6">
                <h2 className="text-4xl font-light text-[#3e541a] leading-tight">
                  Flexibilidad en Presentación
                </h2>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                  <p>
                    Entendemos que cada cliente tiene necesidades diferentes. Por eso ofrecemos 
                    múltiples formatos de presentación que se adaptan a diversos usos y contextos.
                  </p>
                  <p>
                    Desde el consumo individual hasta el servicio en restaurantes, nuestros 
                    formatos están diseñados para mantener la frescura y calidad en cualquier situación.
                  </p>
                </div>
                
                {/* Lista de ventajas */}
                <ul className="space-y-4 text-lg text-gray-700">
                  {[
                    "Sachet individual para consumo personal",
                    "Potes de diferentes tamaños para el hogar",
                    "Baldes de granel para uso comercial",
                    "Mantiene la frescura en todos los formatos",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 block w-2 h-2 rounded-full bg-[#3e541a]" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="/images/productos/packaging/aceitunas_verdes_cocktail.jpg"
                  alt="Formatos de Aceitunas Valle del Norte"
                  className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* Sección de aplicaciones */}
        <Reveal>
          <section className="space-y-16">
            <h2 className="text-5xl font-light text-[#3e541a] text-center leading-tight">
              Aplicaciones por Formato
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center mx-auto">
                  <span className="text-6xl">📦</span>
                </div>
                <h3 className="text-2xl font-light text-[#3e541a]">Sachet</h3>
                <ul className="space-y-3 text-lg text-gray-600 font-light">
                  <li>Consumo individual</li>
                  <li>Para llevar</li>
                  <li>Eventos pequeños</li>
                  <li>Muestras</li>
                </ul>
              </div>

              <div className="text-center space-y-6">
                <div className="flex items-center justify-center mx-auto">
                  <span className="text-6xl">🏠</span>
                </div>
                <h3 className="text-2xl font-light text-[#3e541a]">Potes</h3>
                <ul className="space-y-3 text-lg text-gray-600 font-light">
                  <li>Uso doméstico</li>
                  <li>Familias</li>
                  <li>Consumo regular</li>
                  <li>Almacenamiento</li>
                </ul>
              </div>

              <div className="text-center space-y-6">
                <div className="flex items-center justify-center mx-auto">
                  <span className="text-6xl">🍽️</span>
                </div>
                <h3 className="text-2xl font-light text-[#3e541a]">Granel en Baldes</h3>
                <ul className="space-y-3 text-lg text-gray-600 font-light">
                  <li>Restaurantes</li>
                  <li>Eventos grandes</li>
                  <li>Distribución comercial</li>
                  <li>Consumo masivo</li>
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
