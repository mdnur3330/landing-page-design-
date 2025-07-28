import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";

export default function Products({ title, products }) {
  const id = useId();
  const prevClass = `swiper-button-prev-custom-${id}`;
  const nextClass = `swiper-button-next-custom-${id}`;

  return (
    <section className="max-w-10/12 mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <div className="relative">
        <div className={`${prevClass} absolute -left-5 top-1/2 z-10`}>
          <button className="bg-white border shadow w-10 h-10 flex items-center justify-center rounded-full">
            <FiArrowLeft />
          </button>
        </div>
        <div className={`${nextClass} absolute -right-5 top-1/2 z-10`}>
          <button className="bg-white border shadow w-10 h-10 flex items-center justify-center rounded-full">
            <FiArrowRight />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-gray-100 rounded-xl p-4 shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">{product.name.substring(0,20)}..</h3>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <CustomButton
                  label="Shop Now"
                  className="bg-lime-400 text-black px-5 py-2 font-semibold rounded-full hover:bg-lime-500 cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
