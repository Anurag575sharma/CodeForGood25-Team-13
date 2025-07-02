"use client"
import { useState } from "react"
import {
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function StoriesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Priya Kumari",
      role: "Student, Class 8",
      location: "Bihar",
      story:
        "Before joining Kalam Foundation, I struggled with basic math. Now I'm one of the top students in my class! The teachers made learning fun and easy to understand.",
      image: "PK",
      rating: 5,
    },
    {
      name: "Sunita Devi",
      role: "Tailoring Entrepreneur",
      location: "Uttar Pradesh",
      story:
        "The livelihood program changed my life completely. I learned tailoring and now run my own business, supporting my family of four. I earn ₹15,000 per month now!",
      image: "SD",
      rating: 5,
    },
    {
      name: "Rahul Singh",
      role: "Student, Class 10",
      location: "Rajasthan",
      story:
        "English was like a foreign language to me. Thanks to Kalam Foundation's patient teachers, I can now speak confidently and even help my younger siblings with their homework.",
      image: "RS",
      rating: 5,
    },
    {
      name: "Meera Sharma",
      role: "Handicraft Business Owner",
      location: "Madhya Pradesh",
      story:
        "From being dependent on my husband to running my own handicraft business - this journey has been incredible. I now employ 5 other women from my village!",
      image: "MS",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Engineering Student",
      location: "Jharkhand",
      story:
        "The strong foundation in math I got from Kalam Foundation helped me crack the engineering entrance exam. I'm now studying at a top engineering college!",
      image: "AK",
      rating: 5,
    },
  ]

  const impactData = [
    { year: "2019", students: 1200, women: 450, communities: 15 },
    { year: "2020", students: 1800, women: 680, communities: 22 },
    { year: "2021", students: 2500, women: 950, communities: 28 },
    { year: "2022", students: 3200, women: 1300, communities: 35 },
    { year: "2023", students: 4100, women: 1750, communities: 42 },
    { year: "2024", students: 5000, women: 2500, communities: 50 },
  ]

  const successMetrics = [
    { label: "Student Pass Rate", value: "94%", icon: BookOpen, color: "text-[#3E5C76]" },
    { label: "Women Employed", value: "87%", icon: Users, color: "text-[#3E5C76]" },
    { label: "Income Increase", value: "250%", icon: TrendingUp, color: "text-[#F4B942]" },
    { label: "Community Satisfaction", value: "96%", icon: Award, color: "text-[#748CAB]" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F0EBD8] text-[#0D1321] py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success <span className="text-yellow-400">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Real stories of transformation, empowerment, and dreams coming true through education and skill development.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-[#F0EBD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1321] mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-[#748CAB]">Measuring success through real outcomes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Icon className={`h-12 w-12 ${metric.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-[#0D1321] mb-2">{metric.value}</div>
                <div className="text-[#748CAB]">{metric.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Growth Chart */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1321] mb-4">Growth Over the Years</h2>
          <p className="text-lg text-[#748CAB]">Our expanding reach and impact across communities</p>
        </div>

        <div className="bg-[#F0EBD8] p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Beneficiaries Growth */}
            <div>
              <h3 className="text-xl font-bold text-[#0D1321] mb-6">Beneficiaries Growth</h3>
              <div className="space-y-4">
                {impactData.map((data, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-semibold text-[#748CAB]">{data.year}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-3 h-3 bg-[#3E5C76] rounded-full"></div>
                        <span className="text-sm text-[#748CAB]">Students: {data.students}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-[#3E5C76] h-2 rounded-full" style={{ width: `${(data.students / 5000) * 100}%` }}></div>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-3 h-3 bg-[#F4B942] rounded-full"></div>
                        <span className="text-sm text-[#748CAB]">Women: {data.women}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#F4B942] h-2 rounded-full" style={{ width: `${(data.women / 2500) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communities Reach */}
            <div>
              <h3 className="text-xl font-bold text-[#0D1321] mb-6">Community Reach</h3>
              <div className="space-y-4">
                {impactData.map((data, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-semibold text-[#748CAB]">{data.year}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#748CAB]">Communities</span>
                        <span className="text-sm font-semibold text-[#3E5C76]">{data.communities}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#1D2D44] h-3 rounded-full" style={{ width: `${(data.communities / 50) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F0EBD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1321] mb-4">Voices of Change</h2>
          <p className="text-lg text-[#748CAB]">Hear directly from those whose lives have been transformed</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3E5C76] to-[#F4B942] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">{testimonials[currentTestimonial].image}</span>
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-lg md:text-xl text-[#0D1321] text-center mb-8 italic">
              {`"${testimonials[currentTestimonial].story}"`}
            </blockquote>
            <div className="text-center">
              <h4 className="text-xl font-bold text-[#0D1321]">{testimonials[currentTestimonial].name}</h4>
              <p className="text-[#F4B942] font-semibold">{testimonials[currentTestimonial].role}</p>
              <p className="text-[#748CAB]">{testimonials[currentTestimonial].location}</p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-[#3E5C76]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-[#3E5C76]" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-[#F4B942]" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1D2D44] to-[#F4B942] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Story Could Be Next</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands who have transformed their lives through education and skill development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-medium text-[#1D2D44] hover:bg-[#F0F0F0] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F4B942]">
              Apply for Programs
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-[#1D2D44] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Support Others&apos; Dreams
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
