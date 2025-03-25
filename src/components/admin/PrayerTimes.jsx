import React, { useState, useEffect } from "react";
import axios from "axios";

const PrayerTimesAdmin = () => {
  const [date, setDate] = useState("");
  const [isExistingDate, setIsExistingDate] = useState(false);
  const [formData, setFormData] = useState({
    fajrAdhan: "",
    fajrIqama: "",
    dhuhrAdhan: "",
    dhuhrIqama: "",
    asrAdhan: "",
    asrIqama: "",
    maghribAdhan: "",
    maghribIqama: "",
    ishaAdhan: "",
    ishaIqama: "",
    jumuahAdhan: "",
    jumuahIqama: "",
  });

  // Fetch prayer times when date changes
  useEffect(() => {
    const fetchTimes = async () => {
      if (!date) return;

      try {
        const token = localStorage.getItem("auth_token");
        const response = await axios.get(
          `http://127.0.0.1:5000/api/prayer-times/${date}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data) {
          setFormData({
            fajrAdhan: response.data.fajr.adhan,
            fajrIqama: response.data.fajr.iqama,
            dhuhrAdhan: response.data.dhuhr.adhan,
            dhuhrIqama: response.data.dhuhr.iqama,
            asrAdhan: response.data.asr.adhan,
            asrIqama: response.data.asr.iqama,
            maghribAdhan: response.data.maghrib.adhan,
            maghribIqama: response.data.maghrib.iqama,
            ishaAdhan: response.data.isha.adhan,
            ishaIqama: response.data.isha.iqama,
            jumuahAdhan: response.data.jumuah?.adhan || "",
            jumuahIqama: response.data.jumuah?.iqama || "",
          });
          setIsExistingDate(true);
        }
      } catch (error) {
        if (error.response?.status === 404) {
          setFormData({
            ...formData,
            fajrAdhan: "",
            fajrIqama: "",
            dhuhrAdhan: "",
            dhuhrIqama: "",
            asrAdhan: "",
            asrIqama: "",
            maghribAdhan: "",
            maghribIqama: "",
            ishaAdhan: "",
            ishaIqama: "",
            jumuahAdhan: "",
            jumuahIqama: "",
          });
          setIsExistingDate(false);
        }
      }
    };

    fetchTimes();
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("auth_token");
      const url = isExistingDate
        ? `http://127.0.0.1:5000/api/prayer-times/${date}`
        : "http://127.0.0.1:5000/api/prayer-times";
      const method = isExistingDate ? "put" : "post";

      await axios[method](url, {
        date,
        fajr_adhan: formData.fajrAdhan,
        fajr_iqama: formData.fajrIqama,
        dhuhr_adhan: formData.dhuhrAdhan,
        dhuhr_iqama: formData.dhuhrIqama,
        asr_adhan: formData.asrAdhan,
        asr_iqama: formData.asrIqama,
        maghrib_adhan: formData.maghribAdhan,
        maghrib_iqama: formData.maghribIqama,
        isha_adhan: formData.ishaAdhan,
        isha_iqama: formData.ishaIqama,
        jumuah_adhan: formData.jumuahAdhan,
        jumuah_iqama: formData.jumuahIqama,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Prayer times saved successfully!");
    } catch (error) {
      console.error("Error saving prayer times:", error);
      alert("An error occurred while saving");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">Manage Prayer Times</h2>
      <p className="text-gray-600 mb-8">
        Select date and update prayer times. Changes will reflect immediately on the user side.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
       

        {/* Fajr Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Fajr Adhan</label>
          <input
            type="time"
            name="fajrAdhan"
            value={formData.fajrAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Fajr Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Fajr Iqama</label>
          <input
            type="time"
            name="fajrIqama"
            value={formData.fajrIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Dhuhr Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Dhuhr Adhan</label>
          <input
            type="time"
            name="dhuhrAdhan"
            value={formData.dhuhrAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Dhuhr Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Dhuhr Iqama</label>
          <input
            type="time"
            name="dhuhrIqama"
            value={formData.dhuhrIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Asr Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Asr Adhan</label>
          <input
            type="time"
            name="asrAdhan"
            value={formData.asrAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Asr Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Asr Iqama</label>
          <input
            type="time"
            name="asrIqama"
            value={formData.asrIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Maghrib Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Maghrib Adhan</label>
          <input
            type="time"
            name="maghribAdhan"
            value={formData.maghribAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

        </div>

        {/* Maghrib Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Maghrib Iqama</label>
          <input
            type="time"
            name="maghribIqama"
            value={formData.maghribIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
         
         
          </div>
        </div>

        {/* Isha Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Isha Adhan</label>
          <input
            type="time"
            name="ishaAdhan"
            value={formData.ishaAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

        </div>

        {/* Isha Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Isha Iqama</label>
          <input
            type="time"
            name="ishaIqama"
            value={formData.ishaIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

        </div>

        {/* Jumu'ah Adhan (Optional) */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Jumu'ah Adhan (Optional)</label>
          <input
            type="time"
            name="jumuahAdhan"
            value={formData.jumuahAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

        </div>

        {/* Jumu'ah Iqama (Optional) */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Jumu'ah Iqama (Optional)</label>
          <input
            type="time"
            name="jumuahIqama"
            value={formData.jumuahIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

        </div>
         {/* Date Picker */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-2 font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {isExistingDate ? "Update Prayer Times" : "Create Prayer Times"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrayerTimesAdmin;