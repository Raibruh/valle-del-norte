"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";

/* ---------------- variants ---------------- */
const itemFadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: "easeIn" } },
};

const sectionFadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -24, transition: { duration: 0.25, ease: "easeIn" } },
};

/* ---------------- data ---------------- */
const PRODUCT_CATEGORIES = [
  {
    category: "ACEITUNAS",
    products: [
      { name: "Aceitunas Tradicionales", path: "/aceitunas-tradicionales" },
      { name: "Aceitunas Premium", path: "/aceitunas-premium" },
    ],
  },
  {
    category: "PASTAS",
    products: [
      { name: "Pastas de Aceitunas", path: "/pastas-aceitunas" },
    ],
  },
  {
    category: "PICHANGAS",
    products: [{ name: "Pichangas Premium", path: "/pichangas" }],
  },
  {
    category: "OTROS",
    products: [{ name: "Otros", path: "/otros" }],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showProductSubmenu, setShowProductSubmenu] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateToPage = (path: string) => {
    if (pathname === path) {
      // Si estamos en la misma página, recargar
      window.location.reload();
    } else {
      // Si es una página diferente, navegar normalmente
      router.push(path);
    }
    // No cerramos el menú inmediatamente, se mantendrá abierto durante la navegación
    setShowProductSubmenu(false);
    setShowContactInfo(false);
  };

  // Cerrar el menú cuando la página cambie
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsClosing(false);
    }
  }, [pathname]);

  const closeMenu = () => {
    setIsClosing(true);
    setShowProductSubmenu(false);
    setShowContactInfo(false);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 1000);
  };

  const handleProductClick = () => {
    setShowProductSubmenu((v) => !v);
    setShowContactInfo(false);
  };

  const handleContactClick = () => {
    setShowContactInfo((v) => !v);
    setShowProductSubmenu(false);
  };

  /* Estado derivado: hay panel derecho visible? */
  const rightPanelActive = showProductSubmenu || showContactInfo;

  return (
    <>
      {/* Botón MENU */}
      <Button
        variant="ghost"
        className="fixed top-6 right-6 z-50 bg-transparent hover:bg-transparent flex items-center space-x-3 px-6 py-3"
        data-menu-button
        onClick={() => {
          if (isMenuOpen) closeMenu();
          else setIsMenuOpen(true);
        }}
      >
        <span
          className={`text-2xl font-light tracking-wide transition-colors duration-1000 ease-in-out ${
            isMenuOpen ? "text-white" : "text-black"
          }`}
        >
          MENU
        </span>
        <div className="relative">
          {/* Hamburguesa */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              className={`w-8 h-8 relative transition-colors duration-1000 ease-in-out ${
                isMenuOpen ? "text-white" : "text-black"
              }`}
            >
              <div className="absolute inset-0 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-current" />
                <div className="w-full h-0.5 bg-current" />
                <div className="w-full h-0.5 bg-current" />
              </div>
            </div>
          </div>

          {/* X */}
          <div
            className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`w-8 h-8 relative transition-colors duration-1000 ease-in-out ${
                isMenuOpen ? "text-white" : "text-black"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-current rotate-45" />
                <div className="absolute w-full h-0.5 bg-current -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </Button>

      {/* Overlay completo */}
      <div
        className={`fixed inset-0 z-40 flex transition-transform duration-1000 ease-in-out overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Panel izquierdo */}
        <div className="w-full bg-[#304214] relative overflow-hidden">
          {/* Barra superior */}
          <div className="absolute top-0 left-0 w-1/2 flex justify-between items-center p-8 pl-36 z-50">
            <button
              onClick={() => navigateToPage("/")}
              className="text-white text-3xl font-light tracking-wide hover:text-white/80 transition-colors cursor-pointer"
            >
              INICIO
            </button>
          </div>

          {/* Navegación principal */}
          <div className="h-full flex flex-col justify-start items-center relative w-1/2 pl-96 pt-64">
            <div className="text-left">
              <p
                className={`text-white/70 text-2xl mb-6 tracking-[0.2em] font-light uppercase transition-all duration-1000 ${
                  isMenuOpen && !isClosing
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay:
                    isMenuOpen && !isClosing
                      ? "100ms"
                      : isClosing
                      ? "900ms"
                      : "0ms",
                }}
              >
                DESCUBRE
              </p>

              <div className="space-y-6">
                <button
                  onClick={() => navigateToPage("/nuestra-historia")}
                  className={`flex items-center space-x-4 text-white text-4xl font-light tracking-wide hover:text-white/80 transition-all duration-1000 ${
                    isMenuOpen && !isClosing
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay:
                      isMenuOpen && !isClosing
                        ? "200ms"
                        : isClosing
                        ? "800ms"
                        : "0ms",
                  }}
                >
                  <span>Nuestra historia</span>
                </button>

                <button
                  onClick={handleProductClick}
                  data-product-button
                  className={`flex items-center space-x-4 text-white text-4xl font-light tracking-wide hover:text-white/80 transition-all duration-1000 relative ${
                    isMenuOpen && !isClosing
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  } ${showProductSubmenu ? "text-green-300" : ""}`}
                  style={{
                    transitionDelay:
                      isMenuOpen && !isClosing
                        ? "300ms"
                        : isClosing
                        ? "700ms"
                        : "0ms",
                  }}
                >
                  <span>Productos</span>
                  <ChevronRight className="h-8 w-8" />
                  {/* línea animada */}
                  <div
                    className={`absolute top-1/2 left-full -translate-y-1/2 transition-all duration-1000 ease-in-out ${
                      showProductSubmenu ? "w-96 opacity-100" : "w-0 opacity-0"
                    }`}
                  >
                    <div className="h-0.5 bg-[#3e541a] w-full" />
                  </div>
                </button>

                <button
                  onClick={() => navigateToPage("/compromiso-calidad")}
                  className={`flex items-center space-x-4 text-white text-4xl font-light tracking-wide hover:text-white/80 transition-all duration-1000 ${
                    isMenuOpen && !isClosing
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay:
                      isMenuOpen && !isClosing
                        ? "400ms"
                        : isClosing
                        ? "600ms"
                        : "0ms",
                  }}
                >
                  <span>Compromiso y Calidad</span>
                </button>

                <button
                  onClick={() => navigateToPage("/donde-encontrarnos")}
                  className={`flex items-center space-x-4 text-white text-4xl font-light tracking-wide hover:text-white/80 transition-all duration-1000 ${
                    isMenuOpen && !isClosing
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay:
                      isMenuOpen && !isClosing
                        ? "500ms"
                        : isClosing
                        ? "500ms"
                        : "0ms",
                  }}
                >
                  <span>Dónde encontrarnos</span>
                </button>

                <button
                  onClick={handleContactClick}
                  className={`flex items-center space-x-4 text-white text-4xl font-light tracking-wide hover:text-white/80 transition-all duration-1000 relative ${
                    isMenuOpen && !isClosing
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  } ${showContactInfo ? "text-green-300" : ""}`}
                  style={{
                    transitionDelay:
                      isMenuOpen && !isClosing
                        ? "700ms"
                        : isClosing
                        ? "300ms"
                        : "0ms",
                  }}
                >
                  <span>Contacto</span>
                  <ChevronRight className="h-8 w-8" />
                  {/* línea animada */}
                  <div
                    className={`absolute top-1/2 left-full -translate-y-1/2 transition-all duration-1000 ease-in-out ${
                      showContactInfo ? "w-96 opacity-100" : "w-0 opacity-0"
                    }`}
                  >
                    <div className="h-0.5 bg-[#3e541a] w-full" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Iconos RRSS */}
          <div className="absolute bottom-0 left-0 p-8 pl-36 w-1/2">
            <div className="flex items-center">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/valledelnorte.cl/" }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white hover:text-white/80 transition-all duration-1000 ${
                    isMenuOpen && !isClosing
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay:
                      isMenuOpen && !isClosing
                        ? `${800 + idx * 50}ms`
                        : isClosing
                        ? `${200 - idx * 50}ms`
                        : "0ms",
                  }}
                >
                  <Icon className="h-10 w-10" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- Panel derecho ---------------- */}
        <div
          /* El panel se queda montado; alternamos visibilidad */
          className={`
            absolute top-0 right-0 w-1/2 h-full bg-[#3e541a] transition-transform duration-1000 ease-in-out
            ${rightPanelActive || isClosing ? "translate-x-0" : "translate-x-full"}
            ${rightPanelActive ? "pointer-events-auto" : "pointer-events-none"}
          `}
        >
          {/* Contenido dinámico con AnimatePresence */}
          <AnimatePresence mode="wait">
            {showProductSubmenu && (
              <motion.div
                key="prod"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={sectionFadeDown}
                className="h-full flex flex-col justify-center items-start pl-16"
              >
                <div className="space-y-12 w-full max-w-md">
                  {PRODUCT_CATEGORIES.map((cat, ci) => (
                    <motion.div
                      key={cat.category}
                      custom={ci}
                      variants={itemFadeDown}
                      className="space-y-4"
                    >
                      <h3 className="text-white/70 text-base tracking-[0.2em] font-light uppercase">
                        {cat.category}
                      </h3>
                      <div className="space-y-4">
                        {cat.products.map((p, pi) => (
                          <motion.button
                            key={p.name}
                            custom={ci + pi + 0.5}
                            variants={itemFadeDown}
                            onClick={() => navigateToPage(p.path)}
                            className="block text-white text-2xl font-light tracking-wide hover:text-white/80 border-b border-white/20 pb-2 w-full text-left"
                          >
                            {p.name}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {showContactInfo && (
              <motion.div
                key="contact"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={sectionFadeDown}
                className="h-full flex flex-col justify-center items-start pl-16 pr-8 max-w-md"
              >
                <motion.h3
                  custom={0}
                  variants={itemFadeDown}
                  className="text-white/70 text-base tracking-[0.2em] font-light uppercase mb-8"
                >
                  INFORMACIÓN DE CONTACTO
                </motion.h3>

                <div className="space-y-10 w-full text-left">
                  <motion.div custom={1} variants={itemFadeDown} className="space-y-2">
                    <h4 className="text-white text-2xl font-light tracking-wide">
                      Dirección
                    </h4>
                    <div className="text-white/80 text-lg font-light leading-relaxed">
                      <p>Eduardo Frei Montalva 4201</p>
                      <p>Conchalí, Santiago</p>
                      <p>Chile</p>
                    </div>
                  </motion.div>

                  <motion.div custom={2} variants={itemFadeDown} className="space-y-2">
                    <h4 className="text-white text-2xl font-light tracking-wide">
                      Teléfono
                    </h4>
                    <a
                      href="tel:+56229491798"
                      className="block text-white/80 text-lg font-light hover:text-white transition-colors"
                    >
                      +56 2 2949 1798
                    </a>
                  </motion.div>

                  <motion.div custom={3} variants={itemFadeDown} className="space-y-2">
                    <h4 className="text-white text-2xl font-light tracking-wide">
                      Email
                    </h4>
                    <div className="space-y-2">
                      <a
                        href="mailto:Recepcionvalle@Valledelnorte.cl"
                        className="block text-white/80 text-lg font-light hover:text-white transition-colors"
                      >
                        Recepcionvalle@Valledelnorte.cl
                      </a>
                      <a
                        href="mailto:pherrera@valledelnorte.cl"
                        className="block text-white/80 text-lg font-light hover:text-white transition-colors"
                      >
                        pherrera@valledelnorte.cl
                      </a>
                    </div>
                  </motion.div>

                  <motion.div custom={4} variants={itemFadeDown} className="space-y-2">
                    <h4 className="text-white text-2xl font-light tracking-wide">
                      Horarios de Atención
                    </h4>
                    <div className="text-white/80 text-lg font-light leading-relaxed">
                      <p>
                        <strong>Lunes a Viernes:</strong> 8:00 - 18:00 hrs
                      </p>
                      <p>
                        <strong>Sábados:</strong> 9:00 - 14:00 hrs
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
              