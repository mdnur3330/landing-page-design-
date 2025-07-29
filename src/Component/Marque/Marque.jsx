
import marqueImg from "../../assets/Group 448.svg"

export default function Marque() {
  const item = [
    {title: "Quality Product"},
    {title: "Shipping Across India"},
    {title: "Quality Product"},
    {title: "Shipping Across India"},
    {title: "Quality Product"},
    {title: "Shipping Across India"},
    {title: "Quality Product"},
    {title: "Shipping Across India"}
  ]
  return (
    <div className="my-9 border relative overflow-hidden bg-blue-100 transform -skew-y-3">
  <div className="animate-marquee whitespace-nowrap py-4">
    {item.map((i,index) => <span key={index} className="inline-block mx-6 text-blue-900 font-semibold">
      <img src={marqueImg} className="inline w-10 h-10 mr-2" />
      {i.title}
    </span>)}
  </div>
</div>

  )
}
