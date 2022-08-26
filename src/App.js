import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvide from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const shownCarHandler = () => {
    setCartIsShown(true);
  };
  const hideCarHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvide>
      {cartIsShown && <Cart onClose={hideCarHandler} />}
      <Header onShowCart={shownCarHandler} />
      <main>
        <Meals />
      </main>
    </CartProvide>
  );
}

export default App;
