import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CustomButton from "../../SheardComponent/CustomButton";
import heroImg1 from '../../assets/Group 507.png';
import heroImg2 from '../../assets/image (1).png';
import heroImg3 from '../../assets/heroimg.png';
import { Element } from "react-scroll";

const products = [
  {
    id: 1,
    title: "JF Privezy Grass Wall",
    description: "The Perfect Blend Of Greenery",
    image: heroImg1,
  },
  {
    id: 2,
    title: "Fence Wall",
    description: "Safe & Stylish Outdoor Fencing",
    image: heroImg2,
  },
  {
    id: 3,
    title: "Premium Turf",
    description: "Soft, Durable Artificial Grass",
    image: heroImg3,
  },
];

export default function Banner() {
  return (
     <Element name="home">
    <section className="max-w-10/12 mx-auto relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-xl flex flex-col md:flex-row items-center p-3 md:p-2 bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 md:w-1/2 rounded-lg object-cover"
              />
              <div className="md:ml-10 text-center md:text-left mt-6 md:mt-0 space-y-3">
                <h2 className="text-4xl md:text-6xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <CustomButton
                  label="Shop Now"
                  className="bg-lime-400 text-black px-6 py-2 font-semibold rounded-full hover:bg-lime-500 cursor-pointer"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="swiper-prev absolute -left-3 top-1/2 -translate-y-1/2 z-10">
        <button className="bg-lime-400 p-2 rounded-full text-black hover:bg-lime-500 cursor-pointer">
          <FiArrowLeft size={20} />
        </button>
      </div>
      <div className="swiper-next absolute -right-3 top-1/2 -translate-y-1/2 z-10">
        <button className="bg-lime-400 p-2 rounded-full text-black hover:bg-lime-500 cursor-pointer">
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
    </Element>
  );
}
