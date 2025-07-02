"use client";
import Topbar from "@/components/Topbar";
import ExpandableStudentCard from "@/components/ExpandableStudentCard";
import ExpandableWomenCard from "@/components/ExpandableWomenCard";
import { useState, useEffect } from "react";
const dummyWomen = {
  id: 1,
  name: "John Doe",
  attendance: "89%",
  skill: "Bangle Making",
  rating: "4/5",
  location: "Madhavpur",
};

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:8000/api/v1/women');
          const json = await res.json();
          const womenData = json.women;
          console.log(womenData);
  
          setData(womenData);

        } catch (err) {
          console.error('Failed to fetch data:', err);
          setData([]);
        }
      };
      fetchData();
    }, []);
  return (
    <div className="flex">
      <div className="flex-1">
        <Topbar />
        <main className="pt-5 px-6 text-sm space-y-6">
          <h1 className="text-2xl font-bold text-yellow-600">Women Details</h1>
          <p className="text-gray-500">Proposed details of the panel</p>
          <div className="grid grid-cols-5 w-full text-sm">
            <p>Name</p>
            <p>Attendance</p>
            <p>Skill</p>
            <p>Skill Rating</p>
            <p>Status</p>
          </div>
          <div>
            {data && data.length > 0 ? (
              data.map((woman) => (
                <ExpandableWomenCard key={woman._id} women={woman} />
              ))
            ) : (
              <p className="text-gray-400 py-4">No data available.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
