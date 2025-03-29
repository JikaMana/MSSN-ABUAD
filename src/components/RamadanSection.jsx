import React from "react";
import { Moon, Calendar, Users } from "lucide-react";
import mealSchedule from "../assets/images/meal-schedule.png";
import taraweehImamSchedule from "../assets/images/taraweeh-imam.png";
import taraweehImamScheduleImage from "../assets/images/taraweeh-image.png";

const RamadanSection = () => {
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
            <img src={taraweehImamScheduleImage} alt="Failed to load" />
          </div>
          <div className="my-8 flex justify-center">
            <a
              href={taraweehImamSchedule}
              className="bg-primary px-4 py-3 text-white font-medium text-lg rounded-md"
              download
            >
              Download Schedule
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-primary" size={20} />
            <h3 className="text-lg font-semibold">Iftar Arrangements</h3>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <p className="text-gray-600">
              We provide meals for all students who make orders for meal gotten
              from <strong>Captain Cook</strong>.
            </p>
            <p className="text-gray-600">
              Join us for daily Iftar at the MSSN Mosque. We provide meals for
              all students and community members.
            </p>

            <div className="text-lg mt-12">
              <strong>Complain:</strong> To make any complain about Sahur/Iftar
              arrangements or meal, please contact any of the MSSN EXCO.
            </div>
            <div className="my-8 flex justify-center">
              <a
                href={mealSchedule}
                className="bg-primary px-4 py-2 text-white font-medium text-lg rounded-md"
                download
              >
                Download Meal Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamadanSection;
