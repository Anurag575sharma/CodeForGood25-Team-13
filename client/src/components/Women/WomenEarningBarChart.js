"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { skill: 'Stitching', earning: 3000 },
  { skill: 'Bangle Making', earning: 2000 },
  { skill: 'Nursing', earning: 4500 },
  { skill: 'Tele Comm.', earning: 3500 },
];

export default function WomenEarningBarChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Earning Potential</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="earning" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
