import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DondeEncontrarnos() {
  const supermercados = [
    { name: "Jumbo", logo: "/images/logos/jumbo.png?height=80&width=120", url: "https://www.jumbo.cl/busqueda?ft=valle+del+norte" },
    { name: "Santa Isabel", logo: "/images/logos/santa-isabel.png?height=80&width=120", url: "https://www.santaisabel.cl/busqueda?ft=valle+del+norte" },
    { name: "Spid", logo: "/images/logos/spid.png?height=80&width=120", url: "https://spidchile.cl/" },
    { name: "Líder Walmart", logo: "/images/logos/lider.png?height=80&width=120", url: "https://www.lider.cl/supermercado/search?query=valle%20del%20norte" },
    { name: "Tottus", logo: "/images/logos/tottus.png?height=80&width=120", url: "https://www.tottus.cl/tottus-cl/buscar?Ntt=valle+del+norte" },
    { name: "Unimarc", logo: "/images/logos/unimarc.png?height=80&width=120", url: "https://www.unimarc.cl/search?q=valle-del-norte" },
  ]

  return (
    <section id="donde-encontrarnos" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">Dónde Encontrarnos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros productos están presentes en los principales supermercados del país
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-0 mb-12 -mx-6">
          {supermercados.map((supermercado, index) => (
            <a
              key={index}
              href={supermercado.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:scale-105 transition-transform"
            >
              <div className="relative w-[180px] aspect-[3/2] flex items-center justify-center">
                <Image
                  src={supermercado.logo || "/placeholder.svg"}
                  alt={`Logo ${supermercado.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>  

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 text-xl">Granel Autoservicio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Disponible en múltiples sedes de Jumbo y Santa Isabel</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Más de 20 variedades disponibles</li>
                <li>• Precio fijo por pote</li>
                <li>• Frescura garantizada</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 text-xl">Línea Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Baldes de 5 kg con productos gourmet</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Aceitunas en aceite de oliva</li>
                <li>• Con orégano y especias</li>
                <li>• Fondos de alcachofa</li>
                <li>• Antipasto premium</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Marcas Propias</h3>
            <p className="text-gray-600 mb-4">También fabricamos productos bajo marca propia para:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Tottus (marca propia)
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Oliomio (exclusiva Jumbo)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
