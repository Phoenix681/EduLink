"use client"

import { useState } from "react"
import { GraduationCap, Eye, EyeOff, User, Book, Hash, Calendar, Droplet, Phone, Award } from "lucide-react"

export interface UserProfile {
  name: string
  className: string
  section: string
  rollNumber: string
  dob: string
  bloodGroup: string
  emergencyContact: string
  fatherName: string
  motherName: string
}

interface SignUpScreenProps {
  onSignUp: (profile: UserProfile) => void
}

export function SignUpScreen({ onSignUp }: SignUpScreenProps) {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    className: "",
    section: "",
    rollNumber: "",
    dob: "",
    bloodGroup: "",
    emergencyContact: "",
    fatherName: "",
    motherName: "",
  })
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleSignUp = () => {
    onSignUp(profile)
  }

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Purple header section */}
      <div className="bg-[#4A4A9E] pt-12 pb-10 px-8 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 border border-white rounded-full"></div>
        </div>
        
        {/* Logo */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center">
            <GraduationCap className="w-16 h-16 text-[#FD3667]" strokeWidth={1.5} />
          </div>
          <span className="text-[#FD3667] text-xl font-semibold mt-2">EduSetu</span>
          <h1 className="text-white text-2xl font-semibold mt-4">Sign Up</h1>
        </div>
      </div>

      {/* Form section */}
      <div className="flex-1 px-8 pt-6 overflow-y-auto">
        {/* Name */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Full Name</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <User className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="John Doe"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Class */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Class</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <Book className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={profile.className}
              onChange={(e) => handleInputChange("className", e.target.value)}
              placeholder="e.g., 10"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Section */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Section</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <Hash className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={profile.section}
              onChange={(e) => handleInputChange("section", e.target.value)}
              placeholder="e.g., A"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Roll Number */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Roll Number</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <Hash className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={profile.rollNumber}
              onChange={(e) => handleInputChange("rollNumber", e.target.value)}
              placeholder="e.g., 035"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Date of Birth</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <Calendar className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={profile.dob}
              onChange={(e) => handleInputChange("dob", e.target.value)}
              placeholder="e.g., 25 April 2004"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Blood Group */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Blood Group</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <Droplet className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={profile.bloodGroup}
              onChange={(e) => handleInputChange("bloodGroup", e.target.value)}
              placeholder="e.g., B+"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Emergency Contact</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <Phone className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="tel"
              value={profile.emergencyContact}
              onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
              placeholder="+91 8290229190"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Father's Name */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Father's Name</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <User className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={profile.fatherName}
              onChange={(e) => handleInputChange("fatherName", e.target.value)}
              placeholder="Mr. Vansh"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Mother's Name */}
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-2 block">Mother's Name</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <User className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={profile.motherName}
              onChange={(e) => handleInputChange("motherName", e.target.value)}
              placeholder="Mrs. Narang"
              className="flex-1 text-lg text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-gray-500 text-sm mb-2 block">Password</label>
          <div className="flex items-center border-b border-gray-200 pb-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 text-lg outline-none"
            />
            <button 
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          className="w-full bg-[#FD3667] text-white py-4 rounded-full font-semibold text-lg mb-4"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
