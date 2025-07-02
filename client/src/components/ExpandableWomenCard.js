"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Worm } from "lucide-react";
import TestScoreChart from "./TestScoreChart";
import IndividualWomenEarning from "./IndividualWomenEarning";

export default function ExpandableWomenCard({ women }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md mb-4 shadow-sm">
      {/* Top Row (clickable) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition"
      >
        <div className="grid grid-cols-5 gap-2 w-full text-sm">
          <div>{women.fullName}</div>
          <div>85%</div>
          <div>{women.skill}</div>
          <div>{women.rating}</div>
          <div className="text-green-600 font-medium">{women.status.charAt(0).toUpperCase()}{women.status.slice(1)}</div>
        </div>
        <div>{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
      </div>

      {/* Expanded Details */}
      {isOpen && (
        <div className="bg-white px-6 pt-6 pb-6 text-sm space-y-6">
          <div className="p-4 bg-neutral-50 rounded-lg">
            <h4 className="font-semibold mb-1">Feedback</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit amet... etc.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Attendance (Last 5 days)</h4>
            <div className="flex gap-2">
              {["P", "A", "A", "P", "P"].map((val, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 border rounded-full ${
                    val === "P" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-neutral-50 flex items-center justify-center gap-5">
              <h4 className="font-semibold mb-1">Predicted Skill Training Dropout Probability</h4>
              <p className="text-green-600 text-4xl font-bold">10%</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Earning Potential</h4>
              <div><IndividualWomenEarning /></div>
            </div>
          </div>

          {/* Chart placeholders */}

          <div className="p-4 rounded-lg bg-neutral-50">
            <h4 className="font-semibold mb-1">Recommended Actions</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
