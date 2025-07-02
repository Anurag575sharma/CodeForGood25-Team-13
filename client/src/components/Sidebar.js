"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GraduationCap, Handshake, Home, LogOut, Settings, User, Users, UsersRound } from "lucide-react";

const menuItems = [
  { label: "Student Home", path: "/dashboard/student", icon: <Home size={18} /> },
  { label: "Women Home", path: "/dashboard/women", icon: <User size={18} /> },
  { label: "All Students", path: "/dashboard/all-students", icon: <GraduationCap size={18} /> },
  { label: "All Women", path: "/dashboard/all-women", icon: <Users size={18} />},
  { label: "Families", path: "/dashboard/families", icon: <UsersRound size={18} />},
  { label: "Volunteers", path: "/dashboard/volunteers", icon: <Handshake size={18} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="sidebar flex flex-col w-64 bg-white p-4 border-r">
      <Image src="/logo.png" alt="logo" height={150} width={150} className="mb-10"></Image>
      {menuItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "flex gap-2 px-6 py-3 rounded-md mb-6 font-medium text-sm transition",
              isActive
                ? "bg-[#F0BE53] text-white shadow"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
      <div className="flex gap-2 mt-80 ml-7 text-neutral-600">
        <Settings size={18} />
        Settings
      </div>
      <div className="flex gap-2 mt-7 ml-7 text-neutral-600">
        <LogOut size={18} />
        Settings
      </div>
    </div>
  );
}
