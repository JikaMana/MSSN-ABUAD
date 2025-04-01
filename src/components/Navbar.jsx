import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let mobileRef = useRef();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Forum", href: "/forum" },
    { name: "Events", href: "/events" },
    { name: "Store", href: "/store" },
    { name: "Admin", href: "/admin" },
  ];

  const [activeLink, setActiveLink] = useState("");

  const handleActiveNav = (nav) => {
    setActiveLink(nav);
  };

  useEffect(() => {}, [activeLink]);

  useEffect(() => {
    let handler = (e) => {
      if (!mobileRef.current.contains(e.target)) {
        setIsOpen(false);
        console.log(mobileRef.current);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container">
          <div className="flex justify-between items-center h-20">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center gap-x-0 sm:gap-x-4"
            >
              <div className="flex items-center">
                <img
                  src="/mssn-logo.jpeg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <img
                  src="/abuad-logo.jpeg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <h1 className="hidden sm:block text-2xl font-bold text-primary">
                MSSN ABUAD
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-x-12">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-gray-700 text-lg  hover:text-primary font-medium ${
                      activeLink === link.name ? "text-primary" : ""
                    }`}
                    onClick={() => handleActiveNav(link.name)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link to="/donate" className="btn btn-primary rounded-full">
                Donate
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div ref={mobileRef}>
            {isOpen && (
              <div className="transform transition-all">
                <div className="px-2 pt-2 pb-6 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-700 hover:text-primary font-medium cursor-pointer transform"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
