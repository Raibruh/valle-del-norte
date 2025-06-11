"use client"

import { Instagram } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold text-lg">VN</span>
              </div>
              <span className="text-2xl font-bold">Valle del Norte</span>
            </div>
            <p className="text-green-100">
              Más de 30 años llevando aceitunas desde el olivo hasta tu mesa. Agricultura fresca y natural.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-green-100 hover:text-white transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("historia")}
                className="block text-green-100 hover:text-white transition-colors"
              >
                Historia
              </button>
              <button
                onClick={() => scrollToSection("productos")}
                className="block text-green-100 hover:text-white transition-colors"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("donde-encontrarnos")}
                className="block text-green-100 hover:text-white transition-colors"
              >
                Dónde encontrarnos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-green-100 hover:text-white transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Redes sociales y contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@valledelnorte</span>
              </a>
              <div className="space-y-2 text-green-100">
                <p>📞 +56 2 2949 1798</p>
                <p>📧 Recepcionvalle@Valledelnorte.cl</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100 text-sm">© 2024 Valle del Norte. Todos los derechos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                Términos de uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
