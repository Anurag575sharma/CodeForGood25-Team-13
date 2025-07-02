"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Skill labels
const skillLabels = [
  "Arithmetic",
  "Algebra",
  "Geometry",
  "Fractions",
  "Stats",
];

export default function MathsAvgBarChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchStudentData() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/students/allstudents"); // Replace with actual endpoint
        const { students } = await res.json();

        const totalScores = [0, 0, 0, 0, 0];
        let studentCount = 0;

        students.forEach((student) => {
          if (Array.isArray(student.maths) && student.maths.length === 5) {
            student.maths.forEach((score, idx) => {
              totalScores[idx] += score;
            });
            studentCount++;
          }
        });

        const avgData = skillLabels.map((label, idx) => ({
          topic: label,
          score: studentCount ? (totalScores[idx] / studentCount).toFixed(2) : 0,
        }));

        setChartData(avgData);
      } catch (err) {
        console.error("Failed to fetch students:", err);
      }
    }

    fetchStudentData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Maths Avg Scores</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="topic" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Bar dataKey="score" fill="#F0BE53" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
