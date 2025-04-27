import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let mobileRef = useRef();
  let mobileNavRef = useRef();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Lectures", href: "/lectures" },
    { name: "Events", href: "/events" },
    { name: "Forum", href: "/forum" },
    { name: "Store", href: "/store" },
  ];

  useEffect(() => {
    let handler = (e) => {
      if (!mobileRef.current.contains(e.target) && mobileRef.current)
        setIsOpen(false);
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
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
            <div className="hidden lg:flex gap-x-8">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={({ isActive }) =>
                      `text-gray-700 text-lg font-medium hover:text-primary ${
                        isActive ? "text-primary" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
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
                <div className="px-2 pt-2 pb-6 space-y-1" ref={mobileNavRef}>
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-lg font-medium transform ${
                          isActive
                            ? "text-primary"
                            : "text-gray-700 hover:text-primary"
                        }`
                      }
                      onClick={() => setIsOpen(false)} // Close mobile menu on click
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  <Link
                    to="/donate"
                    className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-primary transform"
                    onClick={() => setIsOpen(false)} // Close mobile menu on click
                  >
                    Donate
                  </Link>
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
