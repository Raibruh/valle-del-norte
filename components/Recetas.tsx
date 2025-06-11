import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, ChefHat } from "lucide-react"

export default function Recetas() {
  const recetas = [
    {
      title: "Pasta Mediterránea con Aceitunas Negras",
      image: "/placeholder.svg?height=250&width=350",
      tiempo: "20 min",
      personas: "4",
      descripcion: "Deliciosa pasta con aceitunas negras, tomates cherry y albahaca fresca.",
    },
    {
      title: "Ensalada Griega con Kalamata",
      image: "/placeholder.svg?height=250&width=350",
      tiempo: "15 min",
      personas: "2",
      descripcion: "Ensalada fresca con aceitunas Kalamata, queso feta y pepinillos.",
    },
    {
      title: "Pizza Gourmet con Aceitunas",
      image: "/placeholder.svg?height=250&width=350",
      tiempo: "30 min",
      personas: "4",
      descripcion: "Pizza artesanal con aceitunas verdes, jamón praga y queso mantecoso.",
    },
    {
      title: "Focaccia con Aceitunas Negras",
      image: "/placeholder.svg?height=250&width=350",
      tiempo: "45 min",
      personas: "6",
      descripcion: "Pan focaccia casero con aceitunas negras y hierbas aromáticas.",
    },
    {
      title: "Dry Martini Clásico",
      image: "/placeholder.svg?height=250&width=350",
      tiempo: "5 min",
      personas: "1",
      descripcion: "El clásico cóctel con gin, vermut seco y nuestras aceitunas verdes.",
    },
    {
      title: "Tabla de Pichanga Premium",
      image: "/placeholder.svg?height=250&width=350",
      tiempo: "10 min",
      personas: "6",
      descripcion: "Tabla gourmet con nuestra pichanga premium y acompañamientos.",
    },
  ]

  return (
    <section id="recetas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">Recetas y Usos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre deliciosas formas de disfrutar nuestros productos con estas recetas especiales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recetas.map((receta, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-green-200 overflow-hidden">
              <div className="relative">
                <Image
                  src={receta.image || "/placeholder.svg"}
                  alt={receta.title}
                  width={350}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <ChefHat className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">{receta.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{receta.descripcion}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{receta.tiempo}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{receta.personas} personas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">¿Tienes una receta especial?</h3>
            <p className="text-gray-600 mb-6">
              Síguenos en Instagram para más recetas y comparte tus creaciones con nuestros productos
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow inline-flex items-center space-x-2"
              >
                <span>📸</span>
                <span>Síguenos en Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
