import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const EXCOS = [
    { name: "Abdullahi Muhammad", position: "Ameer" },
    { name: "Raphat Atoyebi", position: "Ameerah" },
    { name: "Ameenullah", position: "Na'eebul Ameer" },
    { name: "Muslim Rikiji", position: "Na'eebul Ameer (D)" },
    { position: "Editor in Chief", name: "Abdurraqeeb Shittu" },
    { name: "Unknown", position: "*******" },
  ];

  return (
    <div className="pt-12 pb-8 mx-6 md:mx-8">
      <div className="max-w-2xl text-white">
        <h2 className="text-3xl font-bold mb-6">Meet Our EXCO</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          corporis cupiditate excepturi dicta quae deleniti voluptates.
        </p>
      </div>
      <div className="mt-12 md:mt-16 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-16 w-full justify-items-center py-8">
          {EXCOS.map((exco, i) => (
            <div
              key={i}
              className="relative h-48 max-w-64 w-full bg-primary-light rounded-2xl hover:cursor-move flex flex-col"
            >
              {/* <img
              src={/image.jpeg}
              alt="Ameer"
              className="w-full rounded-2xl overflow-hidden"
            /> */}
              <User size="100%" />
              <div className="text-center rounded-md px-4 py-2">
                <h3 className="text-xl text-white font-medium whitespace-nowrap">
                  {exco.name}
                </h3>
                <p className="text-lg text-white whitespace-nowrap">
                  {exco.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className="bg-white text-primary rounded-md font-medium px-4 py-3 whitespace-nowrap "
          disabled
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Contact;
