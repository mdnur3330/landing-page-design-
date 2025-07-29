import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon1.png";
import icon3 from "../../assets/Frame (1).png";
import CustomButton from "../../SheardComponent/CustomButton";

export default function WhyUsSection() {
  return (
    <section className="max-w-10/12 mx-auto py-5  px-2 md:px-5 lg:px-12 bg-white">
      {/* Title & Subtitle */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Why Us</h2>
        <p className="text-[#555555] text-base leading-relaxed">
          We specialize in delivering durable and innovative fencing solutions
          built to last.
          <br className="hidden sm:block" />
          With a focus on quality and trust, we help secure spaces across
          industries and communities.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left Card */}
        <div className="bg-gradient-to-tr from-[#edf1f8]  from-60%  via-blue-50- via-20% to-[#c9d3e5] to-90%  rounded-2xl shadow-md p-8 text-left h-auto flex flex-col justify-start">
          <div className="text-4xl mb-4"><img src={icon3} alt="Customer Icon" /></div>
          <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
            Unmatched Durability with Corrosion-Free Technology
          </h3>
          <p className="text-[#555555] text-sm leading-relaxed">
            Our JF-270 barbed wire features a robust 270 GSM zinc coating,
            ensuring superior resistance against rust and corrosion. Paired with
            stainless steel binding wire, our fencing solutions are designed to
            withstand harsh environmental conditions, offering longevity and
            reliability.
          </p>
        </div>

        {/* Middle Card — elevated */}

        <div className="bg-gradient-to-tr from-[#002F5D] via-[#002F5D] to-[#03468a] text-white rounded-2xl shadow-xl p-8 text-left h-auto flex flex-col justify-start transform md:-translate-y-14">
          <div className="text-4xl w-14 h-14 mb-4">
            <img src={icon1} alt="Customer Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">
            Customer-Centric <br /> Approach
          </h3>
          <p className="text-[#E0E0E0] text-sm leading-relaxed">
            At JF Products, customer satisfaction is paramount. We pride
            ourselves on delivering timely services, maintaining transparent
            communication, and ensuring a seamless purchasing experience. Our
            commitment to excellence is reflected in the positive feedback from
            our valued clients.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-tr from-[#edf1f8]  from-60%  via-blue-50- via-20% to-[#c9d3e5] to-90% rounded-2xl shadow-md p-8 text-left h-auto flex flex-col justify-start">
          <div className="text-4xl w-14 h-14 mb-4 ">
            <img src={icon} alt="" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
            Innovative and Diverse <br /> Product Range
          </h3>
          <p className="text-[#555555] text-sm leading-relaxed">
            We offer a wide array of fencing solutions, including Polyhex Mesh,
            Australian Trellis, and GI Poultry Mesh, catering to various needs
            from agricultural to residential applications. Our products combine
            functionality with aesthetic appeal, ensuring both security and
            style.
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center">
        <CustomButton
          label="Contact Us"
          className="bg-lime-400 text-black mt-4 px-5 py-2 font-semibold rounded-full hover:bg-lime-500 cursor-pointer"
        />
      </div>
    </section>
  );
}
