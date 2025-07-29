import React from "react";
import Navbar from "../Component/NavBar/NavBar";
import Banner from "../Component/Banner/Banner";
import AgriculturalProducts from "../Component/AgriculturalProducts/AgriculturalProducts";
import LandscapeProducts from "../Component/LandscapeProducts/LandscapeProducts";
import TrustedUS from "../Component/TrustedUS/TrustedUS";
import WhyUsSection from "../Component/WhySpecialize/WhySpecialize";
import Marque from "../Component/Marque/Marque";
import Testimonial from "../Component/Testimonial/Testimonial";
import ContactUs from "../Component/ContactUs/ContactUs";
import Footer from "../Component/Footer/Footer";

export default function LayoutLandingPage() {
  return (
    <div>
      {/* nav and benner */}
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
        <Marque />

        {/* Testimonial */}
        <Testimonial />

        {/* ContactUs */}
        <ContactUs />
      </main>
      <footer>
        {/* footer  */}
        <Footer />
      </footer>
    </div>
  );
}
