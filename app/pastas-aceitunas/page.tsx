"use client"

import Header from "@/components/Header"

export default function PastasAceitunas() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Container with padding top and bottom */}
      <div className="pt-20 pb-8">
        {/* Logo and Title Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-4 bg-green-800 rounded-full flex items-center justify-center">
            <div className="text-white text-xs text-center">LOGO</div>
          </div>
          <div className="text-green-800 text-sm font-medium mb-2">PASTAS DE ACEITUNAS</div>
          <div className="w-8 h-0.5 bg-green-800 mx-auto rounded-full"></div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-20 px-4">
          <h1 className="text-green-800 text-4xl md:text-5xl font-serif max-w-4xl mx-auto leading-tight">
            Pastas de aceitunas elaboradas con métodos tradicionales, conservando el auténtico sabor mediterráneo.
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Product Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-green-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <div className="text-green-600">IMG</div>
            </div>
            <h2 className="text-green-800 text-2xl font-serif mb-4">Pasta de Aceitunas Verdes</h2>
            <p className="text-gray-700 text-sm mb-4">
              Pasta elaborada con aceitunas verdes seleccionadas, perfecta para untar en pan o usar en recetas.
            </p>
            <div className="w-8 h-0.5 bg-green-800 rounded-full mb-2"></div>
            <span className="text-green-800 text-sm font-medium cursor-pointer">Más</span>
          </div>

          {/* Product Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <div className="text-gray-600">IMG</div>
            </div>
            <h2 className="text-green-800 text-2xl font-serif mb-4">Pasta de Aceitunas Negras</h2>
            <p className="text-gray-700 text-sm mb-4">
              Pasta intensa elaborada con aceitunas negras maduras, ideal para platos gourmet.
            </p>
            <div className="w-8 h-0.5 bg-green-800 rounded-full mb-2"></div>
            <span className="text-green-800 text-sm font-medium cursor-pointer">Más</span>
          </div>

          {/* Product Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-yellow-100 rounded-lg shadow-lg mb-6 flex items-center justify-center">
              <div className="text-yellow-600">IMG</div>
            </div>
            <h2 className="text-green-800 text-2xl font-serif mb-4">Pasta Dulce de Aceitunas</h2>
            <p className="text-gray-700 text-sm mb-4">
              Mermelada de aceitunas con un toque dulce, perfecta para acompañar quesos y carnes.
            </p>
            <div className="w-8 h-0.5 bg-green-800 rounded-full mb-2"></div>
            <span className="text-green-800 text-sm font-medium cursor-pointer">Más</span>
          </div>
        </div>
      </div>
    </div>
  )
}
