"use client"

import { ArrowLeft, User } from "lucide-react"
import { UserProfile } from "./sign-up-screen"

interface ProfileScreenProps {
  userProfile: UserProfile
  onBack: () => void
}

export function ProfileScreen({ userProfile, onBack }: ProfileScreenProps) {
  const profileDetails = [
    { label: "Roll Number", value: userProfile.rollNumber, color: "text-[#4A4A9E]" },
    { label: "Date of Birth", value: userProfile.dob, color: "text-[#FD3667]" },
    { label: "Blood Group", value: userProfile.bloodGroup, color: "text-[#4A4A9E]" },
    { label: "Emergency Contact", value: userProfile.emergencyContact, color: "text-[#4A4A9E]" },
    { label: "Father's Name", value: userProfile.fatherName, color: "text-[#FD3667]" },
    { label: "Mother's Name", value: userProfile.motherName, color: "text-[#FD3667]" },
  ]

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Purple header section */}
      <div className="bg-[#4A4A9E] pt-12 pb-20 px-4 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-40 h-40 border border-white rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border border-white rounded-full translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <button onClick={onBack} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-white font-semibold text-lg">Profile</h1>
          </div>
          
          {/* Profile Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center border-4 border-white shadow-lg">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-white text-xl font-semibold mt-4">{userProfile.name}</h2>
            <p className="text-white/70 text-sm">{`${userProfile.className} ${userProfile.section}`}</p>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="flex-1 overflow-auto px-4 mt-0">
        <div className="bg-white rounded-xl shadow-sm">
          {profileDetails.map((item, index) => (
            <div 
              key={index}
              className={`flex justify-between py-4 px-4 ${
                index !== profileDetails.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span className="text-gray-500">{item.label}</span>
              <span className={`font-medium ${item.color}`}>{item.value}</span>
            </div>
          ))}
        </div>
        
        {/* Ask for Update Button */}
        <div className="py-6">
          <button 
            onClick={() => alert("Request sent to school admin")}
            className="w-full bg-[#FD3667] text-white py-4 rounded-full font-semibold"
          >
            Ask for Update
          </button>
        </div>
      </div>
    </div>
  )
}
