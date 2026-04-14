"use client"

import { ArrowLeft, Check } from "lucide-react"
import { useState } from "react"

interface AcademicYearScreenProps {
  onBack: () => void
  onUpdate?: () => void
}

const years = [
  { id: "2023-24", label: "2023-24" },
  { id: "2024-25", label: "2024-25" },
  { id: "2025-26", label: "2025-26" },
]

export function AcademicYearScreen({ onBack, onUpdate }: AcademicYearScreenProps) {
  const [selectedYear, setSelectedYear] = useState("2025-26")

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-semibold text-lg">Select Academic Year</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-6">
        <div className="space-y-4">
          {years.map((year) => (
            <button
              key={year.id}
              onClick={() => setSelectedYear(year.id)}
              className="w-full flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedYear === year.id 
                    ? "bg-[#00C853] border-[#00C853]" 
                    : "border-gray-300"
                }`}>
                  {selectedYear === year.id && <Check className="w-4 h-4 text-white" />}
                </div>
                <span className="text-gray-800 font-medium">{year.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Update Button */}
      <div className="p-4">
        <button 
          onClick={onUpdate || onBack}
          className="w-full bg-[#FD3667] text-white py-4 rounded-full font-semibold"
        >
          Update
        </button>
      </div>
    </div>
  )
}
