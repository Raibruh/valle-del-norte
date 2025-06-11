"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("productos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="text-6xl font-bold text-[#B8860B] font-serif tracking-wider">Valle del Norte</span>
            <p className="text-2xl lg:text-3xl text-[#B8860B] font-medium">Agricultura Fresca y Natural</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Más de 30 años llevando aceitunas desde el olivo hasta tu mesa. Tradición, calidad y frescura en cada
              producto.
            </p>
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Nuestros Productos
            </Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Aceitunas frescas"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Productos encurtidos"
                  width={250}
                  height={200}
                  className="rounded-lg shadow-lg object-cover w-full h-48"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Aceitunas envasadas"
                  width={250}
                  height={200}
                  className="rounded-lg shadow-lg object-cover w-full h-48"
                />
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Jamones premium"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
