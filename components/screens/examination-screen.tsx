"use client"

import { ArrowLeft, Clock, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ExaminationScreenProps {
  onBack: () => void
}

type ExamView = "list" | "exam"

const exams = [
  {
    id: 1,
    title: "Science Basic Assessment Test",
    duration: "30 Min",
    status: "start",
    score: null
  },
  {
    id: 2,
    title: "General Knowledge Level IV",
    duration: "30 Min",
    status: "completed",
    score: "40/200"
  },
  {
    id: 3,
    title: "Math Super 20 Exam",
    duration: "30 Min",
    status: "start",
    score: null
  },
  {
    id: 4,
    title: "General Knowledge Level III",
    duration: "30 Min",
    status: "completed",
    score: "40/200"
  },
  {
    id: 5,
    title: "English Basic Assessment Test",
    duration: "30 Min",
    status: "start",
    score: null
  },
  {
    id: 6,
    title: "General Knowledge Level II",
    duration: "30 Min",
    status: "start",
    score: null
  },
]

const examQuestions = [
  {
    id: 1,
    question: "Plants prepare their own food using sunlight, carbon dioxide, and water. What is this process called?",
    marks: 2,
    options: ["Respiration", "Transpiration", "Digestion", "Photosynthesis", "Rumination"]
  },
  {
    id: 2,
    question: "During which of the following processes is a new substance formed, making it a chemical change?",
    marks: 2,
    options: ["Cutting paper", "Melting wax", "Rusting of iron", "Breaking of glass"]
  },
  {
    id: 3,
    question: "Which part of the human digestive system is mainly responsible for absorption of nutrients from digested food?",
    marks: 2,
    options: ["Stomach", "Small intestine", "Large intestine", "Food pipe"]
  }
]

export function ExaminationScreen({ onBack }: ExaminationScreenProps) {
  const [view, setView] = useState<ExamView>("list")
  const [currentExam, setCurrentExam] = useState<typeof exams[0] | null>(null)
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({})

  const startExam = (exam: typeof exams[0]) => {
    setCurrentExam(exam)
    setView("exam")
  }

  if (view === "exam" && currentExam) {
    return (
      <div className="h-full w-full flex flex-col bg-white">
        {/* Header */}
        <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setView("list")} className="text-white">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-white font-semibold text-lg">General Knowledge...</h1>
            </div>
            <span className="text-white text-sm">1/30</span>
          </div>
        </div>

        {/* Exam Info */}
        <div className="px-4 py-3 flex justify-between items-center border-b border-gray-100">
          <span className="text-gray-500 text-sm">Exam Code: 121</span>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            30 Min
          </div>
        </div>

        {/* Questions */}
        <div className="flex-1 overflow-auto px-4 py-4">
          {examQuestions.map((q, index) => (
            <div key={q.id} className="mb-6">
              <h3 className="text-[#FD3667] font-semibold mb-2">
                Question {index + 1} ({q.marks} Marks)
              </h3>
              <p className="text-gray-700 mb-4 bg-gray-50 p-3 rounded-lg border-l-4 border-gray-200">
                {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedAnswers({...selectedAnswers, [q.id]: option})}
                    className={`w-full flex items-center gap-3 py-3 px-4 rounded-lg border ${
                      selectedAnswers[q.id] === option
                        ? "border-[#4A4A9E] bg-[#F5F5FF]"
                        : "border-gray-200"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[q.id] === option
                        ? "border-[#4A4A9E]"
                        : "border-gray-300"
                    }`}>
                      {selectedAnswers[q.id] === option && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#4A4A9E]"></div>
                      )}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="p-4">
          <button 
            onClick={() => setView("list")}
            className="w-full bg-[#FD3667] text-white py-4 rounded-full font-semibold"
          >
            Submit
          </button>
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
          <h1 className="text-white font-semibold text-lg">Home Tests</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="px-4 py-4">
          <h2 className="text-[#4A4A9E] font-semibold mb-3">Examination List</h2>
          
          <div className="space-y-4">
            {exams.map((exam) => (
              <div 
                key={exam.id}
                className="border-b border-gray-100 pb-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{exam.title}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                      <Clock className="w-3 h-3" />
                      Duration: {exam.duration}
                    </div>
                    {exam.score && (
                      <p className="text-gray-500 text-sm">Score: {exam.score}</p>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="mt-2">
                  {exam.status === "completed" ? (
                    <span className="px-3 py-1 bg-[#00C853] text-white text-xs rounded-full">
                      Completed
                    </span>
                  ) : (
                    <button 
                      onClick={() => startExam(exam)}
                      className="px-3 py-1 bg-[#FD3667] text-white text-xs rounded-full"
                    >
                      Start Test
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
