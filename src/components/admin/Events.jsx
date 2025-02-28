import React, { useState } from "react";

const Events = () => {
  const [OurEvents, setOurEvents] = useState([
    {
      id: 1,
      title: "Annual Charity Dinner",
      description:
        "A special event to raise funds and support community projects.",
      date: "2024-04-15",
      image: "https://via.placeholder.com/500x300?text=Event+1",
    },
    {
      id: 2,
      title: "Islamic Lecture Series",
      description:
        "An enlightening series of lectures on Islamic history and ethics.",
      date: "2024-05-10",
      image: "https://via.placeholder.com/500x300?text=Event+2",
    },

    {
      id: 3,
      title: "Interfaith Dialogue",
      description:
        "An event promoting understanding and harmony among different faiths.",
      date: "2024-06-05",
      image: "https://via.placeholder.com/500x300?text=Event+4",
    },
    // {
    //   id: 3,
    //   title: "Community Iftar",
    //   description:
    //     "Join us for a community iftar to break the fast together during Ramadan.",
    //   date: "2024-04-20",
    //   image: "https://via.placeholder.com/500x300?text=Event+3",
    // author: Abdullah
    // approxTime: 5 min read
    // },
  ]);

  const deleteItem = (eventID) => {
    setOurEvents(OurEvents.filter((events) => events.id !== eventID));
  };
  console.log(OurEvents);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Events Management</h2>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Add New Event
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        This section allows you to create, update, or delete events.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OurEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-lg p-4">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
            <p className="text-gray-600 mt-2">{event.description}</p>
            <p className="text-gray-500 text-sm mt-2">Date: {event.date}</p>
            <div className="mt-4 flex justify-end gap-2">
              {/* <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded">
                Edit
              </button> */}
              <button
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded"
                onClick={() => deleteItem(event.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
