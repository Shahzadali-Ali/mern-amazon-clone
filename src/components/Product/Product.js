import React from "react";

const Product = () => {
  return (
    <li>
      <figure>
        <a className="aa-product-img" href="#">
          <img src="img/man/polo-shirt-2.png" alt="polo shirt img" />
        </a>
        <a className="aa-add-card-btn" href="#">
          <span className="fa fa-shopping-cart"></span>Add To Cart
        </a>
        <figcaption>
          <h4 className="aa-product-title">
            <a href="#">Polo T-Shirt</a>
          </h4>
          <span className="aa-product-price">$45.50</span>
          <span className="aa-product-price">
            <del>$65.50</del>
          </span>
        </figcaption>
      </figure>
      <div className="aa-product-hvr-content">
        <a
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="Add to Wishlist"
        >
          <span className="fa fa-heart-o"></span>
        </a>
        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
          <span className="fa fa-exchange"></span>
        </a>
        <a
          href="#"
          data-toggle2="tooltip"
          data-placement="top"
          title="Quick View"
          data-toggle="modal"
          data-target="#quick-view-modal"
        >
          <span className="fa fa-search"></span>
        </a>
      </div>
      {/*product badge*/}
      <span className="aa-badge aa-sale" href="#">
        SALE!
      </span>
    </li>
  );
};

export default Product;
