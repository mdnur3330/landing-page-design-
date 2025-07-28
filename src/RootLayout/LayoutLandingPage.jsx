import React from "react";
import Navbar from "../Component/NavBar/NavBar";
import Banner from "../Component/Banner/Banner";
import AgriculturalProducts from "../Component/AgriculturalProducts/AgriculturalProducts";
import LandscapeProducts from "../Component/LandscapeProducts/LandscapeProducts";
import TrustedUS from "../Component/TrustedUS/TrustedUS";
import WhyUsSection from "../Component/WhySpecialize/WhySpecialize";

export default function LayoutLandingPage() {
  return (
    <div>
      <header>
      <nav>
        <Navbar />
      </nav>
      <div>
      <Banner />
      </div>
    </header>
    <main>
     {/* agriculturalProducts */}
      <AgriculturalProducts />

      {/* LandscapeProducts */}
      <LandscapeProducts />

    {/* CustomerTrustSection */}
      <TrustedUS />
      
      {/* WhyUsSection */}
      <WhyUsSection />
    </main>
    </div>
  );
}
