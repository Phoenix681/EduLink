"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"

interface NoticeBoardScreenProps {
  onBack: () => void
}

const notices = [
  {
    id: 1,
    title: "School is going for vacation in next month",
    date: "02 May 2026",
    image: "/images/notice-vacation.jpg",
    bgColor: "bg-[#FFEBEE]"
  },
  {
    id: 2,
    title: "Summer Book Fair at School Campus in June",
    date: "19 June 2026",
    image: "/images/notice-bookfair.jpg",
    bgColor: "bg-[#E3F2FD]"
  },
  {
    id: 3,
    title: "Classes Resume After Summer Break",
    date: "24 July 2026",
    image: "/images/notice-reading.jpg",
    bgColor: "bg-[#FFF3E0]"
  },
  {
    id: 4,
    title: "Annual Reading Week Begins",
    date: "11 Aug 2026",
    image: "/images/notice-bookfair.jpg",
    bgColor: "bg-[#E8F5E9]"
  },
  {
    id: 5,
    title: "Exams & Viva Timetable Announcement",
    date: "18 Sept 2026",
    image: "/images/notice-vacation.jpg",
    bgColor: "bg-[#FCE4EC]"
  },
  {
    id: 6,
    title: "Planning the field trip to the animal zoo",
    date: "28 Sept 2026",
    image: "/images/notice-zoo.jpg",
    bgColor: "bg-[#E3F2FD]"
  },
  {
    id: 7,
    title: "Ganesh Chaturthi Break Commencement",
    date: "25 Sept 2026",
    image: "/images/notice-festival.jpg",
    bgColor: "bg-[#FFF8E1]"
  }
]

export function NoticeBoardScreen({ onBack }: NoticeBoardScreenProps) {
  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-semibold text-lg">Notice Board</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`${notice.bgColor} rounded-xl p-3`}
            >
              <div className="w-full h-16 rounded-lg overflow-hidden mb-2">
                <Image
                  src={notice.image}
                  alt={notice.title}
                  width={150}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-medium text-gray-800 leading-tight mb-1">
                {notice.title}
              </p>
              <p className="text-xs text-[#FD3667]">{notice.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
