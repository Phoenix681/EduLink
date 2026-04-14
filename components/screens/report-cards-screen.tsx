"use client"

import { ArrowLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { UserProfile } from "./sign-up-screen"

interface ReportCardsScreenProps {
  onBack: () => void
  userProfile?: UserProfile
}

type ReportView = "list" | "detail"

const reportCards = [
  { id: 1, title: "Class 7th (2025-26)" },
  { id: 2, title: "Class 6th (2024-25)" },
  { id: 3, title: "Class 5th (2023-24)" },
  { id: 4, title: "Class 4th (2022-23)" },
  { id: 5, title: "Class 3rd (2021-22)" },
  { id: 6, title: "Class 2nd (2020-21)" },
]

const schoolInfo = {
  name: "Sanskriti School",
  address: "Dr. S. Radhakrishnan Marg\nChanakyapuri, Agra\nUttar Pradesh - 110021",
  logo: "/images/Sanskriti School20161111.png"
}

const attendanceData = {
  termI: { present: 235, total: 249 },
  termII: { present: 226, total: 249 }
}

const academicData = {
  termI: {
    subjects: [
      { name: "English", qtr1: "A+/96", qtr2: "A+/96", term: "A+/96" },
      { name: "Hindi", qtr1: "A/90", qtr2: "A/90", term: "A/90" },
      { name: "Mathematics", qtr1: "A-/94", qtr2: "A-/94", term: "A-/94" },
      { name: "Science", qtr1: "A+/96", qtr2: "A+/96", term: "A+/96" },
      { name: "Social Science", qtr1: "A/90", qtr2: "A/90", term: "A/90" },
      { name: "Sanskrit", qtr1: "A-/94", qtr2: "A-/94", term: "A-/94" },
    ],
    gpa: 4.21
  },
  termII: {
    subjects: [
      { name: "English", qtr1: "A+/96", qtr2: "A+/96", term: "A+/96" },
      { name: "Hindi", qtr1: "A/90", qtr2: "A/90", term: "A/90" },
      { name: "Mathematics", qtr1: "A-/94", qtr2: "A-/94", term: "A-/94" },
      { name: "Science", qtr1: "A+/96", qtr2: "A+/96", term: "A+/96" },
      { name: "Social Science", qtr1: "A/90", qtr2: "A/90", term: "A/90" },
      { name: "Sanskrit", qtr1: "A-/94", qtr2: "A-/94", term: "A-/94" },
    ],
    gpa: 4.21
  },
  final: {
    subjects: [
      { name: "English", grade: "A+/96" },
      { name: "Hindi", grade: "A/90" },
      { name: "Mathematics", grade: "A-/94" },
      { name: "Science", grade: "A+/96" },
      { name: "Social Science", grade: "A/90" },
      { name: "Sanskrit", grade: "A-/94" },
    ],
    gpa: 4.21
  }
}

const teacherRemarks = {
  text: "Thanks for a fantastic year at school this year! It's been awesome to see everyone grow and develop so much and our community has come together so wonderfully with all of our exciting new projects and activities. Hope you all have a fantastic summer - and looking forward to seeing everyone back in the fall.",
  teacher: "Viraj Mehta"
}

// Simple avatar SVG placeholder
function AvatarPlaceholder({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#E0E0E0" />
      <circle cx="24" cy="19" r="8" fill="#BDBDBD" />
      <ellipse cx="24" cy="38" rx="13" ry="8" fill="#BDBDBD" />
    </svg>
  )
}

// Purple double-line divider
function PurpleDivider() {
  return (
    <div className="w-full">
      <div className="h-0.75 bg-[#473F97] w-full" />
    </div>
  )
}

export function ReportCardsScreen({ onBack, userProfile }: ReportCardsScreenProps) {
  const [view, setView] = useState<ReportView>("list")
  const [selectedCard, setSelectedCard] = useState<typeof reportCards[0] | null>(null)

  const studentProfile = userProfile ? {
    name: userProfile.name,
    class: `Class ${userProfile.className}${userProfile.section ? userProfile.section : ""}`,
    rollNumber: userProfile.rollNumber,
    dateOfBirth: userProfile.dob,
    bloodGroup: userProfile.bloodGroup,
    emergencyContact: userProfile.emergencyContact,
    positionInClass: "7th",
    fatherName: userProfile.fatherName,
    motherName: userProfile.motherName
  } : {
    name: "Mayank Mittal",
    class: "Class 7th D",
    rollNumber: "035",
    dateOfBirth: "10 Oct 1996",
    bloodGroup: "B+",
    emergencyContact: "+91 8290229190",
    positionInClass: "7th",
    fatherName: "Mr. Vansh",
    motherName: "Mrs. Narang"
  }

  const viewReport = (card: typeof reportCards[0]) => {
    setSelectedCard(card)
    setView("detail")
  }

  if (view === "detail" && selectedCard) {
    return (
      <div className="h-full w-full flex flex-col bg-white">
        {/* Header */}
        <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("list")} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-white font-semibold text-lg">{selectedCard.title}</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">

          {/* School Info — bigger logo + text */}
          <div className="flex items-center gap-4 p-4">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={schoolInfo.logo}
                alt={schoolInfo.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#473F97] font-bold text-lg leading-tight">{schoolInfo.name}</h2>
              <p className="text-black text-sm whitespace-pre-line leading-snug mt-1">{schoolInfo.address}</p>
            </div>
          </div>

          {/* Performance Profile — purple double lines top & bottom */}
          <div className="px-4 pt-3">
            <PurpleDivider />
          </div>
          <div className="text-center py-2">
            <span className="text-[#473F97] font-semibold text-sm uppercase tracking-wide">
              Performance Profile
            </span>
          </div>
          <div className="px-4 pb-3">
            <PurpleDivider />
          </div>

          {/* Student Avatar + Name (no grey line under, general avatar) */}
          <div className="flex items-center gap-3 px-4 pt-4 pb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <AvatarPlaceholder size={48} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{studentProfile.name}</h3>
              <p className="text-gray-500 text-sm">{studentProfile.class}</p>
            </div>
          </div>

          {/* Student Details — grey dividers between each row */}
          <div className="px-4 py-1">
            {[
              { label: "Roll Number", value: studentProfile.rollNumber, color: "text-[#473F97]" },
              { label: "Date of Birth", value: studentProfile.dateOfBirth, color: "text-[#473F97]" },
              { label: "Blood Group", value: studentProfile.bloodGroup, color: "text-[#473F97]" },
              { label: "Emergency Contact", value: studentProfile.emergencyContact, color: "text-[#473F97]" },
              { label: "Position in Class", value: studentProfile.positionInClass, color: "text-[#473F97]" },
              { label: "Father's Name", value: studentProfile.fatherName, color: "text-[#473F97]" },
              { label: "Mother's Name", value: studentProfile.motherName, color: "text-[#473F97]" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between py-2">
                  <span className="text-black text-sm">{item.label}</span>
                  <span className={`text-sm font-medium ${item.color}`}>{item.value}</span>
                </div>
                {/* Grey divider under each row */}
                <div className="h-[1px] bg-gray-200 w-full" />
              </div>
            ))}
          </div>

          {/* Attendance — purple double lines top & bottom, centered text */}
          <div className="px-4 pt-4">
            <PurpleDivider />
          </div>
          <div className="text-center py-2">
            <span className="text-[#473F97] font-semibold text-sm uppercase tracking-wide">
              Attendance
            </span>
          </div>
          <div className="px-4">
            <PurpleDivider />
          </div>

          <div className="px-4 py-4 space-y-3">
            <div>
              <p className="text-black text-sm mb-1 text-left font-medium">Term I</p>
              <div className="bg-[#D4FFEA] rounded-lg py-3 px-4 text-center">
                <span className="text-[#12B264] font-bold block">
                  {attendanceData.termI.present} / {attendanceData.termI.total} Days
                </span>
                <p className="text-[#12B264] text-xs">Total attendance of the student</p>
              </div>
            </div>
            <div>
              <p className="text-black text-sm mb-1 text-left font-medium">Term II</p>
              <div className="bg-[#D4FFEA] rounded-lg py-3 px-4 text-center">
                <span className="text-[#12B264] font-bold block">
                  {attendanceData.termII.present} / {attendanceData.termII.total} Days
                </span>
                <p className="text-[#12B264] text-xs">Total attendance of the student</p>
              </div>
            </div>
          </div>

          {/* Academic Performance — purple double lines top & bottom */}
          <div className="px-4">
            <PurpleDivider />
          </div>
          <div className="text-center py-2">
            <span className="text-[#473F97] font-semibold text-sm uppercase tracking-wide">
              Academic Performance
            </span>
          </div>
          <div className="px-4">
            <PurpleDivider />
          </div>

          <div className="px-4 py-4">

            {/* Term I */}
            <div className="mb-6">
              <p className="text-balck font-light mb-2">Term I</p>
              {/* Grey background table */}
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-black ">
                      <th className="text-left py-2 px-3">Subject</th>
                      <th className="text-center py-2 px-2">Qtr 1</th>
                      <th className="text-center py-2 px-2">Qtr 2</th>
                      <th className="text-center py-2 px-2">Term I</th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicData.termI.subjects.map((subject, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-[#FFFFFF]/50" : "bg-[#E8EAEC]"}>
                        <td className="py-2 px-3 text-[#473F97] font-bold">{subject.name}</td>
                        <td className="py-2 px-2 text-center text-gray-600">{subject.qtr1}</td>
                        <td className="py-2 px-2 text-center text-gray-600">{subject.qtr2}</td>
                        <td className="py-2 px-2 text-center font-semibold text-gray-800">{subject.term}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[#FD3667] font-bold mr-9">GPA</span>
                <span className="text-[#FD3667] font-bold mr-5">{academicData.termI.gpa}</span>
              </div>
            </div>

            {/* Term II */}
            <div className="mb-6">
              <p className="text-black text-sm mb-2">Term II</p>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-black">
                      <th className="text-left py-2 px-3">Subject</th>
                      <th className="text-center py-2 px-2">Qtr 1</th>
                      <th className="text-center py-2 px-2">Qtr 2</th>
                      <th className="text-center py-2 px-2">Term II</th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicData.termII.subjects.map((subject, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-[#FFFFFF]/50" : "bg-[#E8EAEC]"}>
                        <td className="py-2 px-3 text-[#473F97] font-bold">{subject.name}</td>
                        <td className="py-2 px-2 text-center text-black">{subject.qtr1}</td>
                        <td className="py-2 px-2 text-center text-black">{subject.qtr2}</td>
                        <td className="py-2 px-2 text-center font-semibold text-gray-800">{subject.term}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[#FD3667] font-bold mr-9">GPA</span>
                <span className="text-[#FD3667] font-bold mr-5">{academicData.termII.gpa}</span>
              </div>
            </div>

            {/* Final */}
            <div>
              <p className="text-balck text-sm mb-2">Final</p>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-black">
                      <th className="text-left py-2 px-3">Subject</th>
                      <th className="text-right py-2 px-3">Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicData.final.subjects.map((subject, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-[#FFFFFF]/50" : "bg-[#E8EAEC]"}>
                        <td className="py-2 px-3 text-[#473F97] font-bold">{subject.name}</td>
                        <td className="py-2 px-3 text-right font-semibold text-gray-800">{subject.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[#FD3667] font-bold mr-9">GPA</span>
                <span className="text-[#FD3667] font-bold mr-5">{academicData.final.gpa}</span>
              </div>
            </div>
          </div>

          {/* Teacher Remarks */}
          <div className="px-4 py-4">
            <h3 className="text-gray-800 font-semibold text-sm mb-2">Remarks by Teacher</h3>
            <div className="bg-[#FFE9D4] rounded-lg p-4">
              <p className="text-[#B98757] text-sm leading-relaxed">{teacherRemarks.text}</p>
            </div>
            <p className="text-[#FD3667] text-bold mt-2">- {teacherRemarks.teacher}</p>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-semibold text-lg">Report Cards</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {reportCards.map((card) => (
          <button
            key={card.id}
            onClick={() => viewReport(card)}
            className="w-full flex items-center justify-between px-4 py-4 border-b border-gray-100"
          >
            <span className="text-gray-800 font-medium">{card.title}</span>
            <ChevronRight className="w-5 h-5 text-[#4A4A9E]" />
          </button>
        ))}
      </div>
    </div>
  )
}