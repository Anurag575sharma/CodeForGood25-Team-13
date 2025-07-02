"use client";
import {useEffect, useState} from "react";
import axios from "axios";
import Topbar from "@/components/Topbar";
import ExpandableStudentCard from "@/components/ExpandableStudentCard";

export default function Page() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const {data} = await axios.get(
          "http://localhost:8000/api/v1/students/allstudents"
        );
        console.log("All Students Data:", data);

        const studentsWithDetails = await Promise.all(
          data.students.map(async (student) => {
            let attendancePercent = "N/A";
            let latestMarks = {english: 0, maths: 0};
            let performance = {remarks: "-"};

            try {
              const attendanceRes = await axios.get(
                `http://localhost:8000/api/v1/students/attendance?studentId=${student._id}`
              );
              const attendanceData = attendanceRes.data.attendance?.[0] || {};
              const totalDays =
                (attendanceData.present_days || 0) +
                (attendanceData.absent_days || 0);

              attendancePercent =
                totalDays > 0
                  ? ((attendanceData.present_days / totalDays) * 100).toFixed(
                      2
                    ) + "%"
                  : "N/A";
            } catch (err) {
              console.warn(`Attendance fetch failed for ${student._id}`);
            }

            try {
              const marksRes = await axios.get(
                `http://localhost:8000/api/v1/students/marks/${student._id}`
              );
              latestMarks = marksRes.data.marks?.[
                marksRes.data.marks.length - 1
              ] || {
                english: 0,
                maths: 0,
              };
            } catch (err) {
              console.warn(`Marks fetch failed for ${student._id}`);
            }

            try {
              const performanceRes = await axios.get(
                `http://localhost:8000/api/v1/students/performance/${student._id}`
              );
              performance = performanceRes.data.performance || {remarks: "-"};
            } catch (err) {
              console.warn(`Performance fetch failed for ${student._id}`);
            }

            return {
              id: student._id,
              name: student.fullName,
              grade: `${student.age} yrs`,
              attendance: attendancePercent,
              location: "-", // If location stored in DB, update here
              gender: student.gender,
              maths: latestMarks.maths || 0,
              english: latestMarks.english || 0,
              engArray: student.english || [],
              mathsArray: student.maths || [],
              status: student.status,
              performanceRemarks: performance.remarks || "-",
            };
          })
        );

        setStudents(studentsWithDetails);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="flex">
      <div className="flex-1">
        <Topbar />
        <main className="pt-5 px-6 text-sm space-y-6">
          <h1 className="text-2xl font-bold text-yellow-600">
            Student Details
          </h1>
          <p className="text-gray-500">Proposed details of the panel</p>
          <div className="grid grid-cols-9 w-full text-sm">
            <p>ID</p>
            <p>Student Name</p>
            <p>Grade Competence</p>
            <p>Attendance</p>
            <p>Gender</p>
            <p>Maths Score</p>
            <p>English Score</p>
            <p>Status</p>
          </div>
          <div>
            {students.map((student) => (
              <ExpandableStudentCard key={student.id} student={student} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
