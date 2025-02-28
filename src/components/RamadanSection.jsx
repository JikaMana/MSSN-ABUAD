import React from "react";
import { Moon, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const RamadanSection = () => {
  const schedule = [
    { day: "Monday", imam: "Abdullah Muhammad(Ameer)", college: "MHS" },
    {
      day: "Wednesday",
      imam: "Muslim Rikiji(Na'eebul Ameer Da'wah)",
      college: "Engineering",
    },
    { day: "Friday", imam: "Alameen Ameen", college: "Pharmacy" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Moon className="text-primary" size={24} />
        <h2 className="text-2xl font-bold">Ramadan 1445H</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-primary" size={20} />
            <h3 className="text-lg font-semibold">Tarawih Schedule</h3>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-primary text-xl">
                  {item.day}
                </div>
                <div className="text-xl font-medium leading-6">{item.imam}</div>
                <div className="text-md text-gray-500">{item.college}</div>
              </div>
            ))}
          </div>
          <div className="my-8 flex justify-center">
            <Link
              href="/files/document.pdf"
              className="bg-primary px-4 py-3 text-white font-medium text-lg rounded-md"
              download
            >
              <button>Download Schedule</button>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-primary" size={20} />
            <h3 className="text-lg font-semibold">Iftar Arrangements</h3>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <p className="text-gray-600">
              Join us for daily Iftar at the MSSN Mosque. We provide meals for
              all students and community members.
            </p>
            <div className="font-semibold">Iftar Time: Maghrib Prayer</div>
            <div className="text-lg mt-12">
              <strong>Complain:</strong> To make any complain about Iftar
              arrangements or meal, please contact any of the MSSN EXCO.
            </div>
            <div className="my-8 flex justify-center">
              <Link
                href="/files/document.pdf"
                className="bg-primary px-4 py-2 text-white font-medium text-lg rounded-md"
                download
              >
                <button>Meals Schedule</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamadanSection;
