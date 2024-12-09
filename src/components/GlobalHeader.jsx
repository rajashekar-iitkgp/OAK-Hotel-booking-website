
import React, { useState, useEffect } from "react";
import LogoOak from "../assets/img/logo-oak.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu(); // Close the menu after navigation
  };

  return (
    <header
      className={`${
        headerScrolled
          ? "bg-white py-4 shadow-lg"
          : "bg-yellow py-6 lg:py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={LogoOak}
            className="w-12 md:w-16 lg:w-20"
            alt="Logo Oak"
            onClick={() => handleNavigation("/")}
          />
          <span
            className={`text-lg font-bold ${
              headerScrolled ? "text-primary" : "text-white"
            }`}
          >
            {/* Logo Text */}
          </span>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-white cursor-pointer" />
          ) : (
            <FaBars className="text-2xl text-white cursor-pointer" />
          )}
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "right-0 bg-red-500" : "-left-full bg-transparent"
          } fixed top-0 w-[300px] h-auto lg:w-auto lg:static lg:flex lg:items-center lg:gap-8 transition-right duration-300 z-40`}
          style={{ maxHeight: menuOpen ? "fit-content" : "0" }}
        >
          <NavItem
            text="Home"
            onClick={() => handleNavigation("/")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="About"
            onClick={() => handleNavigation("/about")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="Rooms"
            onClick={() => handleNavigation("/sampleroom")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="Restaurant"
            onClick={() => handleNavigation("/restaurant")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="Gallery"
            onClick={() => handleNavigation("/gallery")}
            headerScrolled={headerScrolled}
          />
          <NavItem
            text="Contact"
            onClick={() => handleNavigation("/contact")}
            headerScrolled={headerScrolled}
          />
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ text, onClick, headerScrolled }) => (
  <div
    className={`block lg:inline-block py-4 lg:py-0 hover:text-yellow-400 transition cursor-pointer ${
      headerScrolled
        ? "text-primary lg:text-primary"
        : "text-white lg:text-white"
    }`}
    onClick={onClick}
  >
    {text}
  </div>
);

export default Header;
