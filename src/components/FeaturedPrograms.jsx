import React from "react";
import { BookOpen, Users, Award, Book, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "Sunday Program",
      description: "Weekly Islamic lectures and discussions on various topics",
      icon: Users,
      time: "Sundays( 10:00/11:00 AM to Dhuhr)",
    },

    {
      title: "Qur'an Teaching",
      description: "Learn the Holy Qur'an either by Heart or  Recitation",
      icon: BookOpen,
      time: "Weekdays (Maghrib to Isha)",
    },
    {
      title: "Tajweed Classes",
      description:
        "    Learn Qur'an with proper tajweed from qualified instructors",
      icon: BookOpen,
      time: "Weekdays (Maghrib to Isha)",
    },
    {
      title: "Hadith Classes",
      description: "Learn about some Ahadith",
      icon: Book,
      time: "Any day (Subh and Isha)",
    },
    {
      title: "Sisters Circle",
      description: "Learn about matters/issue related to muslim female affairs",
      icon: Users,
      time: "Saturdays (Asr to Maghrib)",
    },
    {
      title: "Fiqh Reminders",
      description: "Learn about some books of Fiqh(e.g Umdat Al Ahkam)",
      icon: Book,
      time: "Any day (Subh and Isha)",
    },

    {
      title: "Qur'an Competition",
      description: "Annual competition to encourage Qur'an memorization",
      icon: Award,
      time: "Yearly / Bi-annual Event",
    },

    {
      title: "Sports week",
      description: "Football Training(Male)",
      icon: Trophy,
      time: "Sceduled by MSSN brothers agreement",
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
