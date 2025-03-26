import React from "react";
import Hero from "../components/Hero";
import PrayerTimes from "../components/PrayerTimes";
import WeeklyReminder from "../components/WeeklyReminder";
import LocationMap from "../components/LocationMap";
import FeaturedPrograms from "../components/FeaturedPrograms";
import RamadanSection from "../components/RamadanSection";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="space-y-16 pb-16">
      <Hero />

      <section className="container">
        <PrayerTimes />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container">
          <WeeklyReminder />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-center">Our Programs</h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            At MSSN ABUAD, we offer a variety of programs designed to enhance
            your spiritual growth and Islamic knowledge. Join us in our journey
            of learning and community building.
          </p>
          <FeaturedPrograms />
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <RamadanSection />
        </div>
      </section>

      <section className="container">
        <LocationMap />
      </section>

      <section className="bg-primary">
        <div className="container">{/* <Contact /> */}</div>
      </section>
    </div>
  );
};

export default Home;
