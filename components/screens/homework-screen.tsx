"use client"

import { ArrowLeft, Check } from "lucide-react"
import { useState } from "react"

interface HomeworkScreenProps {
  onBack: () => void
}

const initialHomeworkData = {
  "Today": [
    {
      id: 1,
      title: "Learn Chapter 5 with one Essay",
      subject: "English",
      date: "Today",
      completed: false
    },
    {
      id: 2,
      title: "Exercise Trigonometry 1st topic",
      subject: "Maths",
      date: "",
      completed: true
    },
    {
      id: 3,
      title: "Hindi writing 3 pages",
      subject: "Hindi",
      date: "",
      completed: true
    },
    {
      id: 4,
      title: "Test for History first session",
      subject: "Social Science",
      date: "",
      completed: false
    }
  ],
  "Yesterday": [
    {
      id: 5,
      title: "Learn Chapter 5 with one Essay",
      subject: "English",
      date: "Today",
      completed: false
    },
    {
      id: 6,
      title: "Exercise Trigonometry 1st topic",
      subject: "Maths",
      date: "",
      completed: true
    }
  ],
  "04 April 2026": [
    {
      id: 7,
      title: "Learn Chapter 5 with one Essay",
      subject: "English",
      date: "",
      completed: false
    },
    {
      id: 8,
      title: "Exercise Trigonometry 1st topic",
      subject: "Maths",
      date: "",
      completed: true
    }
  ],
  "02 April 2026": [
    {
      id: 9,
      title: "Learn Chapter 5 with one Essay",
      subject: "English",
      date: "",
      completed: false
    },
    {
      id: 10,
      title: "Exercise Trigonometry 1st topic",
      subject: "Maths",
      date: "",
      completed: true
    }
  ]
}

export function HomeworkScreen({ onBack }: HomeworkScreenProps) {
  const [homeworkData, setHomeworkData] = useState(initialHomeworkData)

  const toggleComplete = (date: string, id: number) => {
    setHomeworkData(prev => ({
      ...prev,
      [date]: prev[date as keyof typeof prev].map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    }))
  }

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-light text-lg">Homework</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        {Object.entries(homeworkData).map(([date, items]) => (
          <div key={date} className="mb-6">
            <h2 className="text-[#4A4A9E] font-light mb-3">{date}</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[#FFF1EC]"
                >
                  <button 
                    onClick={() => toggleComplete(date, item.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      item.completed 
                        ? "bg-[#473F97] border-[#473F97]" 
                        : "border-[#707070]"
                    }`}
                  >
                    {item.completed && <Check className="w-4 h-4 text-white" />}
                  </button>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#a2a0a0]">{item.subject}</span>
                      {item.date && (
                        <>
                          <span className="text-gray-400">/</span>
                          <span className="text-[#a2a0a0]">{item.date}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
