"use client";
import {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import TestScoreChart from "./TestScoreChart";

export default function ExpandableStudentCard({student}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("Student Data:", student);
  return (
    <div className="border rounded-md mb-4 shadow-sm">
      {/* Top Row (clickable) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition"
      >
        <div className="grid grid-cols-9 gap-2 w-full text-sm">
          <div>{1}</div>
          <div>{student.name}</div>
          <div>{student.grade}</div>
          <div>{student.attendance}</div>
          {/* <div>{student.location}</div> */}
          <div>{student.gender}</div>
          <div>{student.maths}</div>
          <div>{student.english}</div>
          <div className="text-green-600 font-medium">Active</div>
        </div>
        <div>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
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
                    val === "P"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-neutral-50 flex items-center justify-center gap-5">
              <h4 className="font-semibold mb-1">
                Predicted School Dropout Probability
              </h4>
              <p className="text-green-600 text-4xl font-bold">10%</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">English Skills</h4>
              <div className="flex gap-2 flex-wrap">
                {["Reading", "Writing", "Listening", "Speaking"].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {skill}: {student.engArray[i]}/5
                  </span>
                ))}
              </div>
              <h4 className="font-semibold mt-5 mb-1">Maths Skills</h4>
              <div className="flex gap-2 flex-wrap">
                {["Arithmetic Operations", "Algebra", "Geometry", "Problem Solving", "Statistics"].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {skill}: {student.mathsArray[i]}/5
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Chart placeholders */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">Test Scores (English)</h4>
              <div>
                <TestScoreChart />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Test Scores (Maths)</h4>
              <div>
                <TestScoreChart />
              </div>
            </div>
          </div>

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
