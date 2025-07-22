"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { motion, useAnimation, useInView } from "framer-motion";

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

/* ---------- puntito verde ---------- */
const Bullet = () => (
  <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0" />
);

/* ---------- página ---------- */
export default function NuestraHistoriaPage() {
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
              NUESTRA&nbsp;HISTORIA
            </p>
          </section>
        </Reveal>

        {/* Hero */}
        <Reveal>
          <section className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-light text-[#3e541a] leading-tight">
              Tradición y Calidad
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Más de 30 años llevando aceitunas desde el olivo hasta tu mesa
            </p>
          </section>
        </Reveal>

        {/* Historia + Certificaciones */}
        <section className="space-y-24">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl font-light text-[#3e541a] mb-8 leading-tight">
                  Nuestra Historia
                </h2>
                <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                  <p>
                    Con más de 30 años en el rubro, en Valle del Norte, nos dedicamos con pasión a la producción y 
                    comercialización de aceitunas de mesa de alta calidad, destinado a los grandes mercados del retail 
                    a nivel nacional.
                  </p>
                  <p>
                    Nuestra historia nace en el valle de Azapa ubicado en el norte de Chile con olivos de más de 100 
                    años de antigüedad. Ahí combinamos tradición agrícola con tecnología moderna para ofrecer productos 
                    frescos y sanos.
                  </p>
                  <p>
                    Desde la cosecha de la aceituna hasta el envasado, cuidamos cada detalle para garantizar la mejor 
                    aceituna en tu mesa.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-[#3e541a] pl-12">
                <h3 className="text-3xl font-light text-[#3e541a] mb-8">
                  Certificaciones y Estándares
                </h3>
                <ul className="space-y-6 text-xl text-gray-700 font-light">
                  <li className="flex"><Bullet />Sistema de gestión de inocuidad alimentaria (CQS)</li>
                  <li className="flex"><Bullet />ISO&nbsp;22000</li>
                  <li className="flex"><Bullet />Mayor productor nacional</li>
                  <li className="flex"><Bullet />+2 millones de kilos anuales</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Evolución */}
          <Reveal>
            <div>
              <h2 className="text-5xl font-light text-[#3e541a] mb-12 text-center leading-tight">
                Nuestra Evolución
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  ["1", "Fundación", "Comenzamos como una pequeña empresa familiar en el Valle de Azapa"],
                  ["2", "Expansión", "Ampliamos nuestras operaciones y mejoramos nuestros procesos"],
                  ["3", "Liderazgo", "Nos convertimos en referentes de calidad en la industria"],
                ].map(([num, title, txt]) => (
                  <div key={num} className="text-center space-y-4">
                    <div className="w-24 h-24 bg-[#3e541a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-light text-3xl">{num}</span>
                    </div>
                    <h3 className="text-3xl font-light text-[#3e541a]">{title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">{txt}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Estándares de calidad */}
          <Reveal>
            <div className="text-center">
              <h2 className="text-5xl font-light text-[#3e541a] mb-12 leading-tight">
                Estándares de Calidad
              </h2>
              <div className="max-w-5xl mx-auto space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  Nos enorgullece trabajar con los más altos estándares de calidad, sostenibilidad y compromisos 
                  que nos exige el mercado nacional e internacional, certificados por el sistema de gestión de 
                  inocuidad alimentaria (CQS) … ISO 22000.
                </p>
                <p>
                  Estamos consolidados como el mayor productor y abastecedor de aceitunas a nivel nacional, 
                  superando los 2&nbsp;millones de kilos anuales.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
