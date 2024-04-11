import { GET_CART_INFO } from "./action";

export const cart = (state = [], { type, payload }) => {
  switch (type) {
    case GET_CART_INFO:
      return payload;
    default: {
      return state;
    }
  }
};
