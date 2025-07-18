"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
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

/* ---------- utilidades de texto ---------- */
const Etiqueta = () => (
  <p className="text-[#3e541a] text-xl font-medium tracking-widest mb-6">
    ACEITUNAS&nbsp;TRADICIONALES
  </p>
);

const Titulo = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-5xl md:text-6xl font-light text-[#3e541a] mb-8">{children}</h2>
);

const Descripcion = ({ children }: { children: React.ReactNode }) => (
  <p className="text-2xl leading-relaxed mb-10 font-light">{children}</p>
);

const Lista = () => (
  <ul className="text-[#3e541a] text-2xl space-y-2 mb-10 font-light">
    <li>• Con carozo</li><li>• Descarozadas</li><li>• En rodajas</li>
  </ul>
);

const Mas = ({ onClick }: { onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className="inline-flex items-center space-x-3 group cursor-pointer"
  >
    <span className="w-12 h-1 bg-[#3e541a] group-hover:w-20 transition-all" />
    <span className="text-[#3e541a] text-2xl font-light">Más</span>
  </button>
);

/* ---------- base tarjeta ---------- */
const cardBase = "w-full max-w-[60rem] flex items-start space-x-14"; // ≈960 px

export default function AceitunasTradicionales() {
  const router = useRouter();
  
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 lg:px-0 pt-8 pb-32 font-sans text-gray-800 space-y-32">
        {/* Intro */}
        <Reveal>
          <section className="text-center -space-y-32">
            <div className="mx-auto w-[32rem] h-[32rem] flex items-center justify-center">
              <img src="/images/logo.png" alt="Logo Valle del Norte"
                   className="w-full h-full object-contain -mt-32" />
            </div>
            <p className="text-[#3e541a] text-4xl font-light tracking-widest">
              ACEITUNAS&nbsp;TRADICIONALES
            </p>
          </section>
        </Reveal>

        {/* Tarjetas escalonadas */}
        <section className="stagger grid md:grid-cols-2 md:gap-x-48 md:gap-y-8">
          {[
            ["aceitunas_verdes_descarozadas.jpg", "Aceitunas Verdes", "Verdes", false],
            ["aceitunas_negras.jpg",               "Aceitunas Negras", "Negras", false],
            ["aceitunas_kalamata.jpg",             "Aceitunas Kalamata","Kalamata / Al Natural", true],
            ["aceitunas_azapa.jpg",                "Aceitunas Azapa",  "Azapa Naturales", false],
          ].map(([src, alt, title, noList]) => (
            <Card 
              key={title as string} 
              img={`/images/productos/abiertos/${src}`}
              alt={alt as string} 
              title={title as string} 
              noList={noList as boolean}
              onMasClick={title === "Verdes" ? () => router.push("/aceitunas-verdes") : 
                         title === "Negras" ? () => router.push("/aceitunas-negras") : 
                         undefined}
            >
              {title === "Verdes"
                ? "Aceitunas verdes disponibles en múltiples presentaciones para todas las necesidades culinarias."
                : title === "Negras"
                ? "Aceitunas negras maduras con un sabor intenso y característico, perfectas para cualquier ocasión."
                : (title as string).includes("Kalamata")
                ? "Aceitunas Kalamata auténticas, reconocidas mundialmente por su sabor único y textura característica."
                : "Aceitunas Azapa cultivadas en el valle del norte de Chile con métodos tradicionales."}
            </Card>
          ))}
        </section>
      </main>
    </>
  );
}

/* ---------- Tarjeta ---------- */
function Card({
  img, alt, title, children, noList = false, onMasClick,
}: {
  img: string; alt: string; title: string; children: React.ReactNode; noList?: boolean; onMasClick?: () => void;
}) {
  return (
    <article className={cardBase}>
      <Reveal>
        <div className="flex space-x-14 w-full">
          <figure className="flex-shrink-0 w-[32rem] aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100">
            <img src={img} alt={alt} className="w-full h-full object-cover" />
          </figure>
          <div className="flex-1">
            <Etiqueta /><Titulo>{title}</Titulo>
            <Descripcion>{children}</Descripcion>
            {!noList && <Lista />}
            <Mas onClick={onMasClick} />
          </div>
        </div>
      </Reveal>
    </article>
  );
}
