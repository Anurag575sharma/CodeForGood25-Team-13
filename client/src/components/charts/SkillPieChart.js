"use client";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const data = [
  { name: 'Bangle Making', value: 40 },
  { name: 'Stiching', value: 10 },
  { name: 'Nursing', value: 20 },
  { name: 'Telecommunication', value: 10 },
];

const COLORS = ['#6E5302', '#BB972B', '#FFDB70', '#E1C536'];

export default function SkillPieChart() {
  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:8000/api/v1/women');
          const json = await res.json();
          const womenData = json.women;
          console.log(womenData);
          const skillMap = {
              bangle: 'Bangle Making',
              stitching: 'Stitching',
              nursing: 'Nursing',
              'phone repair': 'Phone Repair',
            };

        const groupedData = Object.values(
          womenData.reduce((acc, woman) => {
            const skillLabel = skillMap[woman.skill] || woman.skill;
            if (!acc[skillLabel]) {
              acc[skillLabel] = { name: skillLabel, value: 0 };
            }
            acc[skillLabel].value += 1;
            return acc;
          }, {})
        );
        console.log('Grouped Data:', groupedData);
        setData(groupedData);

        } catch (err) {
          console.error('Failed to fetch data:', err);
          setData([]);
        }
      };
      fetchData();
    }, []);
  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Skill Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={90} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
