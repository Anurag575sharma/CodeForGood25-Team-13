"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { date: "29 Jan", score: 200 },
  { date: "30 Jan", score: 300 },
  { date: "31 Jan", score: 100 },
  { date: "1 Feb", score: 400 },
  { date: "2 Feb", score: 500 },
];

export default function IndividualWomenEarning({ title }) {
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
