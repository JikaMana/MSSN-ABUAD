import React, { useEffect, useState } from "react";
import { Calendar, Clock, Users, MapPinIcon } from "lucide-react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);
  console.log(events);

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
                {event.image_url && (
                  <div className="md:w-1/3">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                  <p className="text-gray-600 mb-6">{event.content}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={20} className="text-primary" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={20} className="text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPinIcon size={20} className="text-primary" />
                      {event.summary}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={20} className="text-primary" />
                      {event.availability}
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
