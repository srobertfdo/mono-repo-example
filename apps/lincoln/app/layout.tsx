import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Lincoln App",
  description: "Lincoln luxury automotive application",
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
