"use client";

import EarningBarChart from "@/components/charts/EarningBarChart";
import DemographicsChart from "@/components/DemographicsChart";
import Testimonials from "@/components/Testimonials";
import React from "react";
import { motion } from "motion/react";
import SplitText from "@/components/landing/SplitText";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
        <div className="pr-40 pl-40 pb-40 pt-20 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-5">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-950 tracking-wider flex gap-1"
        ></motion.p>
        <SplitText
          text="Donate Us"
          className="text-6xl font-semibold max-w-3xl mx-auto text-center"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-center max-w-2xl mx-auto mt-2"
        >
          At Kalam Foundation, we strive to nurture young minds, empower women,
          and uplift underprivileged communities through holistic education and
          skill development.
        </motion.div>
      </div>
      <Testimonials />
      <EarningBarChart />
      <DemographicsChart />  
    </div>
    <Footer />
    </>
  );
};

export default Page;
