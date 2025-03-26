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
      {/* {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Add New Blog Post</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Title*</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Author*</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Summary (max 500 chars)*
                </label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  maxLength={500}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Event Content*
                </label>
                <textarea
                  name="blog"
                  // value={formData.blog}
                  // onChange={handleInputChange}
                  className="w-full p-2 border rounded min-h-[200px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  // value={formData.image_url}
                  // onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Add Event 
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Events;
