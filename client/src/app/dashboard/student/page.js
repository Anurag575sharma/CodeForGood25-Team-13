"use client";
import Topbar from "@/components/Topbar";
import MathsAvgBarChart from "@/components/charts/MathsAvgBarChart";
import EnglishAvgBarChart from "@/components/charts/EnglishAvgBarChart";
import EarningBarChart from "@/components/charts/EarningBarChart";
import SkillPieChart from "@/components/charts/SkillPieChart";
import AgeGroup from "@/components/charts/AgeGroup";
import StudentGender from "@/components/charts/StudentGender";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [inactivePercentage, setInactivePercentage] = useState(0);
  const [completedPercentage, setCompletedPercentage] = useState(0);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/students/allstudents"
      );
      const data = response.data;

      if (data.success) {
        setStudents(data.students);

        const total = data.students.length;
        const inactive = data.students.filter(
          (s) => s.status === "inactive"
        ).length;
        const completed = data.students.filter(
          (s) => s.status === "completed"
        ).length;

        setTotalStudents(total);
        setInactivePercentage(
          total ? ((inactive / total) * 100).toFixed(1) : 0
        );
        setCompletedPercentage(
          total ? ((completed / total) * 100).toFixed(1) : 0
        );
      } else {
        console.error("Failed to fetch students:", data.message);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  return (
    <div className="flex">
      <div className="w-full">
        <Topbar />
        <main className="pt-8 px-6 space-y-6">
          <h1 className="text-3xl font-bold mb-4">Student Stats</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#F0BE53] text-white p-6 rounded-xl text-center">
              <h2 className="text-sm uppercase">Total Students</h2>
              <p className="text-3xl font-bold">{totalStudents}</p>
            </div>
            <div className="bg-[#F0BE53] text-white p-6 rounded-xl text-center">
              <h2 className="text-sm uppercase">Dropout %</h2>
              <p className="text-3xl font-bold">30%</p>
            </div>
            <div className="bg-[#F0BE53] text-white p-6 rounded-xl text-center">
              <h2 className="text-sm uppercase">Success %</h2>
              <p className="text-3xl font-bold">40%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MathsAvgBarChart />
            <EnglishAvgBarChart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AgeGroup />
            <StudentGender />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Overall Summary</h2>
            <p className="text-sm text-gray-700">
              The student performance indicates moderate proficiency in both Math and English, with notable strengths in Algebra, Geometry, and Speaking. However, a 30% dropout rate signals a need for stronger retention strategies. Listening in English and foundational Math areas like Arithmetic and Fractions show lower average scores, suggesting they require focused improvement. Gender and age distribution are balanced, but targeted interventions for younger age groups (8 to 10) may further improve success outcomes
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Areas To Improve</h2>
            <ul className="list-disc ml-6 text-gray-700 text-sm">
              <li>Improve Listening skills in English based on average score metrics.</li>
              <li>Enhance foundational Math topics like Arithmetic and Fractions.</li>
              <li>Conduct regular feedback sessions with students to understand academic and emotional challenges.</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
