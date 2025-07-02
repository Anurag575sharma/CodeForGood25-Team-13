"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const dummyStudent = {
  id: 1,
  name: "John Doe",
};


export default function ExpandableAttendance({ student, date }) {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  console.log(student)

  const handleSave = async () => {
    setLoading(true);
    const payload = {
      id: student.id,
      date,
      attendance: checked ? 1 : 0,
    };

    try {
      const res = await axios.post("/api/attendance", {
        payload
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      } else {
        alert("Failed to save");
      }
    } catch (err) {
      alert("Error saving attendance");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-md mb-4 shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="grid grid-cols-4 gap-2 w-full text-sm">
          <div>{dummyStudent.id}</div>
          <div>{dummyStudent.name}</div>
          <div>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="h-4 w-4"
            />
          </div>
          <div>
            <Button onClick={handleSave} disabled={loading}>
              {saved ? "Saved" : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
