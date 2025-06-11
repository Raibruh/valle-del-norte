import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Historia from "@/components/Historia"
import Productos from "@/components/Productos"
import Compromiso from "@/components/Compromiso"
import DondeEncontrarnos from "@/components/DondeEncontrarnos"
import Recetas from "@/components/Recetas"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Header />
      <Hero />
      <Historia />
      <Productos />
      <Compromiso />
      <DondeEncontrarnos />
      <Recetas />
      <Contacto />
      <Footer />
    </main>
  )
}
