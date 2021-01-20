import React from "react";

const OfferSlider = () => {
  return (
    <section id="aa-slider">
      <div className="aa-slider-area">
        <div id="sequence" className="seq">
          <div className="seq-screen">
            <ul className="seq-canvas">
              <li>
                <div className="seq-model">
                  <img data-seq src="img/slider/1.jpg" alt="Men slide img" />
                </div>
                <div className="seq-title">
                  <span data-seq>Save Up to 75% Off</span>
                  <h2 data-seq>Men Collection</h2>
                  <p data-seq>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, illum.
                  </p>
                  <a
                    data-seq
                    href="#"
                    className="aa-shop-now-btn aa-secondary-btn"
                  >
                    SHOP NOW
                  </a>
                </div>
              </li>

              <li>
                <div className="seq-model">
                  <img
                    data-seq
                    src="img/slider/2.jpg"
                    alt="Wristwatch slide img"
                  />
                </div>
                <div className="seq-title">
                  <span data-seq>Save Up to 40% Off</span>
                  <h2 data-seq>Wristwatch Collection</h2>
                  <p data-seq>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, illum.
                  </p>
                  <a
                    data-seq
                    href="#"
                    className="aa-shop-now-btn aa-secondary-btn"
                  >
                    SHOP NOW
                  </a>
                </div>
              </li>

              <li>
                <div className="seq-model">
                  <img
                    data-seq
                    src="img/slider/3.jpg"
                    alt="Women Jeans slide img"
                  />
                </div>
                <div className="seq-title">
                  <span data-seq>Save Up to 75% Off</span>
                  <h2 data-seq>Jeans Collection</h2>
                  <p data-seq>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, illum.
                  </p>
                  <a
                    data-seq
                    href="#"
                    className="aa-shop-now-btn aa-secondary-btn"
                  >
                    SHOP NOW
                  </a>
                </div>
              </li>

              <li>
                <div className="seq-model">
                  <img data-seq src="img/slider/4.jpg" alt="Shoes slide img" />
                </div>
                <div className="seq-title">
                  <span data-seq>Save Up to 75% Off</span>
                  <h2 data-seq>Exclusive Shoes</h2>
                  <p data-seq>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, illum.
                  </p>
                  <a
                    data-seq
                    href="#"
                    className="aa-shop-now-btn aa-secondary-btn"
                  >
                    SHOP NOW
                  </a>
                </div>
              </li>

              <li>
                <div className="seq-model">
                  <img
                    data-seq
                    src="img/slider/5.jpg"
                    alt="Male Female slide img"
                  />
                </div>
                <div className="seq-title">
                  <span data-seq>Save Up to 50% Off</span>
                  <h2 data-seq>Best Collection</h2>
                  <p data-seq>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, illum.
                  </p>
                  <a
                    data-seq
                    href="#"
                    className="aa-shop-now-btn aa-secondary-btn"
                  >
                    SHOP NOW
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/*slider navigation btn */}
          <fieldset
            className="seq-nav"
            aria-controls="sequence"
            aria-label="Slider buttons"
          >
            <a type="button" className="seq-prev" aria-label="Previous">
              <span className="fa fa-angle-left"></span>
            </a>
            <a type="button" className="seq-next" aria-label="Next">
              <span className="fa fa-angle-right"></span>
            </a>
          </fieldset>
        </div>
      </div>
    </section>
  );
};

export default OfferSlider;
