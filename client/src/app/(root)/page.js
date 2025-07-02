"use client";

import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import SplitText from "@/components/landing/SplitText";
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/landing/ScrollReveal";
import FeatureCard from "@/components/landing/FeatureCard";
import TiltedCard from "@/components/landing/TiltedCard";
import ContactUsForm from "@/components/landing/ContactUsForm";
import Masonry from "@/components/landing/Masonary";
import RotatingText from "@/components/landing/RotatingText";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { spring } from "motion/react";

const LandingPage = () => {
  return (
    <main className="mt-24 justify-center">
      <section className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-950 tracking-wider flex gap-1"
          >
            <Award className="w-5 h-5" />
            Inspired by Dr. APJ Abdul Kalam
            <Award className="w-5 h-5" />
          </motion.p>
          <SplitText
            text="Empowering Communities Through Education & Innovation"
            className="text-6xl font-semibold max-w-3xl mx-auto text-center"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-center max-w-2xl mx-auto mt-2"
          >
            At Kalam Foundation, we strive to nurture young minds, empower women,
            and uplift underprivileged communities through holistic education and skill development.
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex gap-4"
        >
          <Button className="py-5 px-10 rounded-full">Get Involved</Button>
          <Button variant="outline" className="py-5 px-10 rounded-full">
            Explore Programs
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="p-[4px] rounded-xl bg-gradient-to-r from-orange-400 via-yellow-300 to-pink-500 shadow-lg"
        >
          <div className="bg-white rounded-xl overflow-hidden">
            <Image
              src="/landing_one.png"
              alt="Kalam Foundation Banner"
              className="rounded-2xl w-full h-auto block"
              width={1500}
              height={650}
            />
          </div>
        </motion.div>
      </section>

      <section className="mt-40 flex flex-col items-center mb-5">
        <p>Our Partners</p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px", once: true }}
          className="flex flex-wrap justify-center items-center gap-10 py-6 opacity-80"
        >
          <Image src="/JPMorgan-Chase-Logo.png" alt="JP Morgan" width={150} height={70} />
        </motion.div>
      </section>

      <section className="flex flex-col items-center bg-white border-0 rounded-3xl">
        <div className="max-w-4xl my-[50vh] text-center px-4">
          <ScrollReveal containerClassName="h-[100vh]">
            True development begins with education and dignity for all.
          </ScrollReveal>
          <ScrollReveal containerClassName="h-[50vh]">
            Yet, millions in India remain untouched by opportunity and support.
          </ScrollReveal>
          <ScrollReveal containerClassName="h-[20vh]">
            Kalam Foundation is changing that.
          </ScrollReveal>
        </div>
      </section>

      <section className="mt-40 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            className="bg-white border-gray-100 px-2 py-0.5 drop-shadow-black/15 drop-shadow-xs rounded-xl"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            className="font-semibold text-5xl"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-700 max-w-xl text-center"
          >
            From basic education and digital literacy to women’s empowerment and youth mentorship —
            we bring sustainable change, one life at a time.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          animate={{ transition: { type: spring } }}
          className="my-20 flex gap-5"
        >
          <FeatureCard
            title="Child Education"
            subtitle="Foundational learning programs in English, Math, and Science."
            image="/boy-child-school-learning-education-chalk-numbers.jpg"
          />
          <FeatureCard
            title="Women Empowerment"
            subtitle="Skill training, financial literacy, and livelihood support."
            image="/rural.jpg"
          />
          <FeatureCard
            title="Community Outreach"
            subtitle="Health camps, career guidance, and rural support drives."
            image="/Communityoutreach.png"
          />
        </motion.div>
      </section>

      <section className="mt-20 flex flex-col items-center bg-white inset-shadow-sm inset-shadow-amber-900/15 rounded-2xl">
        <div className="flex flex-col items-center gap-4 mt-30">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white border-gray-100 px-2 py-0.5 drop-shadow-black/15 drop-shadow-xs rounded-xl"
          >
            Who We Help
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-semibold text-5xl flex gap-2 items-center"
          >
            We Uplift{" "}
            <RotatingText
              texts={["Underprivileged", "Students", "Women", "Youth"]}
              mainClassName="px-2 bg-amber-400 text-white py-1 rounded-lg"
              rotationInterval={2000}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-700 max-w-xl text-center"
          >
            Our mission reaches every section of society — from urban slums to remote villages — wherever hope is needed.
          </motion.p>
        </div>

        {/* Placeholder TiltedCards */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          animate={{ transition: { type: spring } }}
          className="my-20 flex gap-10"
        >
          {/* Replace with Kalam Foundation event or gallery images */}
          <TiltedCard
            imageSrc="/empowering-rural-women-harvesting-assam-north-east-india_1034537-66355.jpg"
            captionText="Literacy Drive"
            altText="Literacy Drive"
            rotateAmplitude={12}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={<p>Village Outreach</p>}
          />
          <TiltedCard
            imageSrc="/jss-agriculture-practive-sept-2021-01.jpg"
            captionText="Vocational Training"
            altText="Training Program"
            rotateAmplitude={12}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={<p>Women Empowerment</p>}
          />
          <TiltedCard
            imageSrc="/teaching-768x385.jpeg"
            captionText="Youth Workshop"
            altText="Youth Workshop"
            rotateAmplitude={12}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={<p>Career Mentorship</p>}
          />
        </motion.div>
      </section>

      <section className="mt-40 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-semibold text-5xl"
          >
            Contact Kalam Foundation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-700 max-w-xl text-center"
          >
            Reach out to volunteer, collaborate, or donate. Together, we can build a better tomorrow.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          animate={{ transition: { type: spring } }}
          className="my-10"
        >
          <ContactUsForm />
        </motion.div>
      </section>

      <section className="mt-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <p className="text-neutral-400 font-medium">
            50,000+ Lives Transformed ❤️
          </p>
          <h2 className="text-5xl font-semibold max-w-3xl text-center mb-15">
            Join us in making education and dignity universal rights — not privileges.
          </h2>
        </motion.div>
        <Masonry />
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20"
      >
        <Footer />
      </motion.section>
    </main>
  );
};

export default LandingPage;
