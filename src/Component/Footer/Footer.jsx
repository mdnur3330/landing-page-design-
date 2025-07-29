import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../../assets/Group 395.png'
import bglogo from '../../assets/Ellipse.png'
import CustomButton from "../../SheardComponent/CustomButton";
export default function Footer() {
  return (
    <footer className="max-w-11/12 mx-auto mt-40  text-white ">
      <div className="bg-[#002C5F] pt-28 mt-8 px-6 md:px-30 rounded-xl">
        <div className="flex flex-col md:flex-row gap-10 justify-between ">
          {/* Subscribe */}
          <div className="space-y-11">
            <h2 className="text-2xl font-bold mb-2">Join Our <span className="text-white">JF Products</span></h2>
            <p className="text-sm text-white mb-4">
              We’ll tell you about store updates and discounts
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#103b5c] placeholder-gray-300 px-4 py-3 rounded-3xl mb-3 focus:outline-none"
            />

            <label className="flex items-center text-sm text-gray-400 mb-4 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox bg-transparent border-gray-900 mr-2 "
              />
              Yes, subscribe me to your newsletter.
            </label>

            <button className="w-full bg-white text-[#002C5F] font-semibold py-2 rounded-full transition hover:bg-gray-100">
              Join Now
            </button>
          </div>

          {/* Info */}
          <div className="space-y-11">
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Helpful */}
          <div className="space-y-11">
            <h3 className="text-xl font-semibold mb-4">Helpful</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Shipping Policy</a></li>
              <li><a href="#" className="hover:underline">My Account</a></li>
            </ul>
          </div>
        </div>
                  {/* Logo + Branches + Contact */}
          <div className="flex flex-col md:flex-row justify-between py-14">
            <div className="flex gap-5 items-center">
              <img src={logo} alt="JF Logo" className="w-20 h-20 object-contain mb-3" />
              <div className="space-y-1">
                <p className="text-sm font-bold">Our Branches</p> 
              <p className="text-sm text-gray-300">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
              </div>
            </div>
            <div className="mt-6">
              <CustomButton label="Contact Us" className="bg-[#C3E323] hover:bg-[#badf20] text-[#002C5F] font-semibold px-6 py-2 rounded-full cursor-pointer"/>

            </div>
            
          </div>
            <img className="-mt-56 w-70 opacity-70 blur-2xl" src={bglogo} alt="" />
            <img className="-mt-56 -ml-33 w-70 opacity-40 blur-lg" src={bglogo} alt="" />
       
      </div>

       {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-gray-600 py-6 px-6 md:px-30  text-xs text-gray-800">
          <div>
            <p>Copyright © 2025 JF Products. All rights reserved</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-100 p-2 rounded-full text-black hover:opacity-80">
              <FaFacebookF size={30} />
            </a>
            <a href="#" className="bg-blue-100 p-2 rounded-full text-black hover:opacity-80">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="bg-blue-100 p-2 rounded-full text-black hover:opacity-80">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
    </footer>
  );
}
