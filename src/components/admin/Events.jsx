import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    date: "",
    time: "",
    summary: "",
    availability: "All members",
    image_url: "",
  });

  // Fetch events from backend
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
  }, [events]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("auth_token");
      await axios.post("http://127.0.0.1:5000/api/events", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Refresh events list
      const response = await axios.get("http://127.0.0.1:5000/api/events");
      setEvents(response.data);
      setShowModal(false);
      setFormData({
        title: "",
        summary: "",
        content: "",
        date: "",
        time: "",
        availability: "All members",
        image_url: "",
      });
    } catch (error) {
      console.error("Error adding event:", error);
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  const deleteEvent = async (id) => {
    try {
      const token = localStorage.getItem("auth_token");
      await axios.delete(`http://127.0.0.1:5000/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Events Management</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Add New Event
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        This section allows you to create, update, or delete events.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-lg p-4">
            {event.image_url && (
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full h-40 object-cover rounded"
              />
            )}
            <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
            <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
            </div>
            <p className="text-gray-600 mt-3"> Location: {event.summary}</p>
            <p className="text-right">Open to: {event.availability}</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded"
                onClick={() => deleteEvent(event.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Add New Event</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Event Title*</label>
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
                <label className="block text-gray-700 mb-1">
                  Event Content*
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded min-h-[200px]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">
                    Event Date*
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Event Time*
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Event Location*
                </label>
                <input
                  type="text"
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Availability*
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="All members">All members</option>
                  <option value="Male members only">Male members only</option>
                  <option value="Female members only">
                    Female members only
                  </option>
                  <option value="Executives only">Executives only</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleInputChange}
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
      )}
    </div>
  );
};

export default Events;
