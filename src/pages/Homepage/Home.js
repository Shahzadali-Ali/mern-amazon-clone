import React from "react";
import "./Home.style.css";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import OfferSlider from "../../components/OfferSlider/OfferSlider";
import PromoSelection from "../../components/PromoSelection/PromoSelection";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import SupportSection from "../../components/SupportSection/SupportSection";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      {/* Loading and end to scroll */}
      <div id="wpf-loader-two">
        <div className="wpf-loader-two-inner">
          <span>Loading</span>
        </div>
      </div>

      <a className="scrollToTop" href="#">
        <i className="fa fa-chevron-up"></i>
      </a>

      {/* Header*/}
      <Header />
      <Menu />
      <OfferSlider />
      <PromoSelection />
      <HomeProducts />
      <SupportSection />
      <Testimonial />
    </div>
  );
};

export default Home;
