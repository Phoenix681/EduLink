"use client"

import { useState } from "react"
import { SplashScreen } from "@/components/screens/splash-screen"
import { OnboardingScreen } from "@/components/screens/onboarding-screen"
import { SignUpScreen, UserProfile } from "@/components/screens/sign-up-screen"
import { DashboardScreen } from "@/components/screens/dashboard-screen"
import { MenuScreen } from "@/components/screens/menu-screen"
import { HomeworkScreen } from "@/components/screens/homework-screen"
import { CalendarScreen } from "@/components/screens/calendar-screen"
import { FeeDetailsScreen } from "@/components/screens/fee-details-screen"
import { AttendanceScreen } from "@/components/screens/attendance-screen"
import { AcademicYearScreen } from "@/components/screens/academic-year-screen"
import { ExaminationScreen } from "@/components/screens/examination-screen"
import { NoticeBoardScreen } from "@/components/screens/notice-board-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"
import { ReportCardsScreen } from "@/components/screens/report-cards-screen"

type Screen = 
  | "splash"
  | "onboarding"
  | "sign-up"
  | "dashboard"
  | "menu"
  | "homework"
  | "calendar"
  | "fee-details"
  | "attendance"
  | "academic-year"
  | "examination"
  | "notice-board"
  | "profile"
  | "report-cards"
  | "multimedia"

const initialProfile: UserProfile = {
  name: "Mayank Mittal",
  className: "10",
  section: "A",
  rollNumber: "035",
  dob: "25 April 2004",
  bloodGroup: "B+",
  emergencyContact: "+91 8290229190",
  fatherName: "Mr. Vansh",
  motherName: "Mrs. Narang",
}

export default function EduSetuApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash")
  const [previousScreen, setPreviousScreen] = useState<Screen>("dashboard")
  const [userProfile, setUserProfile] = useState<UserProfile>(initialProfile)

  const navigateTo = (screen: Screen) => {
    if (screen !== "menu") {
      setPreviousScreen(currentScreen)
    }
    setCurrentScreen(screen)
  }

  const goBack = () => {
    setCurrentScreen(previousScreen === "menu" ? "dashboard" : previousScreen)
  }

  const handleSignUp = (profile: UserProfile) => {
    setUserProfile(profile)
    navigateTo("dashboard")
  }

  const handleMenuNavigate = (screenId: string) => {
    if (screenId === "logout") {
      setCurrentScreen("sign-up")
    } else {
      setCurrentScreen(screenId as Screen)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-gray-800">
        {/* Status bar area - transparent overlay */}
        <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 z-50 pointer-events-none">
          <span className="text-sm font-medium text-white mix-blend-difference">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white mix-blend-difference" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l10.79 10.79c.18.18.43.29.71.29.28 0 .53-.11.71-.29l10.79-10.79c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z"/>
            </svg>
            <svg className="w-4 h-4 text-white mix-blend-difference" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 22h20V2z"/>
            </svg>
            <div className="flex items-center">
              <div className="w-6 h-3 border border-white rounded-sm flex items-center justify-end pr-0.5 mix-blend-difference">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="h-full overflow-hidden">
          {currentScreen === "splash" && (
            <SplashScreen onComplete={() => navigateTo("onboarding")} />
          )}
          
          {currentScreen === "onboarding" && (
            <OnboardingScreen onComplete={() => navigateTo("sign-up")} />
          )}
          
          {currentScreen === "sign-up" && (
            <SignUpScreen 
              onSignUp={handleSignUp}
            />
          )}
          
          {currentScreen === "dashboard" && (
            <DashboardScreen 
              userName={userProfile.name}
              userClass={`${userProfile.className} ${userProfile.section}`}
              onMenuOpen={() => navigateTo("menu")}
              onNavigateToHomework={() => navigateTo("homework")}
              onNavigateToNoticeBoard={() => navigateTo("notice-board")}
            />
          )}
          
          {currentScreen === "menu" && (
            <MenuScreen 
              userName={userProfile.name}
              userClass={`${userProfile.className} ${userProfile.section}`}
              onClose={() => navigateTo("dashboard")}
              onNavigate={handleMenuNavigate}
            />
          )}
          
          {currentScreen === "homework" && (
            <HomeworkScreen onBack={() => navigateTo("dashboard")} />
          )}
          
          {currentScreen === "calendar" && (
            <CalendarScreen onBack={() => navigateTo("dashboard")} />
          )}
          
          {currentScreen === "fee-details" && (
            <FeeDetailsScreen onBack={() => navigateTo("dashboard")} />
          )}
          
          {currentScreen === "attendance" && (
            <AttendanceScreen onBack={() => navigateTo("dashboard")} />
          )}
          
          {currentScreen === "academic-year" && (
            <AcademicYearScreen onBack={() => navigateTo("dashboard")} />
          )}
          
          {currentScreen === "examination" && (
            <ExaminationScreen onBack={() => navigateTo("dashboard")} />
          )}
          
          {currentScreen === "notice-board" && (
            <NoticeBoardScreen onBack={() => navigateTo("dashboard")} />
          )}
          
          {currentScreen === "profile" && (
            <ProfileScreen 
              userProfile={userProfile}
              onBack={() => navigateTo("dashboard")} 
            />
          )}
          
          {currentScreen === "report-cards" && (
            <ReportCardsScreen 
              userProfile={userProfile}
              onBack={() => navigateTo("dashboard")} 
            />
          )}

          {currentScreen === "multimedia" && (
            <div className="h-full w-full flex flex-col bg-white">
              <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
                <div className="flex items-center gap-3">
                  <button onClick={() => navigateTo("dashboard")} className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h1 className="text-white font-semibold text-lg">Multimedia</h1>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-400">Coming Soon</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
        {currentScreen === "splash" && "Tap to continue"}
      </div>
    </div>
  )
}
