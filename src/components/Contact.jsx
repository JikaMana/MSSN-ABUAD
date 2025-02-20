import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const EXCOS = [
    { name: "Abdullahi Muhammad", position: "Ameer" },
    { name: "Ameenullah", position: "Na'eebul Ameer" },
    { name: "Muslim Rikiji", position: "Na'eebul Ameer (Chief Imam)" },
    { name: "Unknown", position: "Ameerah" },
    { name: "Unknown", position: "*******" },
    { name: "Unknown", position: "*******" },
  ];

  return (
    <div className="pt-12 pb-8 mx-6 md:mx-8">
      <div className="flex justify-between items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-3xl font-bold mb-6">Meet Our EXCO</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            corporis cupiditate excepturi dicta quae deleniti voluptates.
          </p>
        </div>
        <Link
          to="/"
          className="bg-white text-primary rounded-md font-medium px-4 py-3 whitespace-nowrap"
          disabled
        >
          View More
        </Link>
      </div>
      <div className="mt-12 md:mt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 w-full">
          {EXCOS.map((exco, i) => (
            <div
              key={i}
              className="relative h-48 w-48 bg-primary-light rounded-2xl"
            >
              {/* <img
              src="/image.jpeg"
              alt="Ameer"
              className="w-full rounded-2xl overflow-hidden"
            /> */}
              <User size="100%" />
              <div className="text-center absolute  -top-8 left-24 bg-white rounded-md px-4 py-2">
                <h3 className="text-xl font-medium text-primary-dark whitespace-nowrap">
                  {exco.name}
                </h3>
                <p className="text-lg text-primary-light whitespace-nowrap">
                  {exco.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
