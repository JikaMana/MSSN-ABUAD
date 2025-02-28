import React, { useState } from "react";

const PrayerTimes = () => {
  const [salah, setSalah] = useState({
    subhAdhan: "",
    subhIqama: "",
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

  const handlePrayerUpdate = (e) => {
    const { name, value } = e.target;

    setSalah((prevSalah) => ({
      ...prevSalah,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(salah);

    if (
      salah.subhAdhan ||
      salah.subhIqama ||
      salah.dhuhrIqama ||
      salah.dhuhrAdhan ||
      salah.asrAdhan ||
      salah.asrIqama ||
      salah.maghribAdhan ||
      salah.maghribIqama ||
      salah.ishaAdhan ||
      salah.ishaIqama ||
      salah.jumuahAdhan ||
      salah.jumuahIqama
    ) {
      alert("Prayer Time Updated Succesfully");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        Manage Prayer Times
      </h2>
      <p className="text-gray-600 mb-8">
        Update the daily prayer times below. Changes will reflect on the main
        site immediately.
      </p>
      <form className="w-full space-y-4" onSubmit={handleFormSubmit}>
        {/* Subhi */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-xl text-primary-dark">
            Subhi
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Adhan</label>
              <input
                type="time"
                name="subhAdhan"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.subhAdhan}
                onChange={handlePrayerUpdate}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Iqama</label>

              <input
                type="time"
                name="subhIqama"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.subhIqama}
                onChange={handlePrayerUpdate}
              />
            </div>
          </div>
        </div>
        {/* Dhuhr */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium  text-xl text-primary-dark">
            Dhuhr
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Adhan</label>
              <input
                type="time"
                name="dhuhrAdhan"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.dhuhrAdhan}
                onChange={handlePrayerUpdate}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Iqama</label>

              <input
                type="time"
                name="dhuhrIqama"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.dhuhrIqama}
                onChange={handlePrayerUpdate}
              />
            </div>
          </div>
        </div>
        {/* Asr */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium  text-xl text-primary-dark">
            Asr
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Adhan</label>
              <input
                type="time"
                name="asrAdhan"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.asrAdhan}
                onChange={handlePrayerUpdate}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Iqama</label>

              <input
                type="time"
                name="asrIqama"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.asrIqama}
                onChange={handlePrayerUpdate}
              />
            </div>
          </div>
        </div>
        {/* Maghrib */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium  text-xl text-primary-dark">
            Maghrib
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Adhan</label>
              <input
                type="time"
                name="maghribAdhan"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.maghribAdhan}
                onChange={handlePrayerUpdate}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Iqama</label>

              <input
                type="time"
                name="maghribIqama"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.maghribIqama}
                onChange={handlePrayerUpdate}
              />
            </div>
          </div>
        </div>
        {/* Isha */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium  text-xl text-primary-dark">
            Isha
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Adhan</label>
              <input
                type="time"
                name="ishaAdhan"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.ishaAdhan}
                onChange={handlePrayerUpdate}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Iqama</label>

              <input
                type="time"
                name="ishaIqama"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.ishaIqama}
                onChange={handlePrayerUpdate}
              />
            </div>
          </div>
        </div>
        {/* Optional Jumuah */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium  text-xl text-primary-dark">
            Jumuah (Optional)
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Adhan</label>
              <input
                type="time"
                name="jumuahAdhan"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.jumuahAdhan}
                onChange={handlePrayerUpdate}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 font-medium text-gray-700">Iqama</label>

              <input
                type="time"
                name="jumuahIqama"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={salah.jumuahIqama}
                onChange={handlePrayerUpdate}
              />
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Update Prayer Times
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrayerTimes;
