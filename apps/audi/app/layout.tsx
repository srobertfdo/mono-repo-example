import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Audi App",
  description: "Audi premium automotive application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
