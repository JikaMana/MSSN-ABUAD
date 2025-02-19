import React from "react";
import {
  BookOpen,
  Users,
  Award,
  Fuel as Mosque,
  BookAudio,
  Book,
} from "lucide-react";
import { motion } from "framer-motion";

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "Qur'an Teaching",
      description:
        "Learn Qur'an with proper tajweed from qualified instructors",
      icon: BookOpen,
      time: "Weekdays, 6:00 PM",
    },
    {
      title: "Sunday Program",
      description: "Weekly Islamic lectures and discussions on various topics",
      icon: Users,
      time: "Sundays, 10:00 AM",
    },
    {
      title: "Qur'an Competition",
      description: "Annual competition to encourage Qur'an memorization",
      icon: Award,
      time: "Yearly Event",
    },
    {
      title: "Tajweed Classes",
      description: "Learn the proper rules of Qur'anic recitation",
      icon: Book,
      time: "Saturdays, 2:00 PM",
    },
    {
      title: "Hadith/Fiqh Reminders",
      description:
        "Learn about some Ahadith and some books of Fiqh(Umdat Al Ahkam)",
      icon: Book,
      time: "Any day After Subh and Isha",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {programs.map((program, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <program.icon className="text-primary" size={24} />
          </div>

          <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
          <p className="text-gray-600 mb-8">{program.description}</p>

          <div className="text-sm text-primary font-medium absolute bottom-4">
            {program.time}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedPrograms;
