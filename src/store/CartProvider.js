import CartContex from "./cart-content";

const CartProvide = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvide;
