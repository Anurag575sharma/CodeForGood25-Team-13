"use client";

export default function AttendanceRow({ data = ["P", "A", "P", "A", "P"] }) {
  return (
    <div className="flex gap-2 text-xs">
      {data.map((status, index) => (
        <div
          key={index}
          className={`px-3 py-1 rounded-full text-white font-medium ${
            status === "P" ? "bg-green-500" : "bg-red-400"
          }`}
        >
          {status}
        </div>
      ))}
    </div>
  );
}
