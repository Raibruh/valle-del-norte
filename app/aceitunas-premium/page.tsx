"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { motion, useInView, useAnimation } from "framer-motion";

/* ---------- helper que se reinicia cada vez ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" as const } }
};

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const ctrl = useAnimation();

  useEffect(() => { ctrl.start(inView ? "show" : "hidden"); }, [inView, ctrl]);

  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={ctrl}>
      {children}
    </motion.div>
  );
}

/* ---------- utilidades de texto ---------- */
const Etiqueta = () => (
  <p className="text-[#3e541a] text-xl font-medium tracking-widest mb-6">
    ACEITUNAS&nbsp;PREMIUM
  </p>
);

const Titulo = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-5xl md:text-6xl font-light text-[#3e541a] mb-8">{children}</h2>
);

const Descripcion = ({ children }: { children: React.ReactNode }) => (
  <p className="text-2xl leading-relaxed mb-10 font-light">{children}</p>
);

const Lista = ({ items }: { items: string[] }) => (
  <ul className="text-[#3e541a] text-2xl space-y-2 mb-10 font-light">
    {items.map((it, i) => <li key={i}>• {it}</li>)}
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

/* ---------- Página ---------- */
export default function AceitunasPremium() {
  const router = useRouter();
  
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
              <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                <img src="/images/logo.png" alt="Logo Valle del Norte"
                     className="w-full h-full object-contain -mt-32" />
              </a>
            </div>
            <p className="text-[#3e541a] text-4xl font-light tracking-widest">
              ACEITUNAS&nbsp;PREMIUM
            </p>
          </section>
        </Reveal>

        {/* Tarjetas escalonadas */}
        <section className="stagger grid md:grid-cols-2 md:gap-x-48 md:gap-y-8">
          <Card
            img="/images/productos/abiertos/aceitunas_verdes_rellenas_pimenton.jpg"
            alt="Aceitunas Verdes Rellenas"
            title="Verdes Rellenas"
            items={["Pimiento natural", "Ají natural", "Y muchas más"]}
            onMasClick={() => router.push("/aceitunas-verdes-rellenas")}
          >
            Aceitunas verdes premium rellenas con ingredientes naturales de la más alta calidad.
          </Card>

          <Card
            img="/images/productos/packaging/premium_aceitunas_negras_verdes_cocktail.jpg"
            alt="Aceitunas Cocktail"
            title="Cocktail"
            items={["Verdes y negras descarozadas"]}
          >
            Mezcla premium de aceitunas verdes y negras descarozadas, ideal para cócteles y aperitivos sofisticados.
          </Card>

          <Card
            img="/images/productos/abiertos/aceitunas_verdes_pickles.jpg"
            alt="Aceitunas Mix"
            title="Mix"
            items={["Aceitunas verdes descarozadas con pepinillos"]}
          >
            Combinación perfecta de aceitunas verdes descarozadas con pepinillos, creando un sabor equilibrado y refrescante.
          </Card>
        </section>

        {/* Oliomio */}
        <Reveal>
          <section className="space-y-16">
            <h2 className="text-5xl font-light text-[#3e541a] text-center leading-tight">
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
                    <h3 className="text-xl font-light text-[#3e541a] leading-tight">
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
                    <h3 className="text-xl font-light text-[#3e541a] leading-tight">
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
  );
}

/* ---------- Tarjeta ---------- */
function Card({
  img, alt, title, children, items, noList = false, onMasClick,
}: {
  img: string; alt: string; title: string; children: React.ReactNode;
  items?: string[]; noList?: boolean; onMasClick?: () => void;
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
            <Descripcion>{children}</Descripcion>
            {!noList && items && <Lista items={items} />}
            {onMasClick && <Mas onClick={onMasClick} />}
          </div>
        </div>
      </Reveal>
    </article>
  );
}
