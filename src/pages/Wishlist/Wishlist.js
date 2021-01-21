import React from "react";


import PageBanner from "../../components/PageBanner/PageBanner";
import WishListProduct from "../../components/WishListProduct/WishListProduct";
import NewsLetter from "../../components/NewsLetter/NewsLetter";


const Wishlist = () => {
  return (
    <div>
    <PageBanner />
    <section id="cart-view">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="cart-view-area">
           <div class="cart-view-table aa-wishlist-table">
             <form action="">
               <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    <WishListProduct />
                    <WishListProduct />
                    <WishListProduct />                  
                      </tbody>
                  </table>
                </div>
             </form>             
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

export default Wishlist;
