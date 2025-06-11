"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">VN</span>
            </div>
            <span className="text-2xl font-bold text-green-800">Valle del Norte</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Historia
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("compromiso")}
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Calidad
            </button>
            <button
              onClick={() => scrollToSection("donde-encontrarnos")}
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Dónde encontrarnos
            </button>
            <button
              onClick={() => scrollToSection("recetas")}
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Recetas
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-green-700 hover:text-green-900 font-medium text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("historia")}
                className="text-green-700 hover:text-green-900 font-medium text-left"
              >
                Historia
              </button>
              <button
                onClick={() => scrollToSection("productos")}
                className="text-green-700 hover:text-green-900 font-medium text-left"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("compromiso")}
                className="text-green-700 hover:text-green-900 font-medium text-left"
              >
                Calidad
              </button>
              <button
                onClick={() => scrollToSection("donde-encontrarnos")}
                className="text-green-700 hover:text-green-900 font-medium text-left"
              >
                Dónde encontrarnos
              </button>
              <button
                onClick={() => scrollToSection("recetas")}
                className="text-green-700 hover:text-green-900 font-medium text-left"
              >
                Recetas
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-green-700 hover:text-green-900 font-medium text-left"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
