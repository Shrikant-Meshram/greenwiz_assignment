import React from "react";
import { GlobalStyles } from "./components/common";

import { FoodDialog } from "./components/FoodDialog/FoodDialog";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

import { useOpenFood } from "./components/Hooks/useOpenFood";
import { useOrders } from "./components/Hooks/useOrders";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  return (
    <>
      <GlobalStyles />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Menu {...openFood} />
      <Cart {...orders} {...openFood} />
    </>
  );
}

export default App;
