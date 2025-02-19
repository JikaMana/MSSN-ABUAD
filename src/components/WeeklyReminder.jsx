import React from "react";
import { Book } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeeklyReminder = () => {
  const reminders = [
    {
      type: "Hadith",
      content:
        "The best among you are those who learn the Quran and teach it to others.",
      source: "Sahih Al-Bukhari",
    },
    {
      type: "Verse",
      content: "Indeed, Allah is with those who are patient.",
      source: "Quran 2:153",
    },
    {
      type: "Hadith",
      content:
        "The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.",
      source: "Sahih Muslim",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Book className="text-primary" size={24} />
        <h2 className="text-2xl font-bold">Weekly Reminders</h2>
      </div>

      <Slider {...settings}>
        {reminders.map((reminder, index) => (
          <div key={index} className="px-4">
            <div className="text-center space-y-4 py-8">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full">
                {reminder.type}
              </span>
              <p className="text-xl md:text-2xl font-arabic">
                {reminder.content}
              </p>
              <p className="text-gray-600 italic">- {reminder.source}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WeeklyReminder;
