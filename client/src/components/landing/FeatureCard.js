import React from "react";
import SpotlightCard from "./SpotlightCard";
import Image from "next/image";

const FeatureCard = ({title, subtitle, image}) => {
  return (
    <SpotlightCard className="max-w-sm w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Image at the top */}
      <div className="relative w-full h-64">
        <Image
          src={image} // Replace with your actual image path
          alt="Transferring Visual"
        width={700}
        height={700}
          className="rounded-2xl"
        />
      </div>

      {/* Text section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {subtitle}
        </p>
      </div>
    </SpotlightCard>
  );
};

export default FeatureCard;
