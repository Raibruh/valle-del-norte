import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans_Condensed } from "next/font/google"
import "./globals.css"

const ibmPlex = IBM_Plex_Sans_Condensed({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex"
})

export const metadata: Metadata = {
  title: "Valle del Norte - Aceitunas Premium | Agricultura Fresca y Natural",
  description:
    "Más de 30 años produciendo aceitunas de alta calidad desde el Valle de Azapa. Productos frescos, naturales y gourmet para los principales supermercados de Chile.",
  keywords: "aceitunas, Valle del Norte, aceitunas premium, productos gourmet, Valle de Azapa, aceitunas chilenas",
  openGraph: {
    title: "Valle del Norte - Aceitunas Premium",
    description: "Agricultura fresca y natural. Más de 30 años llevando aceitunas desde el olivo hasta tu mesa.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${ibmPlex.className} font-sans`}>
        {children}
      </body>
    </html>
  )
}
