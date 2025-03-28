import React, { useState, useEffect } from "react";
import { Clock, RefreshCw } from "lucide-react";
import { format } from "date-fns";
import prayerIcon from "../assets/images/prayer.webp";
import adhanIcon from "../assets/images/adhan.webp";
import iqamaIcon from "../assets/images/iqama.webp";
import dawnIcon from "../assets/images/dawn.png";
import noonIcon from "../assets/images/noon.png";
import afternoonIcon from "../assets/images/afternoon.png";
import sunsetIcon from "../assets/images/sunset.png";
import nightIcon from "../assets/images/night.png";
import jumuahIcon from "../assets/images/jumuah.png";
import axios from "axios";

const PrayerTimes = () => {
  const [prayerData, setPrayerData] = useState(null);
  const [mosqueTimes, setMosqueTimes] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch prayer times from API using coordinate
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const latitude = 7.6057065;
        const longitude = 5.3091123;

        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${
            Date.now() / 1000
          }?latitude=${latitude}&longitude=${longitude}&method=1`
        );
        const data = await response.json();
        setPrayerData(data.data.timings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
    const interval = setInterval(fetchPrayerTimes, 300000);
    return () => clearInterval(interval);
  }, []);

  // Fetch prayer times from your backend
  useEffect(() => {
    const fetchMosqueTimes = async () => {
      try {
        // Add timestamp to URL to prevent caching
        const response = await axios.get(
          `https://mssn-abuad.onrender.com/api/prayer-times?t=${Date.now()}`
        );
        setMosqueTimes(response.data);
      } catch (error) {
        console.error("Error getting mosque prayer times:", error);
      }
    };
    fetchMosqueTimes();
  }, []); // Keep empty dependency array for initial load

  // Add manual refresh function
  const handleRefresh = () => {
    window.location.reload(); // Full page reload to ensure fresh data
  };

  // Format time display
  const formatTime = (timeStr) => {
    if (!timeStr) return "-";
    return format(new Date(`2024-01-01T${timeStr}`), "HH:mm");
  };

  // Create prayer time cards
  const prayerCards = [
    {
      name: "Fajr",
      icon: dawnIcon,
      adhan: mosqueTimes?.fajr?.adhan,
      iqama: mosqueTimes?.fajr?.iqama,
    },
    {
      name: "Dhuhr",
      icon: noonIcon,
      adhan: mosqueTimes?.dhuhr?.adhan,
      iqama: mosqueTimes?.dhuhr?.iqama,
    },
    {
      name: "Asr",
      icon: afternoonIcon,
      adhan: mosqueTimes?.asr?.adhan,
      iqama: mosqueTimes?.asr?.iqama,
    },
    {
      name: "Maghrib",
      icon: sunsetIcon,
      adhan: mosqueTimes?.maghrib?.adhan,
      iqama: mosqueTimes?.maghrib?.iqama,
    },
    {
      name: "Isha",
      icon: nightIcon,
      adhan: mosqueTimes?.isha?.adhan,
      iqama: mosqueTimes?.isha?.iqama,
    },
    {
      name: "Jumu'ah",
      icon: jumuahIcon,
      adhan: mosqueTimes?.jumuah?.adhan,
      iqama: mosqueTimes?.jumuah?.iqama,
    },
  ];

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-primary" size={24} />
        <h2 className="text-2xl md:text-3xl font-bold">Prayer Times</h2>
      </div>
      <button
        onClick={handleRefresh}
        className="ml-auto flex items-center gap-2 text-primary hover:text-primary-dark"
      >
        <RefreshCw size={20} />
        <span>Refresh</span>
      </button>
      <div className="hidden md:block bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-4">
        <h2 className="text-xl font-medium mb-4 text-center">
          Prayer Time by Coordinates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {prayerData &&
            Object.entries(prayerData)
              .filter(([name]) =>
                ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].includes(name)
              )
              .map(([name, time]) => (
                <div
                  key={name}
                  className="bg-gray-50 rounded-lg p-4 text-center"
                >
                  <h3 className="font-arabic text-lg mb-2">{name}</h3>
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
                    </div>
                  ) : (
                    <p className="text-xl font-semibold text-primary">
                      {format(new Date(`2024-01-01 ${time}`), "HH:mm")}
                    </p>
                  )}
                </div>
              ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="lg:flex flex-row-reverse gap-x-8">
          <div className="flex-[0.45] overflow-x-scroll scrollbar-hidden">
            <h2 className="text-2xl font-medium mb-4 text-center">
              Mosque Prayer Schedule
            </h2>
            <table className="min-w-full bg-white border-separate border-spacing-y-4">
              <thead>
                <tr>
                  <th className="px-4">
                    <img
                      src={prayerIcon}
                      alt="Prayer Icon"
                      className="w-16 mx-auto mb-2"
                    />
                    <p className="text-lg font-bold">Prayer</p>
                  </th>
                  <th className="px-4">
                    <img
                      src={adhanIcon}
                      alt="Adhan Icon"
                      className="w-16 mx-auto mb-2"
                    />
                    <p className="text-lg font-bold">Adhan</p>
                  </th>
                  <th className="px-4">
                    <img
                      src={iqamaIcon}
                      alt="Iqama Icon"
                      className="w-16 mx-auto mb-2"
                    />
                    <p className="text-lg font-bold">Iqama</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {prayerCards.map((prayer, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-center font-medium border-2 rounded-md">
                      <div className="flex items-center gap-2 justify-center">
                        <img
                          src={prayer.icon}
                          alt={`${prayer.name} icon`}
                          className="w-6 h-6"
                        />
                        {prayer.name}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center font-medium border-2 rounded-md">
                      {formatTime(prayer.adhan)}
                    </td>
                    <td className="px-4 py-2 text-center font-medium border-2 rounded-md">
                      {formatTime(prayer.iqama)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-[0.55] mt-8 lg:mt-24">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Encourage yourselves to pray on time:
              </h3>
              <article className="text-lg mb-4">
                Narrated Ibn Mas`ud: A man asked the Prophet (ﷺ) "What deeds are
                the best?" The Prophet (ﷺ) said: "(1) To perform the (daily
                compulsory) prayers at their (early) stated fixed times, (2) to
                be good and dutiful to one's own parents, (3) and to participate
                in Jihad in Allah's Cause."
              </article>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Encourage yourselves to pray in congregation:
              </h3>
              <article className="text-lg">
                Abu Hurairah (May Allah be pleased with him) reported: The
                Messenger of Allah ﷺ said, "A man's Salat in congregation is
                twenty-five times more rewarding than his Salat at home or in
                his shop..."
                <br />
                [Al-Bukhari and Muslim].
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;
