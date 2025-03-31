import React from "react";
import { Instagram, Twitter, Youtube, Mail, Ghost } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-dark text-white py-8">
      <div className="container mx-auto pt-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Brotherhood & Unity</h2>
        <p className="text-lg italic mb-6">
          "The believers are but a single brotherhood, so make peace between
          your brothers." <br />— Qur'an 49:10
        </p>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://instagram.com/mssn.abuad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-lime-400"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://x.com/mssn_abuad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-lime-400"
          >
            <Twitter size={28} />
          </a>
          <a
            href="https://snapchat.com/t/dvDifmKJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-lime-400"
          >
            <Ghost size={28} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCU6NF-EpDdU_JWJUFt-33Dw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-lime-400"
          >
            <Youtube size={28} />
          </a>
        </div>

        <div className="mb-6">
          <p className="text-lg">Contact us:</p>
          <a
            href="mailto:example@email.com"
            className="text-white text-lg hover:underline flex justify-center items-center space-x-2"
          >
            <Mail size={28} />
            <span>mssnabuad21@gmail.com</span>
          </a>
        </div>

        <p className="text-sm text-gray-200">
          © {new Date().getFullYear()} MSSN ABUAD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
