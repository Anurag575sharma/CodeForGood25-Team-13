"use client";

export default function Topbar() {
  return (
    <header className="w-full h-16 bg-white shadow px-6 flex justify-between items-center left-64 top-0 z-10">
      <h2 className="text-lg">Good Morning, <span className="text-yellow-600 font-bold">Admin</span></h2>
      <div className="flex items-center space-x-2">
        <p>John Doe</p>
        <img src="https://i.pravatar.cc/40" alt="profile" className="rounded-full h-8 w-8" />
      </div>
    </header>
  );
}
