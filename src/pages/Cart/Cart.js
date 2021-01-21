/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import CartProduct from "../../components/CartProduct/CartProduct";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
const Cart = () => {
  return (
    <div>
    <PageBanner />
    <section id="cart-view">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="cart-view-area">
            <div class="cart-view-table">
             
              <form action="">
        <div class="table-responsive">
           <table class="table">
             <thead>
               <tr>
                 <th></th>
                 <th></th>
                 <th>Product</th>
                 <th>Price</th>
                 <th>Quantity</th>
                 <th>Total</th>
               </tr>
             </thead>
             <tbody>
             <CartProduct />
             <CartProduct />
             <CartProduct />
               
              
              
               </tbody>
           </table>
         </div>
      </form>
              <div class="cart-view-total">
                <h4>Cart Totals</h4>
                <table class="aa-totals-table">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>$450</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>$450</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" class="aa-cart-view-btn">Proced to Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <NewsLetter/>
  </div>
   
  );
};

export default Cart;
