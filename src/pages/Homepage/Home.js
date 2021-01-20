import React from "react";
import "./Home.style.css";

import OfferSlider from "../../components/OfferSlider/OfferSlider";
import PromoSelection from "../../components/PromoSelection/PromoSelection";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import SupportSection from "../../components/SupportSection/SupportSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import ClientBrand from "../../components/ClientBrand/ClientBrand";
import LoginModal from "../../components/LoginModal/LoginModal";

const Home = () => {
  return (
    <div>
      <OfferSlider />
      <PromoSelection />
      <HomeProducts />
      <SupportSection />
      <Testimonial />
      <ClientBrand />
      <LoginModal />
    </div>
  );
};

export default Home;
