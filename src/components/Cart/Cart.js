import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: 1, name: Sushi, amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["classes--alt"]}>Close</button>
        <button className={classes.button}></button>
      </div>
    </div>
  );
};

export default Cart;
