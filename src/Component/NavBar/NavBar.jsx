import { useState } from "react";
import { FiUser, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/Group 395.png"; 
import { TbShoppingBag } from "react-icons/tb";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Menu for Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-sm font-medium hover:text-blue-600">Home</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">Shop</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">Blogs</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">Contact</a>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-end">
            <img src={logo} alt="Logo" className="h-22 w-20 rounded-full border-10 border-white mt-5" />
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-blue-600 flex items-center gap-1"> Login<FiUser /></a>
            <FiSearch className="cursor-pointer hover:text-blue-600" />
            <div className="relative">
              <TbShoppingBag className="cursor-pointer hover:text-blue-600" size={30}/>
              <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-xs px-1 rounded-full">0</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">Shop</a>
          <a href="#" className="block py-2">Blogs</a>
          <a href="#" className="block py-2">Contact</a>
          <hr className="my-2" />
          <a href="#" className="block py-2 flex items-center gap-1"><FiUser /> Login</a>
          <div className="flex items-center gap-4 pt-2">
            <FiSearch />
            <div className="relative">
              <FiShoppingCart />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">0</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
