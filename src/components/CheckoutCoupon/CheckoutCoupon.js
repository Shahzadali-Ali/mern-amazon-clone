import React from 'react'

export default function CheckoutCoupon() {
    return (
        <div class="panel panel-default aa-checkout-coupon">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
              Have a Coupon?
            </a>
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse in">
          <div class="panel-body">
            <input type="text" placeholder="Coupon Code" class="aa-coupon-code"/>
            <input type="submit" value="Apply Coupon" class="aa-browse-btn"/>
          </div>
        </div>
      </div>
    )
}
