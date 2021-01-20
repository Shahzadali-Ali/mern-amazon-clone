import React from "react";

const Testimonial = () => {
  return (
    <section id="aa-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-testimonial-area">
              <ul className="aa-testimonial-slider">
                <li>
                  <div className="aa-testimonial-single">
                    <img
                      className="aa-testimonial-img"
                      src="img/testimonial-img-2.jpg"
                      alt="testimonial img"
                    />
                    <span className="fa fa-quote-left aa-testimonial-quote"></span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt distinctio omnis possimus, facere, quidem
                      qui!consectetur adipisicing elit. Sunt distinctio omnis
                      possimus, facere, quidem qui.
                    </p>
                    <div className="aa-testimonial-info">
                      <p>Allison</p>
                      <span>Designer</span>
                      <a href="#">Dribble.com</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
