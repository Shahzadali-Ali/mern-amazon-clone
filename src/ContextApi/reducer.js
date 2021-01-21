export const initialState = {
  user: null,
  cart: [],
  wishlist: [],
};

export const cartTotal = (cart) => {
  let total = 0;
  cart.forEach((item) => (total += item.newPrice));

  return total.toFixed(2);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.includes(action.product)
          ? state.cart
          : [...state.cart, action.product],
      };

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
};

export default reducer;
