import React from "react";
import FeaturedPrograms from "../components/FeaturedPrograms";

const Programs = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Our Programs</h1>
        <p className="text-lg text-gray-600 mb-12">
          At MSSN ABUAD, we offer a variety of programs designed to enhance your
          spiritual growth and Islamic knowledge. Join us in our journey of
          learning and community building.
        </p>
        <FeaturedPrograms />
      </div>
    </div>
  );
};

export default Programs;
