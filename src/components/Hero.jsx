import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-[50%_30%]"
        style={{
          backgroundImage: 'url("/heroBanner.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-white container"
        >
          <h1 className="text-5xl xl:text-6xl max-w-4xl leading-loose font-bold mb-6 bg-gradient-to-r from-[#3d3532] to-[#be882c] bg-clip-text text-transparent">
            In the Name of Allah The Creator of the Universe
          </h1>
          <p className="text-2xl mb-8 text-[#826a41] max-w-4xl">
            Uniting Muslim students in faith, knowledge, and community. Join us
            in our journey of spiritual growth and academic excellence.
          </p>

          <div className="flex gap-4">
            <Link
              to="/about"
              className="btn btn-primary flex items-center gap-2 cursor-pointer"
            >
              About MSSN
              <ChevronRight size={20} />
            </Link>
            <Link
              to="/about"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-primary"
            >
              MSSN ABUAD
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
