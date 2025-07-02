"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-row justify-around p-8 items-center text-[#0D1321]"
    >
      <div>
        <Link className="font-extrabold text-2xl tracking-wide" href="/">
          Kalam Foundation
        </Link>
      </div>

      <div className="flex gap-7 font-medium">
        <Link
          className="hover:text-[#3E5C76] transition duration-300 ease-in-out"
          href="/about"
        >
          About Us
        </Link>
        <Link
          className="hover:text-[#3E5C76] transition duration-300 ease-in-out"
          href="/donor-dashboard"
        >
          Fund Us
        </Link>
        <Link
          className="hover:text-[#3E5C76] transition duration-300 ease-in-out"
          href="/stories"
        >
          Stories
        </Link>
        <Link
          className="hover:text-[#3E5C76] transition duration-300 ease-in-out"
          href="/volunteer"
        >
          Volunteer
        </Link>
      </div>

      <div>
        <Link
  href="/auth"
  className="inline-flex items-center justify-center rounded-xl bg-[#3E5C76] px-6 py-2 text-base font-medium text-white transition-colors duration-300 hover:bg-[#1D2D44] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#748CAB]"
>
  Sign In
</Link>

      </div>
    </motion.div>
  );
};

export default Navbar;
