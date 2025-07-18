"use client"

import Header from "@/components/Header"

export default function PotesAutoservicio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Contenedor principal con padding superior e inferior */}
      <div className="pt-20 pb-8">
        {/* Sección de logo y título */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-4 bg-green-800 rounded-full flex items-center justify-center">
            <div className="text-white text-xs text-center">LOGO</div>
          </div>
          <div className="text-green-800 text-sm font-medium mb-2">POTES AUTOSERVICIO</div>
          <div className="w-8 h-0.5 bg-green-800 mx-auto rounded-full"></div>
        </div>

        {/* Título principal */}
        <div className="text-center mb-20 px-4">
          <h1 className="text-green-800 text-4xl md:text-5xl font-serif max-w-4xl mx-auto leading-tight">
            Línea de potes autoservicio con más de 20 productos seleccionados, precio fijo por pote.
          </h1>
        </div>

        {/* Sección de productos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Producto 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <div className="text-blue-600">IMG</div>
            </div>
            <h2 className="text-green-800 text-2xl font-serif mb-4">Línea Estándar</h2>
            <p className="text-gray-700 text-sm mb-4">
              Productos de calidad estándar con excelente relación precio-calidad.
            </p>
            <div className="w-8 h-0.5 bg-green-800 rounded-full mb-2"></div>
            <span className="text-green-800 text-sm font-medium cursor-pointer">Más</span>
          </div>

          {/* Producto 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-purple-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <div className="text-purple-600">IMG</div>
            </div>
            <h2 className="text-green-800 text-2xl font-serif mb-4">Línea Premium</h2>
            <p className="text-gray-700 text-sm mb-4">
              Productos premium con ingredientes de la más alta calidad.
            </p>
            <div className="w-8 h-0.5 bg-green-800 rounded-full mb-2"></div>
            <span className="text-green-800 text-sm font-medium cursor-pointer">Más</span>
          </div>

          {/* Producto 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-red-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <div className="text-red-600">IMG</div>
            </div>
            <h2 className="text-green-800 text-2xl font-serif mb-4">Marca Oliomio</h2>
            <p className="text-gray-700 text-sm mb-4">
              Marca exclusiva de Jumbo con productos únicos y de alta calidad.
            </p>
            <div className="w-8 h-0.5 bg-green-800 rounded-full mb-2"></div>
            <span className="text-green-800 text-sm font-medium cursor-pointer">Más</span>
          </div>
        </div>

        {/* Características especiales */}
        <div className="text-center mt-12 px-4">
          <div className="bg-green-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-green-800 text-xl font-semibold mb-4">Características Especiales</h3>
            <div className="text-green-800 text-sm space-y-2">
              <div>• Vida útil de 6 meses</div>
              <div>• Precio fijo por pote, independiente del contenido</div>
              <div>• Más de 20 productos seleccionados</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
