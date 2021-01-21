import React from "react";
import { useStateValue } from "../../ContextApi/StateProvider";

const Product = ({ product }) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = (p) => {
    dispatch({
      type: "ADD_TO_CART",
      product: p,
    });
  };

  return (
    <li>
      <figure>
        <a className="aa-product-img" href="#">
          <img src="img/man/polo-shirt-2.png" alt="polo shirt img" />
        </a>
        <button
          disabled={cart.includes(product)}
          className="btn-block aa-add-card-btn"
          onClick={() => addToCart(product)}
        >
          <span className="fa fa-shopping-cart"></span>
          {cart.includes(product) ? "Already Added" : "Add to Cart"}
        </button>
        <figcaption>
          <h4 className="aa-product-title">
            <a href="#">{product.name}</a>
          </h4>
          <span className="aa-product-price">${product.newPrice}</span>
          <span className="aa-product-price">
            <del>${product.oldPrice}</del>
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
