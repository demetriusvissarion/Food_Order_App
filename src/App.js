import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [modalState, setModalState] = useState(false);

  const showCartHandler = (props) => {
    setModalState(true);
  };

  const hideCartHandler = (props) => {
    setModalState(false);
  };

  return (
    <CartProvider>
      {modalState && <Cart onClose={hideCartHandler} />}
      <Header onShowCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
