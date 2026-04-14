"use client"

import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { FileX2 } from "lucide-react"

interface FeeDetailsScreenProps {
  onBack: () => void
}

const feeTabs = ["School Fee", "Exam Fee", "Activity Fee", "Other"]

const schoolFeeData = [
  {
    id: 1,
    month: "January",
    amount: 16600,
    date: "06 Dec",
    paid: true,
    details: {
      totalFee: 14500,
      extraFee: 2000,
      lateCharges: 600,
      discount: -500,
      discountPercent: "20%",
      paidFee: 16600
    }
  },
  { id: 2, month: "December", amount: 14500, date: "06 Nov", paid: true },
  { id: 3, month: "November", amount: 16500, date: "06 Oct", paid: true },
  { id: 4, month: "October", amount: 14500, date: "06 Sept", paid: true },
  { id: 5, month: "September", amount: 14500, date: "06 Aug", paid: true },
  { id: 6, month: "August", amount: 14500, date: "06 July", paid: true },
  { id: 7, month: "July", amount: 14500, date: "06 June", paid: true },
]

const examFeeData = [
    { id: 1, month: "Mid-Term Exam", amount: 2500, date: "15 Oct", paid: true },
    { id: 2, month: "Final Exam", amount: 3000, date: "10 May", paid: true },
]

const activityFeeData = [
    { id: 1, month: "Annual Sports Day", amount: 1000, date: "20 Jan", paid: true },
    { id: 2, month: "Science Exhibition", amount: 500, date: "25 Feb", paid: true },
]

const feeData: { [key: string]: any[] } = {
  "School Fee": schoolFeeData,
  "Exam Fee": examFeeData,
  "Activity Fee": activityFeeData,
  "Other": [],
};


export function FeeDetailsScreen({ onBack }: FeeDetailsScreenProps) {
  const [activeTab, setActiveTab] = useState("School Fee")
  const [expandedId, setExpandedId] = useState<number | null>(1)

  const currentFeeData = feeData[activeTab]

  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#4A4A9E] pt-12 pb-4 px-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-semibold text-lg">Fee Details</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 px-4">
        {feeTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-3 text-sm font-medium ${
              activeTab === tab
                ? "text-[#FD3667] border-b-2 border-[#FD3667]"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Fee List */}
      <div className="flex-1 overflow-auto">
        {currentFeeData.length > 0 ? (
          currentFeeData.map((fee) => (
            <div key={fee.id} className="border-b border-gray-100">
              <button
                onClick={() => setExpandedId(expandedId === fee.id ? null : fee.id)}
                className="w-full px-4 py-4 flex items-center justify-between"
              >
                <div className="text-left">
                  <p className="text-gray-500 text-sm">{activeTab} for {fee.month}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl font-bold text-[#4A4A9E]">
                      &#8377; {fee.amount.toLocaleString()}
                    </span>
                    {fee.paid && (
                      <span className="px-2 py-0.5 bg-[#00C853] text-white text-xs rounded-full">
                        Paid
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-sm">{fee.date}</span>
                  {expandedId === fee.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Expanded Details */}
              {expandedId === fee.id && fee.details && (
                <div className="px-4 pb-4 bg-[#E8F5FF]">
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Fee</span>
                      <span className="text-gray-800">&#8377; {fee.details.totalFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Extra Fee</span>
                      <span className="text-[#FD3667]">&#8377; {fee.details.extraFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Late Charges</span>
                      <span className="text-[#FD3667]">&#8377; {fee.details.lateCharges}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Discount ({fee.details.discountPercent})</span>
                      <span className="text-[#00C853]">- &#8377; {Math.abs(fee.details.discount)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold pt-2 border-t border-gray-200">
                      <span className="text-gray-800">Paid Fee</span>
                      <span className="text-[#4A4A9E]">&#8377; {fee.details.paidFee.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <Empty>
              <EmptyHeader>
                <EmptyMedia>
                  <FileX2 className="size-10" />
                </EmptyMedia>
                <EmptyTitle>No fee details found</EmptyTitle>
                <EmptyDescription>
                  There are no fee details available for the selected category.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        )}
      </div>
    </div>
  )
}
