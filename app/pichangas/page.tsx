"use client"

import Header from "@/components/Header"

export default function Pichangas() {
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
          <div className="text-green-800 text-sm font-medium mb-2">PICHANGA PREMIUM</div>
          <div className="w-8 h-0.5 bg-green-800 mx-auto rounded-full"></div>
        </div>

        {/* Título principal */}
        <div className="text-center mb-20 px-4">
          <h1 className="text-green-800 text-4xl md:text-5xl font-serif max-w-4xl mx-auto leading-tight">
            Pichanga Premium envasada en atmósfera modificada, con ingredientes de la más alta calidad.
          </h1>
        </div>

        {/* Sección de productos */}
        <div className="flex items-start space-x-8 max-w-4xl mx-auto px-4">
          {/* Producto 1 */}
          <div className="w-32 h-32 bg-orange-100 rounded-lg shadow-lg flex-shrink-0 flex items-center justify-center">
            <div className="w-full h-full bg-orange-200 flex items-center justify-center text-orange-600">IMG</div>
          </div>
          
          {/* Información del producto */}
          <div className="flex-1">
            <div className="text-green-800 text-sm font-medium mb-2">PICHANGAS PREMIUM</div>
            <h2 className="text-green-800 text-3xl font-serif mb-4">Pichanga Premium</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Envasada en atmósfera modificada para mantener la frescura y sabor de todos los ingredientes.
            </p>
            {/* Lista de ingredientes */}
            <div className="text-green-800 text-sm mb-4">
              <div className="mb-1">• Queso mantecoso</div>
              <div className="mb-1">• Jamón praga</div>
              <div className="mb-1">• Aceitunas negras</div>
              <div className="mb-1">• Pickles (zanahoria, coliflor, pepino, cebollita perla)</div>
            </div>
            {/* Línea decorativa y botón */}
            <div className="mt-4">
              <div className="w-8 h-0.5 bg-green-800 mx-auto rounded-full"></div>
              <span className="text-green-800 text-sm font-medium cursor-pointer block mt-2">Más</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
