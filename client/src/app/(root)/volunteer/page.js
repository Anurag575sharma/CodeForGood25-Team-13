"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Thank you for volunteering!");
      setFormData({ name: "", email: "", phone: "", area: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-[#F0EBD8] text-[#0D1321]">
      {/* Hero */}
      <section className="bg-[#F0EBD8] text-[#0D1321] py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Become a <span className="text-yellow-400">Volunteer</span></h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join the Kalam Foundation to empower communities through education, compassion, and service.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-[#1D2D44]">Volunteer Form</h2>

          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5C76]"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5C76]"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5C76]"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Area of Interest</label>
            <select
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5C76]"
            >
              <option value="">Select</option>
              <option value="teaching">Teaching</option>
              <option value="skill-training">Skill Training</option>
              <option value="events">Event Support</option>
              <option value="outreach">Community Outreach</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Why do you want to volunteer?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5C76]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-[#3E5C76] hover:bg-[#1D2D44] text-white font-semibold px-6 py-3 rounded-md transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Form"}
            <Send className="ml-2 h-5 w-5" />
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-[#1D2D44]">Contact Us</h2>
          <div className="flex items-start space-x-3">
            <Mail className="h-6 w-6 text-[#3E5C76]" />
            <div>
              <p className="font-medium">Email</p>
              <p>volunteer@kalamfoundation.org</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="h-6 w-6 text-[#3E5C76]" />
            <div>
              <p className="font-medium">Phone</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="h-6 w-6 text-[#3E5C76]" />
            <div>
              <p className="font-medium">Office</p>
              <p>Sector 21, New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="px-6 pb-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#1D2D44]">Find Us</h2>
        <iframe
          className="w-full h-80 rounded-lg border border-gray-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.123929361155!2d77.21672165!3d28.6448002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd12fc7e9ab9%3A0xabcdef123456789!2sKalam%20Foundation!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen=""
          loading="lazy"
          title="Kalam Foundation Location"
        ></iframe>
      </section>
    </div>
  );
}
