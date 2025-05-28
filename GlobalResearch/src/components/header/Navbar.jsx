import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo section */}
        <div className="flex-shrink-0 flex items-center">
          <img src={Logo} alt="Global Research logo" className="h-10 w-10" />
          <h2 className="ml-3 text-xl font-semibold text-[#E77624] hidden sm:block">
            Global Research
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Nav links */}
          <div className="flex items-center space-x-6 bg-[#101010] rounded-full px-6 py-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/learning">Learning</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 ml-6">
            <TrialLink />
            <ComboButton />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#101010] rounded-lg mt-2 py-2 px-4">
          <div className="flex flex-col space-y-2">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink to="/learning" onClick={toggleMenu}>Learning</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col space-y-3">
            <TrialLink mobile />
            <ComboButton mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable Components
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-[#E77624] transition-colors duration-200 text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-white hover:text-[#E77624] hover:bg-gray-800 transition-colors duration-200"
  >
    {children}
  </Link>
);

const TrialLink = ({ mobile = false }) => (
  <Link
    to="/trial"
    className={`${
      mobile ? "block w-full text-center" : ""
    } text-white hover:text-[#E77624] text-sm font-medium hover:underline underline-offset-4 transition-colors duration-200`}
  >
    7-Day Free Trial
  </Link>
);

const ComboButton = ({ mobile = false }) => (
  <button
    className={`${
      mobile ? "w-full" : "w-[132px]"
    } h-[36px] bg-[#E77624] hover:bg-[#d96b1f] text-white text-sm font-medium rounded-[5.46px] flex items-center justify-center px-[22.75px] py-[11.83px] transition-colors duration-200`}
  >
    Combo Services
  </button>
);

export default Navbar;