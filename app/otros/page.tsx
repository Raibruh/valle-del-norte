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

/* ---------- utilidades de texto ---------- */
const Etiqueta = () => (
  <p className="text-[#3e541a] text-xl font-medium tracking-widest mb-6">
    PRODUCTOS&nbsp;COMPLEMENTARIOS
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
    <li>• Producto natural</li><li>• Sin conservantes</li><li>• Alta calidad</li>
  </ul>
);

/* ---------- base tarjeta ---------- */
const cardBase = "w-full max-w-[60rem] flex items-start space-x-14"; // ≈960 px

export default function Otros() {
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
              OTROS&nbsp;PRODUCTOS
            </p>
          </section>
        </Reveal>

        {/* Tarjetas escalonadas */}
        <section className="stagger grid md:grid-cols-2 md:gap-x-48 md:gap-y-8">
          {[
            ["pepinillos_dill.jpg", "Pepinillos Dill", "Pepinillos Dill", "Pepinillos en vinagre con hierbas dill, sabor fresco y crujiente."],
            ["chucrut.jpg", "Chucrut", "Chucrut", "Chucrut tradicional fermentado naturalmente, rico en probióticos y sabor."],
            ["salsa_especial.jpg", "Salsa Especial", "Salsa Especial", "Salsa especial de la casa, elaborada con ingredientes seleccionados."],
            ["cebollines_perla.jpg", "Cebollines", "Cebollines", "Cebollines en conserva, dulces y tiernas para cualquier ocasión."],
          ].map(([src, alt, title, description]) => (
            <Card 
              key={title as string} 
              img={`/images/productos/abiertos/${src}`}
              alt={alt as string} 
              title={title as string} 
              description={description as string}
            />
          ))}
        </section>
      </main>
    </>
  );
}

/* ---------- Tarjeta ---------- */
function Card({
  img, alt, title, description,
}: {
  img: string; alt: string; title: string; description: string;
}) {
  return (
    <article className={cardBase}>
      <Reveal>
        <div className="flex space-x-14 w-full">
          <figure className="flex-shrink-0 w-[32rem] aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-100">
            <img src={img} alt={alt} className="w-full h-full object-cover" />
          </figure>
          <div className="flex-1">
            <Etiqueta />
            <Titulo>{title}</Titulo>
            <Descripcion>{description}</Descripcion>
            <Lista />
          </div>
        </div>
      </Reveal>
    </article>
  );
} 