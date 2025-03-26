import React from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual Qur'an Competition",
      date: "2024-04-15",
      time: "10:00 AM",
      location: "MSSN Mosque, ABUAD",
      description:
        "Join us for our annual Qur'an competition featuring different categories and amazing prizes.",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      title: "Islamic Leadership Workshop",
      date: "2024-04-20",
      time: "2:00 PM",
      location: "College of Engineering Auditorium",
      description:
        "A workshop on developing leadership skills from an Islamic perspective.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>

        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                  <p className="text-gray-600 mb-6">{event.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={20} className="text-primary" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={20} className="text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={20} className="text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={20} className="text-primary" />
                      Open to {"all members"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
