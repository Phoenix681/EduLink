"use client"

import { ArrowLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface ReportCardsScreenProps {
  onBack: () => void
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

const studentProfile = {
  name: "Mayank Mittal",
  class: "Class 7th D",
  avatar: "/images/avatar.jpg",
  rollNumber: "035",
  dateOfBirth: "10 Oct 1996",
  bloodGroup: "B+",
  emergencyContact: "+91 8290229190",
  positionInClass: "7th",
  fatherName: "Mr. Vansh",
  motherName: "Mrs. Narang"
}

const schoolInfo = {
  name: "Sanskriti School",
  address: "Dr. S. Radhakrishnan Marg\nChanakyapuri, Agra\nUttar Pradesh - 110021",
  logo: "/images/school-logo.jpg"
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

export function ReportCardsScreen({ onBack }: ReportCardsScreenProps) {
  const [view, setView] = useState<ReportView>("list")
  const [selectedCard, setSelectedCard] = useState<typeof reportCards[0] | null>(null)

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
          {/* School Info */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-100">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={schoolInfo.logo}
                alt={schoolInfo.name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#00C853] font-semibold">{schoolInfo.name}</h2>
              <p className="text-gray-500 text-xs whitespace-pre-line">{schoolInfo.address}</p>
            </div>
          </div>

          {/* Performance Profile Header */}
          <div className="text-center py-3 border-b border-gray-100">
            <span className="text-[#4A4A9E] font-semibold text-sm uppercase tracking-wide">
              Performance Profile
            </span>
          </div>

          {/* Student Info */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={studentProfile.avatar}
                alt={studentProfile.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{studentProfile.name}</h3>
              <p className="text-gray-500 text-sm">{studentProfile.class}</p>
            </div>
          </div>

          {/* Student Details */}
          <div className="px-4 py-2 border-b border-gray-100">
            {[
              { label: "Roll Number", value: studentProfile.rollNumber, color: "text-[#4A4A9E]" },
              { label: "Date of Birth", value: studentProfile.dateOfBirth, color: "text-gray-800" },
              { label: "Blood Group", value: studentProfile.bloodGroup, color: "text-[#FD3667]" },
              { label: "Emergency Contact", value: studentProfile.emergencyContact, color: "text-gray-800" },
              { label: "Position in Class", value: studentProfile.positionInClass, color: "text-[#4A4A9E]" },
              { label: "Father's Name", value: studentProfile.fatherName, color: "text-[#FD3667]" },
              { label: "Mother's Name", value: studentProfile.motherName, color: "text-[#FD3667]" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between py-2">
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className={`text-sm font-medium ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Attendance */}
          <div className="px-4 py-4 border-b border-gray-100">
            <h3 className="text-center text-[#4A4A9E] font-semibold text-sm uppercase tracking-wide mb-4">
              Attendance
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-sm mb-1">Term I</p>
                <div className="bg-[#E8F5E9] rounded-lg py-2 px-4">
                  <span className="text-[#00C853] font-bold">
                    {attendanceData.termI.present} / {attendanceData.termI.total} Days
                  </span>
                  <p className="text-[#00C853] text-xs">Total attendance of the student</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Term II</p>
                <div className="bg-[#FFF3E0] rounded-lg py-2 px-4">
                  <span className="text-[#FFB74D] font-bold">
                    {attendanceData.termII.present} / {attendanceData.termII.total} Days
                  </span>
                  <p className="text-[#FFB74D] text-xs">Total attendance of the student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Performance */}
          <div className="px-4 py-4 border-b border-gray-100">
            <h3 className="text-center text-[#4A4A9E] font-semibold text-sm uppercase tracking-wide mb-4">
              Academic Performance
            </h3>
            
            {/* Term I */}
            <div className="mb-6">
              <p className="text-gray-500 text-sm mb-2">Term I</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500">
                    <th className="text-left py-1">Subject</th>
                    <th className="text-center py-1">Qtr 1</th>
                    <th className="text-center py-1">Qtr 2</th>
                    <th className="text-center py-1">Term I</th>
                  </tr>
                </thead>
                <tbody>
                  {academicData.termI.subjects.map((subject, index) => (
                    <tr key={index}>
                      <td className="py-1 text-[#FD3667]">{subject.name}</td>
                      <td className="py-1 text-center text-gray-600">{subject.qtr1}</td>
                      <td className="py-1 text-center text-gray-600">{subject.qtr2}</td>
                      <td className="py-1 text-center font-semibold text-gray-800">{subject.term}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-2">
                <span className="text-[#FD3667] mr-2">GPA</span>
                <span className="text-[#4A4A9E] font-bold">{academicData.termI.gpa}</span>
              </div>
            </div>

            {/* Term II */}
            <div className="mb-6">
              <p className="text-gray-500 text-sm mb-2">Term II</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500">
                    <th className="text-left py-1">Subject</th>
                    <th className="text-center py-1">Qtr 1</th>
                    <th className="text-center py-1">Qtr 2</th>
                    <th className="text-center py-1">Term II</th>
                  </tr>
                </thead>
                <tbody>
                  {academicData.termII.subjects.map((subject, index) => (
                    <tr key={index}>
                      <td className="py-1 text-[#FD3667]">{subject.name}</td>
                      <td className="py-1 text-center text-gray-600">{subject.qtr1}</td>
                      <td className="py-1 text-center text-gray-600">{subject.qtr2}</td>
                      <td className="py-1 text-center font-semibold text-gray-800">{subject.term}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-2">
                <span className="text-[#FD3667] mr-2">GPA</span>
                <span className="text-[#4A4A9E] font-bold">{academicData.termII.gpa}</span>
              </div>
            </div>

            {/* Final */}
            <div>
              <p className="text-gray-500 text-sm mb-2">Final</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500">
                    <th className="text-left py-1">Subject</th>
                    <th className="text-right py-1">Final</th>
                  </tr>
                </thead>
                <tbody>
                  {academicData.final.subjects.map((subject, index) => (
                    <tr key={index}>
                      <td className="py-1 text-[#FD3667]">{subject.name}</td>
                      <td className="py-1 text-right font-semibold text-gray-800">{subject.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-2">
                <span className="text-[#FD3667] mr-2">GPA</span>
                <span className="text-[#4A4A9E] font-bold">{academicData.final.gpa}</span>
              </div>
            </div>
          </div>

          {/* Teacher Remarks */}
          <div className="px-4 py-4">
            <h3 className="text-gray-800 font-semibold text-sm mb-2">Remarks by Teacher</h3>
            <div className="bg-[#FFF8E1] rounded-lg p-4">
              <p className="text-gray-600 text-sm leading-relaxed">{teacherRemarks.text}</p>
            </div>
            <p className="text-[#FD3667] text-sm mt-2">- {teacherRemarks.teacher}</p>
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
