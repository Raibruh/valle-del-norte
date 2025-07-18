"use client";

import { useRef, useEffect, useState } from "react";
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      ctrl.start(inView ? "show" : "hidden");
    }
  }, [inView, ctrl, isClient]);

  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={isClient ? ctrl : "hidden"}>
      {children}
    </motion.div>
  );
}

export default function Pichangas() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 lg:px-0 pt-8 pb-32 font-sans text-gray-800 space-y-32">
          {/* Loading state */}
          <div className="text-center">
            <p className="text-[#3e541a] text-4xl font-light tracking-widest">
              PICHANGAS&nbsp;PREMIUM
            </p>
          </div>
        </main>
      </>
    );
  }

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
            <p className="text-[#3e541a] text-4xl font-light tracking-widest">
              PICHANGAS&nbsp;PREMIUM
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
                  src="/images/productos/sin_fondo/premium_pichanga.png"
                  alt="Pichanga Premium Valle del Norte"
                  className="w-full h-full object-contain"
                />
              </figure>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#3e541a] text-xl font-medium tracking-widest">
                  PICHANGA&nbsp;PREMIUM
                </p>
                <h1 className="text-5xl md:text-6xl font-light text-[#3e541a] leading-tight">
                  Pichanga Premium
                </h1>
                <div className="w-24 h-1 bg-[#3e541a]"></div>
              </div>
              
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  Nuestra Pichanga Premium es elaborada con ingredientes de la más alta calidad, 
                  seleccionados cuidadosamente para garantizar un sabor excepcional en cada bocado.
                </p>
                <p>
                  Envasada en atmósfera modificada para mantener la frescura y sabor de todos 
                  los ingredientes, nuestra pichanga premium es perfecta para cualquier ocasión.
                </p>
                <p>
                  Cada pichanga incluye una combinación perfecta de quesos, embutidos, 
                  aceitunas y encurtidos, creando una experiencia gastronómica única.
                </p>
              </div>

              {/* Lista de ingredientes */}
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-[#3e541a] leading-tight">
                  Ingredientes Premium
                </h3>
                <ul className="text-lg text-gray-600 space-y-2 font-light">
                  <li>• Queso mantecoso</li>
                  <li>• Jamón praga</li>
                  <li>• Aceitunas negras</li>
                  <li>• Pickles (zanahoria, coliflor, pepino, cebollita perla)</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Imágenes adicionales */}
        <Reveal>
          <section className="space-y-16">
            <h2 className="text-5xl font-light text-[#3e541a] text-center leading-tight">
              Presentaciones
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <figure className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100">
                  <img
                    src="/images/productos/packaging/oliomio_pichanga.jpg"
                    alt="Pichanga Premium - Presentación 1"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>

              <div className="space-y-6">
                <figure className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100">
                  <img
                    src="/images/productos/abiertos/pichanga.jpg"
                    alt="Pichanga Premium - Presentación 2"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  );
}
