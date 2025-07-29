import React from 'react'
import Products from '../../SheardComponent/Products'
import product1 from "../../assets/p1.png"
import product2 from "../../assets/p2.png"
import product3 from "../../assets/p3.png"
import product4 from "../../assets/p4.png"
import { Element } from 'react-scroll'


const landscapeProducts = [
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

export default function LandscapeProducts() {
  return (
    <Element name="shop">
    <div>
      <Products title="Agricultural Products" products={landscapeProducts} />
    </div>
    </Element>
  )
}
