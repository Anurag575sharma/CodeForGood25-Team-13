import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] px-40 py-16 border-t text-gray-700 rounded-t-4xl">
      {/* Top CTA Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold max-w-xl">
          Join hands with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Kalam Foundation
          </span>{" "}
          to create a brighter future
        </h2>
        <div className="mt-6 md:mt-0 flex flex-col items-center">
          <Button
            href="#"
            className="hover:bg-[#1D2D44] bg-[#3E5C76] text-white px-12 py-6 text-lg"
          >
            ✨ Get Involved
          </Button>
          <p className="text-gray-500 mt-2">
            Volunteer, Donate, or Partner with us today.
          </p>
        </div>
      </div>

      <hr className="border-gray-200 mb-12" />

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-semibold text-black mb-4">Our Work</h4>
          <ul className="space-y-2">
            <li>Education Programs</li>
            <li>Women Empowerment</li>
            <li>Skill Development</li>
            <li>Community Outreach</li>
            <li>Innovation Labs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-4">Get Involved</h4>
          <ul className="space-y-2">
            <li>Volunteer</li>
            <li>Donate</li>
            <li>Partner with Us</li>
            <li>Internships</li>
            <li>Events & Workshops</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>Annual Reports</li>
            <li>Success Stories</li>
            <li>Media Gallery</li>
            <li>Press Kit</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-16 text-gray-500">
        &copy; {new Date().getFullYear()} Kalam Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;