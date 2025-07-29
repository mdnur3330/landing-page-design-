
import customer from "../../assets/image 43.png"
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import victor from "../../assets/Vector.png"

const Testimonial = () => {
  return (
    <>
    <div className='text-center mt-20'>
      <h3 className='text-3xl font-bold'> Why Customers Love  Us?</h3>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between gap-8 py-12 px-4 bg-white max-w-10/12 mx-auto">
       
  <div className="bg-gray-100 rounded-xl p-6 md:w-5/8 shadow-md flex flex-col justify-between px-5 md:px-14">
    <div className='space-y-4'>
      <div className="text-green-500 flex gap-2 text-3xl my-6 ">
        <img src={victor} alt="" />
        <img src={victor} alt="" />
      </div>
      <p className="text-gray-800 text-lg my-9">
        I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast (400ft.) Value for money and easy to install. Happy with the product
      </p>
    </div>
    <div className="p-5  flex items-center justify-between bg-white rounded ">
      <span className="md:font-semibold text-2xl text-gray-900">- Samuel Varughese</span>
      <div className="flex gap-2 ">
        <button className="w-8 h-8 rounded-full border border-gray-400 text-xl flex items-center justify-center hover:bg-gray-200">
          <HiOutlineArrowNarrowLeft />
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-400 text-xl flex items-center justify-center hover:bg-gray-200">
          <HiOutlineArrowNarrowRight />
        </button>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="rounded-xl overflow-hidden md:w-3/8 ">
    <img
      src={customer}
      alt="Customer"
      className=" w-full md:w-60 object-cover"
    />
  </div>
</div>
</>
  );
};

export default Testimonial;
