import CheeseBurgerImg from "../assets/images/cheeze-burger.jpg";
import ChickenPizzaImg from "../assets/images/chicken-pizza.jpg";
import BurgerImg from "../assets/images/burger.jpg";
import PeperoniPizzaImg from "../assets/images/peperoni-pizza.jpg";
import SandwichImg from "../assets/images/sandwich.jpg";
import VegBurgerImg from "../assets/images/veg-burger.jpg";
import VegPizzaImg from "../assets/images/veg-pizza.jpg";
import daltadka from "../assets/images/dalTadka.jpg"
import rice from "../assets/images/jeera-rice.jpg"
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

const FoodData = [
  {
    name: "Dal Tadka",
    img: daltadka,
    section: "Main Cource",
    price: 150,
  },
  {
    name: "Jeera Rice ",
    img: rice ,
    section: "Main Cource",
    price: 90,
  },
  {
    name: "Burger",
    img: CheeseBurgerImg,
    section: "Burger",
    price: 150,
  },
  {
    name: "Burger",
    img: BurgerImg,
    section: "Burger",
    price: 80,
  },
  {
    name: "Veggie Burger",
    img: VegBurgerImg,
    section: "Burger",
    price: 100,
  },
  {
    name: "Veggie Pizza",
    img: VegPizzaImg,
    section: "Pizza",
    price: 300,
  },
  {
    name: "Sandwich",
    img: SandwichImg,
    section: "Sandwich",
    price: 100,
  },
  {
    name: "Chicken Pizza",
    img: ChickenPizzaImg,
    section: "Pizza",
    price: 400,
  },
  {
    name: "Pepperoni Pizza",
    img: PeperoniPizzaImg,
    section: "Pizza",
    price: 500,
  },
];

const FoodItems = FoodData.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

export { FoodItems };
