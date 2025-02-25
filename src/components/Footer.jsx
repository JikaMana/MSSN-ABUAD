import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto pt-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Brotherhood & Unity</h2>
        <p className="text-lg italic mb-6">
          "The believers are but a single brotherhood, so make peace between
          your brothers." <br />— Qur'an 49:10
        </p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MSSN ABUAD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
