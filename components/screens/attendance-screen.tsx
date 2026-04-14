"use client"

import { ArrowLeft, ChevronDown } from "lucide-react"
import { useState } from "react"

interface AttendanceScreenProps {
  onBack: () => void
}

const attendanceData2025 = [
  { month: "APR", present: 23, absent: 3, leave: 0 },
  { month: "MAY", present: 24, absent: 0, leave: 3 },
  { month: "JUN", present: 25, absent: 0, leave: 1 },
  { month: "JUL", present: 26, absent: 0, leave: 0 },
  { month: "AUG", present: 23, absent: 3, leave: 0 },
  { month: "SEP", present: 23, absent: 3, leave: 0 },
  { month: "OCT", present: 23, absent: 3, leave: 0 },
  { month: "NOV", present: 23, absent: 3, leave: 0 },
  { month: "DEC", present: 23, absent: 3, leave: 0 },
]

const attendanceData2026 = [
  { month: "JAN", present: 23, absent: 3, leave: 0 },
]

const calendarData = {
  month: "March 2026",
  days: [
    { day: null }, { day: null }, { day: null }, { day: null }, { day: null }, { day: null },
    { day: 1, status: "present" },
    { day: 2, status: "present" },
    { day: 3, status: "absent" },
    { day: 4, status: "present" },
    { day: 5, status: "present" },
    { day: 6, status: "present" },
    { day: 7, status: "present" },
    { day: 8, status: "absent" },
    { day: 9, status: "present" },
    { day: 10, status: "present" },
    { day: 11, status: "present" },
    { day: 12, status: "present" },
    { day: 13, status: "present" },
    { day: 14, status: "present" },
    { day: 15, status: "absent" },
    { day: 16, status: "present" },
    { day: 17, status: "present" },
    { day: 18, status: "present" },
    { day: 19, status: "present" },
    { day: 20, status: "present" },
    { day: 21, status: "present" },
    { day: 22, status: "present" },
    { day: 23, status: "present" },
    { day: 24, status: "present" },
    { day: 25, status: "present" },
    { day: 26, status: "present" },
    { day: 27, status: "present" },
    { day: 28, status: "present" },
    { day: 29, status: "present" },
    { day: 30, status: "present" },
    { day: 31, status: "present" },
  ]
}

type ViewType = "yearly" | "monthly"

export function AttendanceScreen({ onBack }: AttendanceScreenProps) {
  const [year, setYear] = useState("2025")
  const [view, setView] = useState<ViewType>("yearly")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present": return "bg-[#E8F5E9] text-[#00C853]"
      case "absent": return "bg-[#FFEBEE] text-[#EF5350]"
      case "leave": return "bg-[#FFF3E0] text-[#FFB74D]"
      default: return ""
    }
  }

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-white font-semibold text-lg">Attendance</h1>
          </div>
          <button 
            onClick={() => setView(view === "yearly" ? "monthly" : "yearly")}
            className="flex items-center gap-1 text-white text-sm"
          >
            {year}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {view === "yearly" ? (
          <>
            {/* Year 2025 */}
            <div className="px-4 py-4">
              <h2 className="text-[#4A4A9E] font-semibold mb-3">Year 2025</h2>
              <div className="space-y-2">
                {attendanceData2025.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-12 h-8 bg-[#4A4A9E] text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {item.month}
                    </div>
                    <div className="flex-1 flex gap-2">
                      <div className="flex-1 bg-[#E8F5E9] rounded-lg py-2 px-3 text-center">
                        <span className="text-[#00C853] font-semibold">{item.present}</span>
                        <p className="text-[10px] text-[#00C853]">Present</p>
                      </div>
                      <div className="flex-1 bg-[#FFEBEE] rounded-lg py-2 px-3 text-center">
                        <span className="text-[#EF5350] font-semibold">{item.absent}</span>
                        <p className="text-[10px] text-[#EF5350]">Absent</p>
                      </div>
                      <div className="flex-1 bg-[#E3F2FD] rounded-lg py-2 px-3 text-center">
                        <span className="text-[#64B5F6] font-semibold">{item.leave}</span>
                        <p className="text-[10px] text-[#64B5F6]">Leave</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Year 2026 */}
            <div className="px-4 py-4">
              <h2 className="text-[#4A4A9E] font-semibold mb-3">Year 2026</h2>
              <div className="space-y-2">
                {attendanceData2026.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-12 h-8 bg-[#4A4A9E] text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {item.month}
                    </div>
                    <div className="flex-1 flex gap-2">
                      <div className="flex-1 bg-[#E8F5E9] rounded-lg py-2 px-3 text-center">
                        <span className="text-[#00C853] font-semibold">{item.present}</span>
                        <p className="text-[10px] text-[#00C853]">Present</p>
                      </div>
                      <div className="flex-1 bg-[#FFEBEE] rounded-lg py-2 px-3 text-center">
                        <span className="text-[#EF5350] font-semibold">{item.absent}</span>
                        <p className="text-[10px] text-[#EF5350]">Absent</p>
                      </div>
                      <div className="flex-1 bg-[#E3F2FD] rounded-lg py-2 px-3 text-center">
                        <span className="text-[#64B5F6] font-semibold">{item.leave}</span>
                        <p className="text-[10px] text-[#64B5F6]">Leave</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Monthly Calendar View */
          <div className="px-4 py-4">
            <h2 className="text-[#FD3667] font-semibold mb-3">{calendarData.month}</h2>
            
            {/* Days of week */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                <div key={index} className="text-center text-gray-400 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarData.days.map((item, index) => (
                <div 
                  key={index} 
                  className={`aspect-square flex items-center justify-center rounded-lg text-sm ${
                    item.day ? getStatusColor(item.status || "") : ""
                  }`}
                >
                  {item.day}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-[#00C853] font-semibold">23</span>
                <span className="text-[10px] text-gray-500">Present</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#EF5350] font-semibold">3</span>
                <span className="text-[10px] text-gray-500">Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#64B5F6] font-semibold">0</span>
                <span className="text-[10px] text-gray-500">Leave</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
