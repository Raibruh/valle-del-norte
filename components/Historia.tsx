import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Leaf, Clock } from "lucide-react"

export default function Historia() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">Nuestra Historia</h2>
          <p className="text-2xl text-green-600 font-medium mb-4">Tradición y Calidad</p>
          <p className="text-xl text-gray-600 italic">
            "Más de 30 años llevando aceitunas desde el olivo hasta tu mesa"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Con más de 30 años en el rubro, en Valle del Norte nos dedicamos con pasión a la producción y
              comercialización de aceitunas de mesa de alta calidad, destinado a los grandes mercados del retail a nivel
              nacional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestra historia nace en el valle de Azapa ubicado en el norte de Chile con olivos de más de 100 años de
              antigüedad. Ahí combinamos tradición agrícola con tecnología moderna para ofrecer productos frescos y
              sanos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde la cosecha de la aceituna hasta el envasado, cuidamos cada detalle para garantizar la mejor aceituna
              en tu mesa.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Valle de Azapa con olivos centenarios"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">30+ Años</h3>
              <p className="text-gray-600">de experiencia en el rubro</p>
            </CardContent>
          </Card>
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">2M+ Kilos</h3>
              <p className="text-gray-600">anuales de producción</p>
            </CardContent>
          </Card>
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">ISO 22000</h3>
              <p className="text-gray-600">Certificación de calidad</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-green-50 rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Nos enorgullece trabajar con los más altos estándares de calidad, sostenibilidad y compromisos que nos exige
            el mercado nacional e internacional. Certificados por el sistema de gestión de inocuidad alimentaria (CQS)
            por la recepción, selección, clasificación, envasado y distribución de aceitunas del valle de Azapa y
            productos agroindustriales.
          </p>
          <p className="text-lg text-green-800 font-semibold">
            Estamos consolidados como el mayor productor y abastecedor de aceitunas a nivel nacional, superando los 2
            millones de kilos anuales.
          </p>
        </div>
      </div>
    </section>
  )
}
