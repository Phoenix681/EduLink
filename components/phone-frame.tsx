"use client"

import { ReactNode } from "react"

interface PhoneFrameProps {
  children: ReactNode
  showStatusBar?: boolean
}

export function PhoneFrame({ children, showStatusBar = true }: PhoneFrameProps) {
  return (
    <div className="relative w-full max-w-[375px] h-[812px] bg-background rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-gray-800">
      {/* Status bar */}
      {showStatusBar && (
        <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 z-50">
          <span className="text-sm font-medium text-white">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l10.79 10.79c.18.18.43.29.71.29.28 0 .53-.11.71-.29l10.79-10.79c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z"/>
            </svg>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 22h20V2z"/>
            </svg>
            <div className="flex items-center">
              <div className="w-6 h-3 border border-white rounded-sm flex items-center justify-end pr-0.5">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Content */}
      <div className="h-full overflow-auto">
        {children}
      </div>
    </div>
  )
}
