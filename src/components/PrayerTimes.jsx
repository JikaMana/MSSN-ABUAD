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
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);

  const salahTime = [
    { name: "Fajr", icon: dawnIcon, adhan: "5:45", iqama: "5:55" },
    { name: "Dhuhr", icon: noonIcon, adhan: "12:55", iqama: "13:05" },
    { name: "Asr", icon: afternoonIcon, adhan: "16:15", iqama: "16:25" },
    { name: "Maghrib", icon: sunsetIcon, adhan: "18:52", iqama: "18:57" },
    { name: "Isha", icon: nightIcon, adhan: "19:55", iqama: "20:05" },
    { name: "Jumu'ah", icon: jumuahIcon, adhan: "13:00", iqama: "13:30" },
  ];

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        // actual coordinates for ABUAD MOSQUE
        const latitude = 7.6057065;
        const longitude = 5.3091123;

        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${
            Date.now() / 1000
          }?latitude=${latitude}&longitude=${longitude}&method=1`
        );
        const data = await response.json();
        setPrayerTimes(data.data.timings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-primary" size={24} />
        <h2 className="text-2xl md:text-3xl font-bold">Prayer Times</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-4">
        <h2 className="text-xl font-medium mb-4 text-center">
          Prayer Time by Coordinates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {prayerTimes &&
            Object.entries(prayerTimes)
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
            <h2 className="text-2xl font-medium mb-4 text-center ">
              Time we pray in Mosque
            </h2>
            <table className="min-w-full bg-white border-separate border-spacing-y-4 overflow-x-scroll">
              <thead className="">
                <tr>
                  <th className="px-4">
                    <img
                      src={prayerIcon}
                      alt="Prayer Icon"
                      className="w-16 mx-auto mb-2"
                    />
                    <p className="whitespace-nowrap text-lg font-black">
                      Name of Prayer
                    </p>
                  </th>
                  <th className="px-4">
                    <img
                      src={adhanIcon}
                      alt="Adhan Icon"
                      className="w-16 mx-auto mb-2"
                    />
                    <p className="whitespace-nowrap text-lg font-black">
                      Adhan Time
                    </p>
                  </th>
                  <th className="px-4">
                    <img
                      src={iqamaIcon}
                      alt="Iqama Icon"
                      className="w-16 mx-auto mb-2"
                    />
                    <p className="whitespace-nowrap text-lg font-black">
                      Iqama Time
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {salahTime.map((time, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap text-lg text-center font-medium border-2 shadow-md rounded-md">
                      <div className="flex items-center ml-4 gap-4">
                        <img
                          src={time.icon}
                          alt={time.name + "icon"}
                          className="w-6 h-6"
                        />
                        <p>{time.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-lg text-center font-medium border-2 shadow-md rounded-md">
                      {time.adhan}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-lg text-center font-medium border-2 shadow-md rounded-md">
                      {time.iqama}
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
                his shop, and that is because when he performs his Wudu’
                properly and proceeds towards the mosque with the purpose of
                performing Salat in congregation, he does not take a step
                without being raised a degree (in rank) for it and having a sin
                remitted for it, till he enters the mosque. When he is
                performing Salat, the angels continue to invoke Blessings of
                Allah on him as long as he is in his place of worship in a state
                of Wudu’. They say: `O Allah! Have mercy on him! O Allah!
                Forgive him.’ He is deemed to be engaged in Salat as long as he
                waits for it.” <br /> [Al-Bukhari and Muslim].
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;
