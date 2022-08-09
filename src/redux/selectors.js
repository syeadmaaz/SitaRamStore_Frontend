const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  // cart.reduce((total, current) => (total += current.quantity), 0)
  cart.reduce((total) => (total = cart.length), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.productPrice * current.quantity),
    0
  )
);

export const cartTotalMRPSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total, current) => (total += current.productMRP), 0)
);

export const cartTotalDiscountSelector = createSelector(
  [cartSelector],
  (cart) =>
    cart.reduce(
      (total, current) => (total += current.productMRP - current.productPrice),
      0
    )
);
