"use client"

import { useState } from "react"
import { SubNav } from "@automotive/ui"
import { Settings } from "lucide-react"

export default function LincolnPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const handleSettingsClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav
        icon={<Settings className="h-5 w-5" />}
        onClick={handleSettingsClick}
        placeholder="Search Lincoln luxury vehicles..."
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-black mb-8">Lincoln</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the Lincoln luxury application. Click the settings button to open the modal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Navigator</h3>
            <p className="text-gray-600">Full-size luxury SUV</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Aviator</h3>
            <p className="text-gray-600">Mid-size luxury SUV</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Continental</h3>
            <p className="text-gray-600">Luxury sedan</p>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeModal}></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Lincoln Settings</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Dealer</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Select a dealer</option>
                  <option>Lincoln of Downtown</option>
                  <option>Lincoln Premium Motors</option>
                  <option>Lincoln Luxury Center</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notifications</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Service reminders
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    New model alerts
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Promotional offers
                  </label>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button onClick={closeModal} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
