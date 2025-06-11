import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
