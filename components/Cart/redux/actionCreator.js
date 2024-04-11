import { GET_CART_INFO } from "./action";

export const setCartInfo = (data) => {
  return { type: GET_CART_INFO, payload: data };
};
