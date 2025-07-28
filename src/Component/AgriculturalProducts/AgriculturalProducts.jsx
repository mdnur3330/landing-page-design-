import React from 'react'
import Products from '../../SheardComponent/Products'
import product1 from "../../assets/image (1).png"
import product2 from "../../assets/image (2).png"
import product3 from "../../assets/image (3).png"
import product4 from "../../assets/image (4).png"

const agriculturalProducts = [
  {
    id: 1,
    name: "JF Bluelink Mesh",
    price: "₹3,067.50 – ₹6,362.50",
    image: product4,
  },
  {
    id: 2,
    name: "GI Poultry Mesh",
    price: "₹1,260.00 – ₹10,750.00",
    image: product3,
  },
  {
    id: 3,
    name: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
    image: product2,
  },
  {
    id: 4,
    name: "JF Barbed Wire- 270 GSM",
    price: "₹4,995.00",
    image: product1,
  },
  {
    id: 3,
    name: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
    image: product2,
  },

];

export default function AgriculturalProducts() {
  return (
    <div>
      <Products title="Agricultural Products" products={agriculturalProducts} />
    </div>
  )
}
