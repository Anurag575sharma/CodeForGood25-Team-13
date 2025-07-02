"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { date: "29 Jan", score: 40 },
  { date: "30 Jan", score: 70 },
  { date: "31 Jan", score: 30 },
  { date: "1 Feb", score: 65 },
  { date: "2 Feb", score: 75 },
];

export default function TestScoreChart({ title }) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={sampleData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
