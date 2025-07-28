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

/* ---------- puntito verde ---------- */
const Bullet = () => (
  <span className="w-3 h-3 bg-[#3e541a] rounded-full mr-4 mt-2 flex-shrink-0" />
);

export default function CompromisoCalidadPage() {
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
              COMPROMISO&nbsp;Y&nbsp;CALIDAD
            </p>
          </section>
        </Reveal>

        {/* Hero */}
        <Reveal>
          <section className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-light text-[#3e541a] leading-tight">
              Calidad, inocuidad y sostenibilidad
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Controlamos cada etapa: desde el campo hasta el punto de venta. Transparencia, trazabilidad y
              excelencia certificada.
            </p>
          </section>
        </Reveal>

        {/* Métricas rápidas */}
        <Reveal>
          <section className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                { value: "+90%", label: "Aprobación en auditorías Cencosud" },
                { value: "+2M", label: "Kilos producidos al año" },
                { value: "ISO 22000", label: "Gestión de inocuidad alimentaria" },
                { value: "Flota propia", label: "Vehículos refrigerados" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm p-6 flex flex-col items-center justify-center shadow-sm"
                >
                  <span className="text-3xl md:text-4xl font-light text-[#3e541a]">{s.value}</span>
                  <span className="mt-2 text-center text-sm md:text-base text-gray-600 font-light">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Calidad y Flota */}
        <section className="space-y-24">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl font-light text-[#3e541a] mb-8 leading-tight">
                  Auditorías, procesos y cadena de frío
                </h2>
                <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                  <p>
                    En Valle del Norte, la calidad está en el corazón de todo lo que hacemos. Nuestras plantas son
                    auditadas regularmente por empresas líderes como Cencosud, obteniendo resultados sobre el 90% en
                    higiene, manipulación y trazabilidad.
                  </p>
                  <p>
                    Contamos con flota propia de vehículos refrigerados, asegurando que cada producto llegue fresco
                    y en óptimas condiciones.
                  </p>
                </div>

                {/* Lista corta */}
                <ul className="mt-8 space-y-4 text-lg text-gray-700">
                  {[
                    "Trazabilidad completa del proceso",
                    "Protocolos estrictos de higiene y manipulación",
                    "Capacitación continua de nuestros equipos",
                    "Control de temperatura en toda la cadena logística",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 block w-2 h-2 rounded-full bg-[#3e541a]" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Galería de camiones */}
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="/images/camiones/camion1.jpg"
                  alt="Camión refrigerado Valle del Norte"
                  className="col-span-2 h-72 md:h-96 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.015]"
                />
                <img
                  src="/images/camiones/camion2.jpg"
                  alt="Camión refrigerado Valle del Norte"
                  className="h-56 md:h-64 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.015]"
                />
                <img
                  src="/images/camiones/camion3.jpg"
                  alt="Camión refrigerado Valle del Norte"
                  className="h-56 md:h-64 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.015]"
                />
              </div>
            </div>
          </Reveal>

          {/* Certificaciones */}
          <Reveal>
            <div className="text-center">
              <h2 className="text-5xl font-light text-[#3e541a] mb-12 leading-tight">
                Certificaciones & Estándares
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light mb-12">
                Trabajamos con los más altos estándares que exige el mercado nacional e internacional.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center">
                {[
                  { label: "ISO 22000" },
                  { label: "CQS" },
                  { label: "Buenas Prácticas" },
                  { label: "Trazabilidad Total" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="h-28 rounded-xl border bg-white shadow-sm flex items-center justify-center text-[#3e541a] text-lg font-medium"
                  >
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Compromiso Ecológico */}
          <Reveal>
            <div className="space-y-14">
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="text-5xl font-light text-[#3e541a] leading-tight">
                  Compromiso ecológico real
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Somos la única empresa en Chile que gestiona sus RILES de manera natural y medioambientalmente
                  responsable.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/images/campo/piscina.png"
                    alt="Piscinas de evaporación Valle del Norte"
                    className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                    En el Valle de Azapa contamos con piscinas para la evaporación de residuos del proceso de
                    oxidación de aceitunas. Este sistema evita contaminar los alrededores y las napas subterráneas.
                  </p>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                    Además, todos nuestros envases son reutilizables, reforzando nuestro compromiso con la
                    economía circular.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
