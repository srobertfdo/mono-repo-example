import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Ford App",
  description: "Ford automotive application",
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
