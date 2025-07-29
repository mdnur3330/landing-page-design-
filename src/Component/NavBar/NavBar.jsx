
import { useState } from "react";
import {
  FiUser,
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { TbShoppingBag } from "react-icons/tb";
import logo from "../../assets/Group 395.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "Shop", to: "shop" },
    { label: "Blog", to: "blog" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <div>
      <div className="w-10/12 mx-auto flex justify-between items-center h-20">
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="flex justify-center items-end">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-24 border-white border-6  z-50 rounded-full mt-3 object-contain"
          />
        </div>

        {/* Right Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-5 text-gray-700">
          <a href="#" className="flex items-center gap-1 hover:text-gray-600">
            Login <FiUser />
          </a>
          <FiSearch className="cursor-pointer hover:text-gray-600" />
          <div className="relative">
            <TbShoppingBag
              className="cursor-pointer hover:text-gray-600"
              size={26}
            />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-md">
          <nav className="flex flex-col gap-3 text-gray-700 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer py-2 border-b border-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="py-2 border-t border-gray-200 mt-2">
              <a
                href="#"
                className="flex items-center gap-2 py-2 hover:text-blue-600"
              >
                <FiUser /> Login
              </a>
              <div className="flex items-center gap-4 mt-2">
                <FiSearch />
                <div className="relative">
                  <FiShoppingCart />
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">
                    0
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
