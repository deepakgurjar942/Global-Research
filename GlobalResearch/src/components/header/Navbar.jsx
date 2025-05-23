import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center bg-black p-4">
      {/* Logo section */}
      <div className="flex items-center space-x-4 w-[195px] h-[64px]">
        <img src={Logo} alt="Global Research logo" className="w-[64px]" />
        <h2 className="text-[#E77624] text-xl font-semibold">
          Global Research
        </h2>
      </div>

      {/* Nav links + select */}
      <div className="ml-10 flex items-center space-x-[158px] w-[928px] h-[41px]">
        <div className="w-[524px] h-[41px] rounded-[40px] flex items-center gap-[10px] py-[15px] px-[25px] bg-gray-900">
          <ul>
            <li className="text-white hover:text-[#E77624]">
              {/* <Link to="/">Home</Link> */}
            </li>
          </ul>
        </div>
        {/* <Link to="/" className="text-white hover:text-[#E77624]">Home</Link>
          <Link to="/about" className="text-white hover:text-[#E77624]">About</Link>
          <Link to="/services" className="text-white hover:text-[#E77624]">Services</Link>
          <Link to="/learning" className="text-white hover:text-[#E77624]">Learning</Link>
          <Link to="/contact" className="text-white hover:text-[#E77624]">Contact</Link>

        <select
          aria-label="More options"
          className="w-[150px] h-[41px] rounded-[40px] bg-gray-900 text-white px-4 focus:outline-none"
          name="more"
          id="more"
        >
          <option value="more">More</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select> */}
      </div>
    </nav>
  );
};

export default Navbar;
