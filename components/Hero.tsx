"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/* ---------------- animación reusable ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" as const } },
};

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const ctrl = useAnimation();
  const inView = useInView(ref, { amount: 0.3 });
  useEffect(() => { ctrl.start(inView ? "show" : "hidden"); }, [inView, ctrl]);
  return <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={ctrl}>{children}</motion.div>;
}


/* ---------- datos de productos ---------- */
const productos = [
  {
    imagen: "/images/productos/abiertos/aceitunas_verdes_descarozadas.jpg",
    titulo: "Aceitunas Tradicionales",
    descripcion:
      "Las aceitunas tradicionales de Valle del Norte representan la esencia de nuestra tradición familiar, cultivadas en el fértil Valle de Azapa con métodos que se han transmitido por generaciones.",
    descripcion2:
      "Nuestras aceitunas tradicionales incluyen variedades verdes, negras, Kalamata y Azapa, cada una con su sabor único y característico. Disponibles con carozo, descarozadas y en rodajas.",
    descripcion3:
      "Perfectas para cualquier ocasión, desde aperitivos hasta platos principales, nuestras aceitunas tradicionales mantienen la autenticidad y calidad que nos caracteriza desde hace más de 30 años.",
  },
  {
    imagen: "/images/productos/abiertos/aceitunas_verdes_rellenas_pimenton.jpg",
    titulo: "Aceitunas Premium",
    descripcion:
      "Las aceitunas premium de Valle del Norte representan la excelencia en la artesanía culinaria, donde cada producto es elaborado con ingredientes de la más alta calidad y técnicas gourmet.",
    descripcion2:
      "Nuestra línea premium incluye aceitunas rellenas con ingredientes naturales como pimiento, ají y almendras, así como mezclas especiales como cocktail y mix con pepinillos.",
    descripcion3:
      "Diseñadas para los paladares más exigentes, nuestras aceitunas premium son perfectas para aperitivos sofisticados, cócteles de autor y platos gourmet que requieren un toque especial.",
  },
  {
    imagen: "/images/productos/abiertos/pichanga.jpg",
    titulo: "Pichangas Premium",
    descripcion:
      "Las pichangas premium de Valle del Norte son el resultado de una cuidadosa selección de ingredientes frescos y técnicas de conservación que preservan el sabor y la textura natural.",
    descripcion2:
      "Nuestras pichangas incluyen una variedad de encurtidos y conservas gourmet, elaboradas con vegetales frescos y especias naturales que crean sabores únicos y equilibrados.",
    descripcion3:
      "Perfectas para complementar cualquier plato, nuestras pichangas premium añaden un toque de frescura y sabor que eleva cualquier preparación culinaria.",
  },
  {
    imagen: "/images/productos/abiertos/pepinillos_dill.jpg",
    titulo: "Otros Productos",
    descripcion:
      "Nuestra línea de otros productos incluye una selección cuidadosamente curada de encurtidos y conservas que complementan perfectamente nuestra oferta de aceitunas.",
    descripcion2:
      "Incluimos pickles, pepinillos dill, cebollitas perlas, chucrut y nuestra salsa especial, todos elaborados con ingredientes frescos y técnicas tradicionales que preservan el sabor auténtico.",
    descripcion3:
      "Cada producto está diseñado para ofrecer una experiencia gastronómica única, manteniendo los estándares de calidad que nos caracterizan en todos nuestros productos.",
  },
];

export default function Hero() {
  return (
    <main className="max-w-[118rem] mx-auto px-4 lg:px-8 pt-8 pb-32 font-sans text-gray-800 space-y-32">
      {/* ---------- Intro ---------- */}
      <Reveal>
        <section className="text-center -space-y-32 -mt-32">
          <div className="mx-auto w-[32rem] h-[32rem] flex items-center justify-center">
            <img src="/images/logo.png" alt="Logo Valle del Norte" className="w-full h-full object-contain" />
          </div>
        </section>
      </Reveal>

      {/* ---------- Hero principal ---------- */}
      <Reveal>
        <section className="text-center space-y-12">
          <h1 className="text-6xl md:text-7xl font-light text-[#3e541a] leading-tight -mt-48">
            Agricultura Fresca y Natural
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
            Más de 30 años llevando aceitunas desde el olivo hasta tu mesa. Tradición, calidad y frescura en cada producto.
          </p>
        </section>
      </Reveal>

      {/* ---------- Productos ---------- */}
      <section id="productos" className="space-y-32">
        {productos.map((p, i) => (
          <Reveal key={p.titulo}>
            {/* grid 12 col + orden adaptable */}
            <section className="grid md:grid-cols-12 gap-y-16 gap-x-0 items-center">
              {/* Texto: siempre primero en el DOM */}
              <div
                className={`
                  col-span-12 md:col-span-6 space-y-8
                  ${i % 2 === 0 ? "md:order-2 md:col-start-7" : "md:col-start-1"}
                `}
              >
                <div className="space-y-4">
                  {p.titulo === "Aceitunas Tradicionales" || p.titulo === "Aceitunas Premium" ? (
                    <p className="text-[#3e541a] text-xl font-medium tracking-widest">ACEITUNAS&nbsp;DE&nbsp;MESA</p>
                  ) : p.titulo === "Pichangas Premium" ? (
                    <p className="text-[#3e541a] text-xl font-medium tracking-widest">PICHANGAS</p>
                  ) : p.titulo === "Otros Productos" ? (
                    <p className="text-[#3e541a] text-xl font-medium tracking-widest">OTROS</p>
                  ) : null}
                  <h2 className="text-5xl md:text-6xl font-light text-[#3e541a] leading-tight">{p.titulo}</h2>
                  <div className="w-24 h-1 bg-[#3e541a]" />
                </div>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                  <p>{p.descripcion}</p>
                  <p>{p.descripcion2}</p>
                  <p>{p.descripcion3}</p>
                </div>
              </div>

              {/* Imagen */}
              <div
                className={`
                  col-span-12 md:col-span-5 flex justify-center
                  ${i % 2 === 0 ? "md:order-1 md:col-start-1" : "md:col-start-8"}
                `}
              >
                <figure className="w-full max-w-[40rem] aspect-square rounded-3xl overflow-hidden">
                  <img src={p.imagen} alt={p.titulo} className="w-full h-full object-contain" />
                </figure>
              </div>
            </section>
          </Reveal>
        ))}
      </section>

      {/* ---------- CTA ---------- */}
      <Reveal>
        <section className="text-center space-y-8">
          <div className="rounded-3xl p-12 space-y-6">
            <h2 className="text-4xl font-light text-[#3e541a] leading-tight">¿Listo para descubrir más?</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Explora nuestra completa línea de productos premium y descubre por qué Valle del Norte es sinónimo de calidad.
            </p>
            <button
              onClick={() => {
                const menuBtn = document.querySelector('[data-menu-button]') as HTMLButtonElement;
                menuBtn?.click();
                setTimeout(() => {
                  const prodBtn = document.querySelector('[data-product-button]') as HTMLButtonElement;
                  prodBtn?.click();
                }, 100);
              }}
              className="inline-flex items-center space-x-3 group bg-[#3e541a] text-white px-8 py-4 rounded-lg hover:bg-[#4a5f22] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl font-light">Explorar Productos</span>
              <span className="w-6 h-1 bg-white group-hover:w-8 transition-all" />
            </button>
          </div>
        </section>
      </Reveal>
    </main>
  );
}