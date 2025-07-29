import React from "react";
import CustomButton from "../../SheardComponent/CustomButton";

import img6 from "../../assets/Frame-1.png";
import img1 from "../../assets/Frame-6.png";
import img2 from "../../assets/Frame.png";
import img3 from "../../assets/Frame-4.png";
import img4 from "../../assets/Frame-3.png";
import img5 from "../../assets/Frame-2.png";
import { Element } from "react-scroll";

export default function ContactUs() {

  const items = [{ img: img6 , title: "COIMBATORE"}, { img: img2 , title: "HYDERABAD"}, { img: img1 , title: "KOCHI"}, { img: img3 , title: "GOA"},{ img: img5 , title: "CHENNAI"},{ img: img4 , title: "MUMBAI"}];
  return (
      <Element name="contact">
    <div className="max-w-10/12 mx-auto my-16 border border-gray-200 rounded-2xl p-2">
      <div className="text-center -mt-6"><p className="bg-lime-500 inline rounded-full  px-2 py-1 font-medium">A OUR BRANCHES</p></div>
      

    <div className="grid grid-cols-3 md:flex gap-5 md:gap-5 justify-center my-7">
        {items.map((iiemObj, index) => (
       <div className="p-2 border border-gray-500 rounded-lg text-center">
         <img
          key={index}
          src={iiemObj.img}
          alt={`img-${index}`}
          className="w-9 h-9 mx-auto object-cover"
        />
        <p>{iiemObj.title}</p>
       </div>
      ))}
    </div>

      <div className="flex flex-col md:flex-row gap-6 bg-white">
        {/* Contact Form */}
        <div className="bg-[#002a5c] text-white rounded-2xl p-8 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-3xl bg-[#1d4370] placeholder-white focus:outline-none"
                name="name"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-3xl px-4 py-3  bg-[#1d4370] placeholder-white focus:outline-none"
                name="email"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-3xl bg-[#1d4370] placeholder-white focus:outline-none"
                name="phone"
              />
              <textarea
                placeholder="Write message"
                className="w-full px-4 py-3 bg-[#1d4370] placeholder-white focus:outline-none h-32 resize-none rounded-3xl"
                name="message"
              ></textarea>
            </form>
          </div>

          <div className="mt-6">
            <CustomButton
              label="Submit"
              className="bg-lime-400 text-black font-medium px-6 py-2 rounded-full hover:bg-lime-500"
            />
          </div>
        </div>

        {/* Map & Address */}
        <div className="flex-1 relative rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full min-h-[400px] rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040318804779!2d77.5736810751002!3d12.937257587368266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bd29bb4817%3A0x81329a4f4d4d2fa2!2sJRR%20Towers!5e0!3m2!1sen!2sin!4v1650000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JRR Towers"
          ></iframe>
          <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg w-[90%] md:w-[80%]">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-black">JRR Towers</span> (2nd
              Floor), Pattalamma Temple Rd,
              <br />
              Basavangudi, Bangalore, 560004
            </p>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
}
