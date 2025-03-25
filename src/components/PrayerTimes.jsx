import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
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

const PrayerTimes = () => {
  const [prayerData, setPrayerData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch prayer times from your backend
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/prayer-times/latest");
        const data = await response.json();
        setPrayerData(data);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();

    // Poll every 5 minutes
    const interval = setInterval(fetchPrayerTimes, 300000);
    return () => clearInterval(interval);
  }, []);

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
      adhan: prayerData?.fajr?.adhan,
      iqama: prayerData?.fajr?.iqama
    },
    {
      name: "Dhuhr",
      icon: noonIcon,
      adhan: prayerData?.dhuhr?.adhan,
      iqama: prayerData?.dhuhr?.iqama
    },
    {
      name: "Asr",
      icon: afternoonIcon,
      adhan: prayerData?.asr?.adhan,
      iqama: prayerData?.asr?.iqama
    },
    {
      name: "Maghrib",
      icon: sunsetIcon,
      adhan: prayerData?.maghrib?.adhan,
      iqama: prayerData?.maghrib?.iqama
    },
    {
      name: "Isha",
      icon: nightIcon,
      adhan: prayerData?.isha?.adhan,
      iqama: prayerData?.isha?.iqama
    },
    {
      name: "Jumu'ah",
      icon: jumuahIcon,
      adhan: prayerData?.jumuah?.adhan,
      iqama: prayerData?.jumuah?.iqama
    },
  ];

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-primary" size={24} />
        <h2 className="text-2xl md:text-3xl font-bold">Prayer Times</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-4">
        <h2 className="text-xl font-medium mb-4 text-center">
          Prayer Times for {prayerData?.date || "Loading..."}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {prayerCards.map((prayer, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <img
                src={prayer.icon}
                alt={`${prayer.name} icon`}
                className="w-12 mx-auto mb-2"
              />
              <h3 className="font-arabic text-lg mb-2">{prayer.name}</h3>
              {loading ? (
                <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
              ) : (
                <>
                  <p className="text-sm text-gray-600">Adhan</p>
                  <p className="text-xl font-semibold text-primary mb-2">
                    {formatTime(prayer.adhan)}
                  </p>
                  <p className="text-sm text-gray-600">Iqama</p>
                  <p className="text-xl font-semibold text-primary">
                    {formatTime(prayer.iqama)}
                  </p>
                </>
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
                Messenger of Allah ﷺ said, “A man’s Salat in congregation is
                twenty-five times more rewarding than his Salat at home or in
                his shop..."
                <br />[Al-Bukhari and Muslim].
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;