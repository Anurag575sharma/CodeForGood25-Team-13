"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Age:19-30', before: 1200, after: 4000 },
  { name: 'Age:31-55', before: 1000, after: 3500 },
  { name: 'Age:56-70', before: 1500, after: 4500 },
];

export default function EarningsComparisonChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Women&apos;s Income Journey With Kalaam</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="before" fill="#FCD34D" name="Before Joining" />
          <Bar dataKey="after" fill="#F97316" name="After Joining" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
