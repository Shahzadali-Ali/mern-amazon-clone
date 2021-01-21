import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";
import CheckoutCoupon from "../../components/CheckoutCoupon/CheckoutCoupon";
import CheckoutLogin from "../../components/CheckoutLogin/CheckoutLogin";
import CheckoutBilling from "../../components/CheckoutBilling/CheckoutBilling";
const Checkout = () => {
  return (
    <div>
    <PageBanner />
    <section id="checkout">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
        <div class="checkout-area">
          <form action="">
            <div class="row">
              <div class="col-md-8">
                <div class="checkout-left">
                  <div class="panel-group" id="accordion">
                  <CheckoutCoupon/>
                  <CheckoutLogin />
                  <CheckoutBilling />
</div></div></div></div></form>
         </div>
       </div>
     </div>
   </div>
 </section>

  </div>
  );
};

export default Checkout;
