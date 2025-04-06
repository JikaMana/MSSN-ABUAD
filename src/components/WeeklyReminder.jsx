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
    {
      type: "Verse",
      content: "And remind, for indeed, the reminder benefits the believers.",
      source: "Quran 51:55",
    },
    {
      type: "Hadith",
      content:
        "Whoever seeks forgiveness for every male and female believer, Allah will record a good deed for him for every male and female believer.",
      source: "Hadith",
    },
    {
      type: "Verse",
      content:
        "Do not falter or grieve, for you will have the upper hand, if you are true believers.",
      source: "Quran 3:139",
    },
    {
      type: "Hadith",
      content:
        "Verily, the five prayers get rid of sins just as water gets rid of dirt.",
      source: "Sahih Muslim",
    },
    {
      type: "Verse",
      content: "Call upon Me; I will respond to you.",
      source: "Quran 40:60",
    },
    {
      type: "Hadith",
      content:
        "When the son of Adam dies, his deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for him.",
      source: "Sahih Muslim",
    },
    {
      type: "Verse",
      content:
        "And whoever puts their trust in Allah, then He will suffice them.",
      source: "Quran 65:3",
    },
    {
      type: "Hadith",
      content:
        "Allah does not look at your appearance or wealth, but He looks at your hearts and actions.",
      source: "Sahih Muslim",
    },
    {
      type: "Verse",
      content: "And whoever fears Allah – He will make for him a way out.",
      source: "Quran 65:2",
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
        <h2 className="text-2xl font-bold">Reminders</h2>
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
