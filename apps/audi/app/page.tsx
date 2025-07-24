"use client"

import { useState } from "react"
import { SubNav } from "@automotive/ui"
import { ExternalLink } from "lucide-react"

export default function AudiPage() {
  const [searchValue, setSearchValue] = useState("")

  const handleExternalLinkClick = () => {
    // Redirect to external link
    window.open("https://www.audi.com/en/models.html", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav
        icon={<ExternalLink className="h-5 w-5" />}
        onClick={handleExternalLinkClick}
        placeholder="Search Audi models..."
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Audi</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the Audi application. Click the external link button to visit the official Audi models page.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">A4</h3>
            <p className="text-gray-600">Premium compact sedan</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Q7</h3>
            <p className="text-gray-600">Full-size luxury SUV</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">e-tron GT</h3>
            <p className="text-gray-600">Electric performance sedan</p>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About This Implementation</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              • <strong>Ford:</strong> Uses a slideout sidebar when clicking the menu icon
            </li>
            <li>
              • <strong>Lincoln:</strong> Opens a modal/popup when clicking the settings icon
            </li>
            <li>
              • <strong>Audi:</strong> Redirects to external link when clicking the external link icon
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
