"use client"

import { X, User, LogOut } from "lucide-react"
import Image from "next/image"

interface MenuScreenProps {
  userName: string
  userClass: string
  onClose: () => void
  onNavigate: (screen: string) => void
}

const menuItems = [
  { id: "dashboard", icon: "/Dashboard icon.png", label: "Dashboard" },
  { id: "homework", icon: "/Homework icon.png", label: "Homework" },
  { id: "attendance", icon: "/Attendance icon.png", label: "Attendance" },
  { id: "fee-details", icon: "/fee icon.png", label: "Fee Details" },
  { id: "examination", icon: "/examination icon.png", label: "Examination" },
  { id: "report-cards", icon: "/report card icon.png", label: "Report Cards" },
  { id: "calendar", icon: "/calendar icon.png", label: "Calendar" },
  { id: "notice-board", icon: "/notice board icon.png", label: "Notice Board" },
  { id: "multimedia", icon: "/mutlimedia icon.png", label: "Multimedia" },
  { id: "academic-year", icon: "/academic year icon.png", label: "Academic Year" },
  { id: "profile", icon: "/profile icon.png", label: "Profile" },
]

export function MenuScreen({ userName, userClass, onClose, onNavigate }: MenuScreenProps) {
  const handleNavigate = (screenId: string) => {
    onNavigate(screenId)
  }

  return (
    <div className="h-full w-full flex flex-col bg-[#473F97]">
      {/* Purple header section */}
      <div className="bg-[#473F97] pt-12 pb-4 px-4 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-40 h-40 border border-white rounded-full -translate-y-1/2 translate-x-1/4"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-semibold text-lg">{userName}</h1>
              <p className="text-white/70 text-sm">{userClass}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="flex flex-col items-center gap-2 p-3"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <Image src={item.icon} alt={item.label} width={32} height={32} />
              </div>
              <span className="text-xs text-white text-center leading-tight">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="p-6">
        <button 
          onClick={() => onNavigate("logout")}
          className="flex items-center justify-center gap-2 text-white w-full"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
