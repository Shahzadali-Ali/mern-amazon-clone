/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useStateValue } from "../../ContextApi/StateProvider";

export default function CartProduct({ product }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeCartItem = (id) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      id: id,
    });
  };

  return (
    <tr>
      <td>
        <a onClick={() => removeCartItem(product.id)} class="remove">
          <fa class="fa fa-close"></fa>
        </a>
      </td>
      <td>
        <a href="#">
          <img src="img/man/polo-shirt-2.png" alt="img" />
        </a>
      </td>
      <td>
        <a class="aa-cart-title" href="#">
          {product.name}
        </a>
      </td>
      <td>${product.newPrice}</td>
      <td>
        <input class="aa-cart-quantity" type="number" value="1" />
      </td>
      <td>${product.newPrice}</td>
    </tr>
  );
}
