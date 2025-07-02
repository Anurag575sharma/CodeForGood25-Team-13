"use client";
import { Users, Target, Heart, Award, BookOpen, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: BookOpen,
      title: "Education First",
      description: "We believe education is the most powerful weapon to change the world, as Dr. Kalam taught us.",
    },
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "Serving with empathy and understanding, especially those who need it most.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building stronger communities through collective growth and empowerment.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Impact",
      description: "Creating lasting change that continues to benefit generations.",
    },
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & Director",
      description: "Former educator with 20+ years experience in community development.",
    },
    {
      name: "Rajesh Kumar",
      role: "Program Manager",
      description: "Specialist in skill development and women's empowerment programs.",
    },
    {
      name: "Meera Patel",
      role: "Education Coordinator",
      description: "Mathematics and English curriculum expert with grassroots experience.",
    },
    {
      name: "Arjun Singh",
      role: "Community Outreach",
      description: "Connecting with communities and building lasting partnerships.",
    },
  ];

  return (
    <div className="bg-[#F0EBD8] text-[#0D1321]">
      {/* Hero */}
      <section className="bg-[#F0EBD8] text-[#0D1321] py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-yellow-400">Kalam Foundation</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Carrying forward Dr. Kalam’s vision of empowerment through education and livelihood.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4">
          <div className="bg-[#FFF] p-8 rounded-lg shadow-md border border-[#D1D5DB]">
            <Target className="h-10 w-10 text-yellow-400 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-2">
              To empower underprivileged communities through foundational education in math and English and provide livelihood training to women.
            </p>
            <p className="text-sm text-[#4B5563]">
              We aim to break the cycle of poverty by equipping individuals with the tools to succeed and lead.
            </p>
          </div>
          <div className="bg-[#FFF] p-8 rounded-lg shadow-md border border-[#D1D5DB]">
            <Award className="h-10 w-10 text-yellow-400 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg mb-2">
              A world where every child can learn, and every woman can thrive independently.
            </p>
            <p className="text-sm text-[#4B5563]">
              Inspired by Dr. Kalam’s belief in the power of dreams: “Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.”
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[#FFF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Our Story</h2>
            <p className="text-md text-[#4B5563] max-w-2xl mx-auto">
              Founded in 2009 after a community visit deeply inspired by Dr. Kalam’s message.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
              <p className="mb-4">
                Dr. Priya Sharma began weekend lessons for 20 children in a small village outside Delhi. Those humble classes laid the foundation for a national impact.
              </p>
              <p className="mb-4">
                Our approach is rooted in simplicity, consistency, and care — reaching thousands of lives with practical education and training.
              </p>
            </div>
            <div className="bg-[#F0EBD8] border border-[#D1D5DB] rounded-lg p-6 shadow-sm">
              <blockquote className="italic mb-4 text-[#1D2D44]">
                “Teaching is a very noble profession that shapes the character, caliber, and future of an individual.”
              </blockquote>
              <cite className="block text-right font-semibold text-yellow-400">- Dr. APJ Abdul Kalam</cite>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Our Growth</h4>
                <ul className="text-sm space-y-1 text-[#374151]">
                  <li>• 2009: Started with 20 students</li>
                  <li>• 2012: Women&apos;s skill programs launched</li>
                  <li>• 2015: 1,000+ people reached</li>
                  <li>• 2020: Expanded to 5 states</li>
                  <li>• 2024: 7,500+ lives transformed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Values</h2>
            <p className="text-md text-[#6B7280]">What we stand for, every single day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="text-center bg-white p-6 rounded-md shadow-sm border border-[#E5E7EB]">
                  <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100">
                    <Icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{val.title}</h4>
                  <p className="text-sm text-[#4B5563]">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Team</h2>
            <p className="text-md text-[#6B7280]">Passionate minds behind our mission.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center border border-[#E5E7EB]">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl mb-4">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h4 className="text-lg font-semibold text-[#1D2D44]">{member.name}</h4>
                <p className="text-sm text-yellow-600 font-semibold">{member.role}</p>
                <p className="text-sm text-[#4B5563] mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1D2D44] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join us in continuing Dr. Kalam’s legacy of empowerment through education and opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1D2D44] hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition">
              Support Our Cause
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#1D2D44] px-8 py-3 rounded-md font-semibold transition">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
