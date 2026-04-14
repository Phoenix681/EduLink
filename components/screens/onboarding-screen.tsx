"use client"

import { useState } from "react"
import { ChevronRight, Check } from "lucide-react"
import Image from "next/image"

interface OnboardingScreenProps {
  onComplete: () => void
}

const onboardingSlides = [
  {
    title: "Mark Homework\nas completed",
    bgColor: "bg-[#FFE8D6]",
    image: "/images/onboarding-1.jpg"
  },
  {
    title: "Rectify your\nAttendance",
    bgColor: "bg-[#B8E8F5]",
    image: "/images/onboarding-2.jpg"
  },
  {
    title: "Student Exam\n& Report Cards",
    bgColor: "bg-[#FFD6D6]",
    image: "/images/onboarding-3.jpg"
  }
]

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  const slide = onboardingSlides[currentSlide]
  const isLastSlide = currentSlide === onboardingSlides.length - 1

  return (
    <div className={`h-full w-full flex flex-col ${slide.bgColor}`}>
      {/* Skip status bar area */}
      <div className="pt-14"></div>
      
      {/* Title */}
      <div className="px-8 pt-8">
        <h1 className="text-2xl font-bold text-[#1a1a2e] whitespace-pre-line leading-tight">
          {slide.title}
        </h1>
      </div>
      
      {/* Image container */}
      <div className="flex-1 flex items-center justify-center px-8 py-8">
        <div className="relative w-full h-full max-h-[400px]">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Navigation button */}
      <div className="flex justify-center pb-12">
        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-full bg-[#4A4A9E] flex items-center justify-center shadow-lg"
        >
          {isLastSlide ? (
            <Check className="w-6 h-6 text-white" />
          ) : (
            <ChevronRight className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 pb-8">
        {onboardingSlides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-[#4A4A9E]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
