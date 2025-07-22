"use client"

import { Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#3e541a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/images/logo.png"
                alt="Valle del Norte"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-light">Valle del Norte</h3>
                <p className="text-white/80 text-sm">Tradición y Calidad</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Más de 30 años llevando aceitunas desde el olivo hasta tu mesa. 
              Tradición, calidad y frescura en cada producto.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-light mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="/nuestra-historia" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="/productos" className="hover:text-white transition-colors">Productos</a></li>
              <li><a href="/compromiso-calidad" className="hover:text-white transition-colors">Compromiso y Calidad</a></li>
              <li><a href="/donde-encontrarnos" className="hover:text-white transition-colors">Dónde Encontrarnos</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-light mb-4">Contacto</h4>
            <div className="space-y-2 text-white/80">
              <p>Eduardo Frei Montalva 4201</p>
              <p>Conchalí, Santiago</p>
              <p>Chile</p>
              <p>+56 2 2949 1798</p>
            </div>
          </div>
        </div>

        {/* Redes sociales y copyright */}
        <div className="border-t border-[#4a5f22] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <a href="https://www.instagram.com/valledelnorte.cl/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm mb-2">
                © 2024 Valle del Norte. Todos los derechos reservados.
              </p>
              <div className="flex justify-center md:justify-end text-sm">
                <a href="/terminos-condiciones" className="text-white/60 hover:text-white transition-colors">
                  Términos de uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
