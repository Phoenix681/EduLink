"use client"

import { ArrowLeft, ChevronDown } from "lucide-react"
import { useState } from "react"

interface CalendarScreenProps {
  onBack: () => void
}

const events = [
  { day: 1, month: "APR", title: "National Day", type: "Holiday", color: "bg-[#FD3667]" },
  { day: 10, month: "APR", title: "Summer Holiday Event", type: "Event", color: "bg-[#00C853]" },
  { day: 22, month: "APR", title: "School Function", type: "Event", color: "bg-[#4A4A9E]" },
  { day: 26, month: "APR", title: "Dean Meeting", type: "Event", color: "bg-[#FFB74D]" },
  { day: 30, month: "APR", title: "Carnival in the City", type: "Holiday", color: "bg-[#FD3667]" },
]

const calendarDays = [
  { day: null, dots: false },
  { day: null, dots: false },
  { day: 1, dots: false },
  { day: 2, dots: true },
  { day: 3, dots: false },
  { day: 4, dots: false },
  { day: 5, dots: true },
  { day: 6, dots: false },
  { day: 7, dots: false },
  { day: 8, dots: false, isToday: true },
  { day: 9, dots: false },
  { day: 10, dots: false },
  { day: 11, dots: true },
  { day: 12, dots: false },
  { day: 13, dots: false },
  { day: 14, dots: false },
  { day: 15, dots: false },
  { day: 16, dots: false },
  { day: 17, dots: false },
  { day: 18, dots: false },
  { day: 19, dots: false },
  { day: 20, dots: false },
  { day: 21, dots: false },
  { day: 22, dots: false },
  { day: 23, dots: false },
  { day: 24, dots: true },
  { day: 25, dots: false },
  { day: 26, dots: true },
  { day: 27, dots: false },
  { day: 28, dots: false },
  { day: 29, dots: false },
  { day: 30, dots: false },
  { day: 31, dots: false },
]

export function CalendarScreen({ onBack }: CalendarScreenProps) {
  const [year, setYear] = useState(2026)

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-white font-semibold text-lg">Calendar</h1>
          </div>
          <button className="flex items-center gap-1 text-white text-sm">
            {year}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {/* Calendar Grid */}
        <div className="px-4 py-4">
          <h2 className="text-[#4A4A9E] font-semibold mb-3">April 2026</h2>
          
          {/* Days of week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <div key={index} className="text-center text-gray-500 text-sm py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((item, index) => (
              <div key={index} className="aspect-square flex flex-col items-center justify-center relative">
                {item.day && (
                  <>
                    <span className={`text-sm ${
                      item.isToday 
                        ? "w-8 h-8 bg-[#4A4A9E] text-white rounded-full flex items-center justify-center" 
                        : "text-gray-700"
                    }`}>
                      {item.day}
                    </span>
                    {item.dots && (
                      <div className="flex gap-0.5 mt-0.5">
                        <div className="w-1 h-1 rounded-full bg-[#FD3667]"></div>
                        <div className="w-1 h-1 rounded-full bg-[#FD3667]"></div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="px-4 py-2">
          {events.map((event, index) => (
            <div key={index} className="flex items-center gap-4 py-3 border-b border-gray-100">
              <div className={`${event.color} text-white rounded-lg w-12 h-12 flex flex-col items-center justify-center`}>
                <span className="text-lg font-bold leading-none">{event.day.toString().padStart(2, "0")}</span>
                <span className="text-[10px] uppercase">{event.month}</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">{event.title}</p>
                <p className="text-sm text-[#00C853]">{event.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
