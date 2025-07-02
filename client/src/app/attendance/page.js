"use client";

import Topbar from "@/components/Topbar";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Page() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [savedStudents, setSavedStudents] = useState({});
  const [loading, setLoading] = useState(true);

  const todayDate = new Date().toISOString().split("T")[0]; // 2025-06-29

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/students/allstudents"
        );
        setStudents(res.data.students);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const handleCheck = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSave = async (studentId) => {
    const status = attendance[studentId];
    if (status === undefined) {
      alert("Please select attendance before saving.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/students/mark-attendance",
        {
          studentId,
          date: todayDate,
          status, // 1 for present, 0 for absent
        }
      );

      if (res.data.success) {
        alert("Attendance marked successfully!");
        setSavedStudents((prev) => ({
          ...prev,
          [studentId]: true,
        }));
      } else {
        alert("Failed to mark attendance");
      }
    } catch (error) {
      console.error("Error marking attendance:", error);
      alert("Error marking attendance");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="flex">
      <div className="flex-1">
        <Topbar />
        <main className="pt-5 px-6 text-sm space-y-6">
          <h1 className="text-2xl font-bold text-yellow-600">
            Attendance Panel
          </h1>
          <p className="text-gray-500">
            Manage attendance records for students
          </p>
          <div className="font-bold text-xl">Today&apos;s Date: {todayDate}</div>

          <div className="grid grid-cols-4 gap-2 w-full text-sm font-semibold">
            <p>ID</p>
            <p>Name</p>
            <p>Check (Present/Absent)</p>
            <p>Save</p>
          </div>

          <div>
            {students.map((student) => (
              <div
                key={student._id}
                className="grid grid-cols-4 gap-2 py-2 items-center"
              >
                <p>{student._id}</p>
                <p>{student.fullName}</p>
                <div>
                  <label className="mr-2">
                    <input
                      type="radio"
                      name={`attendance-${student._id}`}
                      value={1}
                      onChange={() => handleCheck(student._id, 1)}
                      checked={attendance[student._id] === 1}
                      disabled={savedStudents[student._id]}
                    />
                    Present
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`attendance-${student._id}`}
                      value={0}
                      onChange={() => handleCheck(student._id, 0)}
                      checked={attendance[student._id] === 0}
                      disabled={savedStudents[student._id]}
                    />
                    Absent
                  </label>
                </div>
                <button
                  onClick={() => handleSave(student._id)}
                  className={`px-2 py-1 rounded ${
                    savedStudents[student._id]
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-yellow-500 text-white"
                  }`}
                  disabled={savedStudents[student._id]}
                >
                  {savedStudents[student._id] ? "Saved" : "Save"}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
