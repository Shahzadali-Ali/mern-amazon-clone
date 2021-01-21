/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function CartProduct() {
    return (
        <tr>
                 <td><a class="remove" href="#"><fa class="fa fa-close"></fa></a></td>
                 <td><a href="#"><img src="img/man/polo-shirt-2.png" alt="img"/></a></td>
                 <td><a class="aa-cart-title" href="#">Polo T-Shirt</a></td>
                 <td>$150</td>
                 <td><input class="aa-cart-quantity" type="number" value="1"/></td>
                 <td>$150</td>
               </tr>
    )
}
