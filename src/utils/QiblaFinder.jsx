//Remember: This component was generated by AI

import React, { useEffect, useState } from "react";

const QiblaFinder = () => {
  const [angle, setAngle] = useState(null);
  const [error, setError] = useState(null);

  // Kaaba's coordinates
  const KAABA_LAT = 21.4225;
  const KAABA_LON = 39.8262;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          // Utility functions for conversions
          const degToRad = (deg) => (deg * Math.PI) / 180;
          const radToDeg = (rad) => (rad * 180) / Math.PI;

          // Convert degrees to radians
          const lat1 = degToRad(userLat);
          const lon1 = degToRad(userLon);
          const lat2 = degToRad(KAABA_LAT);
          const lon2 = degToRad(KAABA_LON);

          // Calculate the difference in longitude
          const dLon = lon2 - lon1;

          // Compute the bearing using the formula
          const y = Math.sin(dLon);
          const x =
            Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(dLon);
          let bearing = Math.atan2(y, x);
          bearing = radToDeg(bearing);
          // Normalize to 0-360 degrees
          bearing = (bearing + 360) % 360;
          setAngle(bearing);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {angle !== null && (
        <div className="relative w-96 h-96">
          {/* Compass Base */}
          <img
            src="/compass-rose.png"
            alt="Compass Base"
            className="w-full h-full object-cover"
          />

          {/* Rotating Needle */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <img
              src="/compass-needle.png"
              alt="Compass Needle"
              className="w-full h-auto bg-transparent"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QiblaFinder;
