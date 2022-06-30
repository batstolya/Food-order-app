import { createContext, Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import CartProvider from "./store/CartProvider";

export const ArrContex = createContext({
  myvalue: () => {},
});

function App() {
  const [cartIsSwon, setCartIsSwon] = useState(false);


  
  
  const showCartHandler = () => {
    setCartIsSwon(true);
  };
  const hideCartHandler = () => {
    setCartIsSwon(false);
  };

  return (
    <CartProvider>
      {cartIsSwon && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
