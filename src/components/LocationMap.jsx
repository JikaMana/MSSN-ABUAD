import React from "react";
import { MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  // ABUAD Mosque coordinates
  // const position = [7.6057065, 5.3091123];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="text-primary" size={24} />
        <h2 className="text-2xl font-bold">Mosque</h2>
      </div>

      <div className="h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.091674163592!2d5.305900060338608!3d7.604580473335877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047e500326c0a79%3A0xecf486a2a504f18f!2sABUAD%20MOSQUE!5e0!3m2!1sen!2sng!4v1739928239411!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Address</h3>
        <p className="text-gray-600">
          MSSN Mosque, Afe Babalola University,
          <br />
          Ado-Ekiti, Ekiti State, Nigeria
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
