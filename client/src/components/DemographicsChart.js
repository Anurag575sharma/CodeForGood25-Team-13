"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = Array.from({ length: 15 }).map((_, i) => ({
  sector: `Sector ${i + 1}`,
  count: Math.floor(Math.random() * 100 + 20),
}));

export default function DemographicsChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Sector-Wise Reach in Hyderabad</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="sector" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
