"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
const data = [
  { skill: 'Beginner', earning: 1000 },
  { skill: 'Intermediate', earning: 3000 },
  { skill: 'Advanced', earning: 5000 },
];

export default function EarningBarChart() {
  const [data, setData] = useState([]);
  useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('http://localhost:8000/api/v1/women');
            const json = await res.json();
            const womenData = json.women;
            const skillMap = {
              bangle: 'Bangle Making',
              stitching: 'Stitching',
              nursing: 'Nursing',
              'phone repair': 'Phone Repair',
            };

            const groupedEarnings = {};

            for (const woman of womenData) {
              const skillLabel = skillMap[woman.skill] || woman.skill;
            
              if (!groupedEarnings[skillLabel]) {
                groupedEarnings[skillLabel] = {
                  name: skillLabel,
                  totalEarning: 0,
                  count: 0,
                };
              }
            
              groupedEarnings[skillLabel].totalEarning += woman.earning || 0;
              groupedEarnings[skillLabel].count += 1;
            }

            // Final formatted array with averages
            const earningsBarData = Object.values(groupedEarnings).map(group => ({
              name: group.name,
              avgEarning: +(group.totalEarning / group.count).toFixed(2),
            }));

            setData(earningsBarData);

  
          } catch (err) {
            console.error('Failed to fetch data:', err);
            setData([]);
          }
        };
        fetchData();
      }, []);
  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Earning Potential</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="avgEarning" fill="#F0BE53" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
