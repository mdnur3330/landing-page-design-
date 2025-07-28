
import img1 from '../../assets/Frame (1).png'
import img2 from '../../assets/Frame (2).png'
import img3 from '../../assets/Frame (3).png'
import ellipse from '../../assets/Ellipse 23.png'

export default function TrustedUS() {

  const items = [
    {title: "Premium", img: img1, des: "Products"},
    {title: "4000+", img: img2, des: "Google Review"},
    {title: "Delivery", img: img3, des: "Across India"},
  ]
  return (
    <div>
    <div className="max-w-10/12 mx-auto  bg-[#003060] text-white rounded-2xl py-10 px-6 md:px-20 justify-between items-center gap-8 shadow-lg space-y-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Trusted by over <span className="text-white font-bold">6K+</span> customers
      </h2>

      <div className="flex justify-center gap-18 ">
        {items.map(item =><div className="flex gap-5 items-center">
          <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <span className="text-xl"><img src={item.img} alt="" /></span>
          </div>
          <div>
            <p className="font-semibold">{item.title}</p>
             <p className="text-sm text-gray-200">{item.des}</p>
          </div>
        </div> )}
        
      </div>
    </div>
    <div className='-mt-50'>
      <img className='w-80 h-auto mx-auto blur-2xl text-white' src={ellipse} alt="" />
    </div>
    </div>
  );
}
