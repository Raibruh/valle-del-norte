import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Nuestros Productos
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Aceitunas premium de la más alta calidad, cultivadas y procesadas con dedicación
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Product 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <div className="text-6xl">🫒</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Aceitunas Verdes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Aceitunas verdes seleccionadas a mano, con un sabor fresco y crujiente. 
                    Perfectas para aperitivos y ensaladas.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">Premium</span>
                    <span className="text-sm text-gray-500">Disponible</span>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <div className="text-6xl">🫒</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Aceitunas Negras
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Aceitunas negras maduras con un sabor intenso y rico. 
                    Ideales para pizzas, pastas y platos mediterráneos.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">Premium</span>
                    <span className="text-sm text-gray-500">Disponible</span>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <div className="text-6xl">🫒</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Aceitunas Rellenas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Aceitunas rellenas con pimientos, anchoas o queso. 
                    Una experiencia gourmet única para ocasiones especiales.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">Gourmet</span>
                    <span className="text-sm text-gray-500">Disponible</span>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <div className="text-6xl">🫒</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Aceite de Oliva
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Aceite de oliva extra virgen prensado en frío. 
                    Con notas frutales y un sabor equilibrado.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">Extra Virgen</span>
                    <span className="text-sm text-gray-500">Disponible</span>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <div className="text-6xl">🫒</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Aceitunas Orgánicas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Aceitunas cultivadas sin pesticidas ni químicos. 
                    Para quienes buscan productos 100% naturales.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">Orgánico</span>
                    <span className="text-sm text-gray-500">Disponible</span>
                  </div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <div className="text-6xl">🫒</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mix Mediterráneo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Una selección especial de nuestras mejores aceitunas. 
                    Perfecta para regalos y eventos especiales.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">Selección</span>
                    <span className="text-sm text-gray-500">Disponible</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Calidad Garantizada
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Todos nuestros productos pasan por rigurosos controles de calidad para asegurar 
              que lleguen a tu mesa en perfectas condiciones.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Selección Manual</h3>
                <p className="text-gray-600">
                  Cada aceituna es seleccionada a mano para garantizar la mejor calidad
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Procesos Naturales</h3>
                <p className="text-gray-600">
                  Utilizamos métodos tradicionales sin conservantes artificiales
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificaciones</h3>
                <p className="text-gray-600">
                  Cumplimos con todos los estándares internacionales de calidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 