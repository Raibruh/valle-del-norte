import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Productos() {
  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">Nuestros Productos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de aceitunas y productos gourmet, desde las tradicionales hasta las más premium
          </p>
        </div>

        <Tabs defaultValue="tradicionales" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-12">
            <TabsTrigger value="tradicionales">Tradicionales</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="pastas">Pastas</TabsTrigger>
            <TabsTrigger value="pichangas">Pichangas</TabsTrigger>
            <TabsTrigger value="autoservicio">Autoservicio</TabsTrigger>
            <TabsTrigger value="importados">Importados</TabsTrigger>
          </TabsList>

          <TabsContent value="tradicionales">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/aceitunas-verdes.png?height=200&width=300"
                    alt="Aceitunas Verdes"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Aceitunas Verdes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Con carozo</li>
                    <li>• Descarozadas</li>
                    <li>• En rodajas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/aceitunas-negras.png?height=200&width=300"
                    alt="Aceitunas Negras"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Aceitunas Negras</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Con carozo</li>
                    <li>• Descarozadas</li>
                    <li>• En rodajas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/aceitunas-kalamata.png?height=200&width=300"
                    alt="Aceitunas Kalamata"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Kalamata / Al Natural</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Aceitunas de variedad Kalamata, naturales y con todo su sabor mediterráneo.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/aceitunas-azapa.png?height=200&width=300"
                    alt="Aceitunas Azapa"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Azapa Naturales</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Con carozo</li>
                    <li>• Descarozadas</li>
                    <li>• En rodajas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="premium">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/aceitunas-premium-pimenton.png?height=200&width=300"
                    alt="Aceitunas Rellenas"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Verdes Rellenas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pimiento natural</li>
                    <li>• Ají natural</li>
                    <li>• Almendras</li>
                    <li>• Rocoto</li>
                    <li>• Jalapeño</li>
                    <li>• Ajo</li>
                    <li>• Doble relleno</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/aceitunas-premium-coctel.png?height=200&width=300"
                    alt="Cocktail de Aceitunas"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Cocktail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Mezcla perfecta de aceitunas verdes y negras descarozadas.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/aceitunas-premium-mix.png?height=200&width=300"
                    alt="Mix de Aceitunas"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Mix Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Aceitunas verdes descarozadas con pepinillos frescos.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pastas">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/pasta-aceitunas-verdes.png?height=150&width=225"
                    alt="Pasta de Aceitunas Verdes"
                    width={225}
                    height={150}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Pasta de Aceitunas Verdes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Deliciosa pasta untable elaborada con aceitunas verdes de primera calidad.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/pasta-aceitunas-negras.png?height=150&width=225"
                    alt="Pasta de Aceitunas Negras"
                    width={225} 
                    height={150}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Pasta de Aceitunas Negras</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Pasta untable con el intenso sabor de las aceitunas negras maduras.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/pasta-dulce-aceitunas.png?height=150&width=225"
                    alt="Pasta Dulce de Aceitunas"
                    width={225}
                    height={150}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Pasta Dulce (Mermelada)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Innovadora mermelada dulce de aceitunas, perfecta para acompañar quesos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pichangas">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/pichanga-premium.png?height=300&width=400"
                    alt="Pichanga Premium"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Pichanga Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">Envasada en atmósfera controlada para máxima frescura.</p>
                  <p className="text-sm font-semibold text-green-700 mb-2">Ingredientes destacados:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Queso mantecoso</li>
                    <li>• Jamón praga</li>
                    <li>• Aceitunas negras</li>
                    <li>• Pickles variados (zanahoria, coliflor, pepino, cebollita perla)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="autoservicio">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/potes-autoservicio.png?height=300&width=400"
                    alt="Potes Autoservicio"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Potes Autoservicio</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>
                      • <strong>Líneas:</strong> Estándar, Premium y marca Oliomio (exclusiva de Jumbo)
                    </li>
                    <li>
                      • <strong>Vida útil:</strong> 6 meses
                    </li>
                    <li>
                      • <strong>Precio fijo:</strong> Por pote, independiente del contenido
                    </li>
                    <li>
                      • <strong>Variedad:</strong> Más de 20 productos seleccionados
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="importados">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/productos-beretta.png?height=200&width=300"
                    alt="Productos Beretta"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Productos BERETTA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">Importados desde Italia:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Prosciutto Di Parma 70gr</li>
                    <li>• Salame Milano 100gr</li>
                    <li>• Panceta affumicata 90gr</li>
                    <li>• Salame al tartufo 100gr</li>
                    <li>• Prosciutto crudo 100gr</li>
                    <li>• Mortadella gran sigilio</li>
                    <li>• Y más...</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src="/images/productos/exclusividad-cencosud.png?height=200&width=300"
                    alt="Exclusividad Cencosud"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full mx-auto"
                  />
                  <CardTitle className="text-green-800">Exclusividad</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Importación exclusiva para Cencosud</strong>
                  </p>
                  <p className="text-sm text-gray-600">Presentación en frío: conservar entre 0 y 6 °C</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
