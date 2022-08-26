import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const shownCarHandler = () => {
    setCartIsShown(true);
  };
  const hideCarHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCarHandler} />}
      <Header onShowCart={shownCarHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
