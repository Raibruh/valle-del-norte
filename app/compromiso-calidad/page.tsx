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

export default function CompromisoCalidadPage() {
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
              COMPROMISO&nbsp;Y&nbsp;CALIDAD
            </p>
          </section>
        </Reveal>

        {/* Main Content */}
        <Reveal>
          <section className="space-y-12">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="space-y-8">
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Valle del Norte, la calidad está en el corazón de todo lo que hacemos. Nuestras plantas son auditadas regularmente por empresas líderes como Cencosud, obteniendo resultados sobre el 90% de aprobación en estándares de higiene, manipulación y trazabilidad.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Contamos con flota propia de vehículos refrigerados, lo que garantiza que cada producto llegue fresco y en óptimas condiciones a su destino.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Nos preocupamos de cada etapa del proceso productivo, desde el campo hasta el punto de venta, con un enfoque en la excelencia, frescura y seguridad alimentaria.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

      
      </main>
    </>
  )
} 