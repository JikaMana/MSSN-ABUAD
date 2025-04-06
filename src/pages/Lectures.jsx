import { Timer } from "lucide-react";
import React from "react";

const Lectures = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-800 text-white">
      <div className="text-center p-8 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Dawah Lectures</h1>
        <p className="text-lg mb-6">
          We are working diligently to bring you enriching Dawah lectures. Stay
          tuned for updates.
        </p>
        <Timer size={120} className="mx-auto" />
      </div>
    </div>
  );
};

export default Lectures;
