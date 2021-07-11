import { useState } from "react";

export const useToppings = (defaultTopping) => {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );
  const checkTopping = (index) => {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  };
  return {
    toppings,
    checkTopping,
  };
};

const toppingsList = ["Extra Cheese", "Onion", "Sausage", "Pepper", "Spinach"];

const getDefaultToppings = () => {
  return toppingsList.map((topping) => ({
    name: topping,
    checked: false,
  }));
};
