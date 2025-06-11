import { Card, CardContent } from "@/components/ui/card"
import { Shield, Truck, Award, Users } from "lucide-react"

export default function Compromiso() {
  return (
    <section id="compromiso" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">Compromiso y Calidad</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En Valle del Norte, la calidad está en el corazón de todo lo que hacemos. Nuestras plantas son auditadas
            regularmente por empresas líderes como Cencosud, obteniendo resultados sobre el 90% de aprobación en
            estándares de higiene, manipulación y trazabilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Auditorías</h3>
              <p className="text-gray-600 text-sm">+90% de aprobación en estándares de calidad</p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Truck className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Flota Propia</h3>
              <p className="text-gray-600 text-sm">Vehículos refrigerados para máxima frescura</p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Certificaciones</h3>
              <p className="text-gray-600 text-sm">ISO 22000 y sistema CQS</p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Trazabilidad</h3>
              <p className="text-gray-600 text-sm">Control total del proceso productivo</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Contamos con flota propia de vehículos refrigerados, lo que garantiza que cada producto llegue fresco y en
              óptimas condiciones a su destino.
            </p>
            <p className="text-lg text-green-800 font-semibold">
              Nos preocupamos de cada etapa del proceso productivo, desde el campo hasta el punto de venta, con un
              enfoque en la excelencia, frescura y seguridad alimentaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
