"use client"

import { useState } from "react"
import { SubNav } from "@automotive/ui"
import { Menu, X } from "lucide-react"

export default function FordPage() {
  const [isSlideoutOpen, setIsSlideoutOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const handleMenuClick = () => {
    setIsSlideoutOpen(true)
  }

  const closeSlideout = () => {
    setIsSlideoutOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <SubNav
        icon={<Menu className="h-5 w-5" />}
        onClick={handleMenuClick}
        placeholder="Search Ford vehicles..."
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Ford</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Welcome to the Ford application. Click the menu button to open the slideout sidebar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-2">F-150</h3>
            <p className="text-muted-foreground">America's best-selling truck</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-2">Mustang</h3>
            <p className="text-muted-foreground">Iconic American muscle car</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-2">Explorer</h3>
            <p className="text-muted-foreground">Family-friendly SUV</p>
          </div>
        </div>
      </main>

      {/* Slideout Sidebar */}
      {isSlideoutOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={closeSlideout}></div>
          <div className="absolute left-0 top-0 h-full w-80 bg-background shadow-lg transform transition-transform border-r">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Ford Menu</h2>
                <button onClick={closeSlideout} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="space-y-4">
                <a href="#" className="block py-2 px-4 text-foreground hover:bg-accent rounded">
                  Vehicles
                </a>
                <a href="#" className="block py-2 px-4 text-foreground hover:bg-accent rounded">
                  Services
                </a>
                <a href="#" className="block py-2 px-4 text-foreground hover:bg-accent rounded">
                  Financing
                </a>
                <a href="#" className="block py-2 px-4 text-foreground hover:bg-accent rounded">
                  Support
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
