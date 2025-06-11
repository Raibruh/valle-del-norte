import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">Contacto</h2>
          <p className="text-xl text-gray-600">Estamos aquí para atenderte y responder todas tus consultas</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800">Dirección</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Eduardo Frei Montalva 4201
                <br />
                Conchalí, Santiago
                <br />
                Chile
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800">Teléfono</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                <a href="tel:+56229491798" className="hover:text-green-600 transition-colors">
                  +56 2 2949 1798
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p>
                  <a href="mailto:Recepcionvalle@Valledelnorte.cl" className="hover:text-green-600 transition-colors">
                    Recepcionvalle@Valledelnorte.cl
                  </a>
                </p>
                <p>
                  <a href="mailto:pherrera@valledelnorte.cl" className="hover:text-green-600 transition-colors">
                    pherrera@valledelnorte.cl
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 text-center text-2xl">Horarios de Atención</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Lunes a Viernes</h4>
                  <p className="text-gray-600">8:00 - 18:00 hrs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Sábados</h4>
                  <p className="text-gray-600">9:00 - 14:00 hrs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">¿Eres distribuidor?</h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para conocer nuestras condiciones especiales para distribuidores y mayoristas. Tenemos
              soluciones a medida para tu negocio.
            </p>
            <a
              href="mailto:pherrera@valledelnorte.cl"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow inline-block"
            >
              Contactar Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
