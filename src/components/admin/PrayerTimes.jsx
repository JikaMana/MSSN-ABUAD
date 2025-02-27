import React from "react";

const PrayerTimes = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        Manage Prayer Times
      </h2>
      <p className="text-gray-600 mb-8">
        Update the daily prayer times below. Changes will reflect on the main
        site immediately.
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fajr */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Fajr</label>
          <input
            type="time"
            name="fajr"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* Dhuhr */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Dhuhr</label>
          <input
            type="time"
            name="dhuhr"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* Asr */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Asr</label>
          <input
            type="time"
            name="asr"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* Maghrib */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Maghrib</label>
          <input
            type="time"
            name="maghrib"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* Isha */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Isha</label>
          <input
            type="time"
            name="isha"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* Optional Jumuah */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">
            Jumuah (Optional)
          </label>
          <input
            type="time"
            name="jumuah"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
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
