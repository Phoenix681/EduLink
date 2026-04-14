"use client"

import { ArrowLeft, ChevronDown } from "lucide-react"

interface AppHeaderProps {
  title: string
  onBack?: () => void
  rightContent?: React.ReactNode
  variant?: "purple" | "white"
}

export function AppHeader({ title, onBack, rightContent, variant = "purple" }: AppHeaderProps) {
  const bgClass = variant === "purple" 
    ? "bg-[#4A4A9E]" 
    : "bg-white"
  const textClass = variant === "purple" 
    ? "text-white" 
    : "text-[#4A4A9E]"

  return (
    <div className={`${bgClass} pt-12 pb-4 px-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button onClick={onBack} className={`${textClass}`}>
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className={`text-lg font-semibold ${textClass}`}>{title}</h1>
        </div>
        {rightContent && <div>{rightContent}</div>}
      </div>
    </div>
  )
}

interface AppHeaderWithYearProps extends AppHeaderProps {
  year: string
  onYearChange?: () => void
}

export function AppHeaderWithYear({ title, onBack, year, onYearChange, variant = "purple" }: AppHeaderWithYearProps) {
  const bgClass = variant === "purple" 
    ? "bg-[#4A4A9E]" 
    : "bg-white"
  const textClass = variant === "purple" 
    ? "text-white" 
    : "text-[#4A4A9E]"

  return (
    <div className={`${bgClass} pt-12 pb-4 px-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button onClick={onBack} className={`${textClass}`}>
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className={`text-lg font-semibold ${textClass}`}>{title}</h1>
        </div>
        <button 
          onClick={onYearChange}
          className={`flex items-center gap-1 ${textClass} text-sm`}
        >
          {year}
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
