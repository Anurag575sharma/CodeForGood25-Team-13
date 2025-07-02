"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { topic: "Reading", score: 5.5 },
  { topic: "Writing", score: 7.5 },
  { topic: "Listening", score: 2.5 },
  { topic: "Speaking", score: 9.5 },
];

export default function EnglishAvgBarChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">English Avg Scores</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="topic" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#F0BE53" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
