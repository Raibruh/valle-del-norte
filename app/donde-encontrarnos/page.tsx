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

export default function DondeEncontrarnosPage() {
  const supermercados = [
    { name: "Jumbo", logo: "/images/logos/jumbo.png", url: "https://www.jumbo.cl/busqueda?ft=valle+del+norte" },
    { name: "Santa Isabel", logo: "/images/logos/santa-isabel.png", url: "https://www.santaisabel.cl/busqueda?ft=valle+del+norte" },
    { name: "Spid", logo: "/images/logos/spid.png", url: "https://spidchile.cl/" },
    { name: "Líder Walmart", logo: "/images/logos/lider.png", url: "https://www.lider.cl/supermercado/search?query=valle%20del%20norte" },
    { name: "Tottus", logo: "/images/logos/tottus.png", url: "https://www.tottus.cl/tottus-cl/buscar?Ntt=valle+del+norte" },
    { name: "Unimarc", logo: "/images/logos/unimarc.png", url: "https://www.unimarc.cl/search?q=valle-del-norte" },
  ]

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
              DÓNDE&nbsp;ENCONTRARNOS
            </p>
          </section>
        </Reveal>

        {/* Hero Section */}
        <Reveal>
          <section className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-light text-[#3e541a] leading-tight">
              Nuestros Productos
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Están presentes en los principales supermercados del país
            </p>
          </section>
        </Reveal>

        {/* Supermercados Grid */}
        <Reveal>
          <section className="space-y-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {supermercados.map((supermercado, index) => (
                <a
                  key={index}
                  href={supermercado.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="aspect-[3/2] rounded-2xl shadow-lg overflow-hidden bg-white p-6 flex items-center justify-center">
                    <img
                      src={supermercado.logo}
                      alt={`Logo ${supermercado.name}`}
                      className="w-full h-full object-contain group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <p className="text-center text-[#3e541a] text-lg font-light mt-4">
                    {supermercado.name}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Productos Especiales */}
        <Reveal>
          <section className="text-center space-y-12">
            <h2 className="text-5xl font-light text-[#3e541a] leading-tight">
              Productos Especiales
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
              <div className="space-y-8 text-left">
                <h3 className="text-3xl font-light text-[#3e541a] leading-tight border-b-2 border-[#3e541a] pb-4">
                  Granel Autoservicio
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Disponible en múltiples sedes de Jumbo y Santa Isabel
                </p>
                <ul className="space-y-4 text-xl text-gray-700 font-light">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Más de 20 variedades disponibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Precio fijo por pote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Frescura garantizada</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8 ml-32 text-left border-l-2 border-[#3e541a] pl-8">
                <h3 className="text-3xl font-light text-[#3e541a] leading-tight">
                  Línea Premium
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Baldes de 5 kg con productos gourmet
                </p>
                <ul className="space-y-4 text-xl text-gray-700 font-light">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Aceitunas en aceite de oliva</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Con orégano y especias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Fondos de alcachofa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Antipasto premium</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

      </main>
    </>
  )
}
