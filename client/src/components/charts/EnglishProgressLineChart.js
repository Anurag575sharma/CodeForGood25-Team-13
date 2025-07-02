"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', level: 20 },
  { name: 'Feb', level: 35 },
  { name: 'Mar', level: 50 },
  { name: 'Apr', level: 65 },
  { name: 'May', level: 80 },
];

export default function EnglishProgressLineChart() {
  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">English Skill Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="level" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
