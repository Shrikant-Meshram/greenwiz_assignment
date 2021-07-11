import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { formatPrice } from "./../../data/FoodData";
import QuantityInput from "./QuantityInput";
import { useQuantity } from "./../Hooks/useQuantity";
import Toppings from "./Toppings";
import { useToppings } from "./../Hooks/useToppings";

const DialogShadow = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  background-image: ${(p) => `url(${p.img})`};
  background-size: cover;
  background-position: top center;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: #000;
  height: 20px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: transparent;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

const DialogContent = styled.div`
  min-height: 100px;
  padding: 0 40px 80px;
  overflow: auto;
`;

export const DialogFooter = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  background: #ffca33;
  box-shadow: 0 2px 20px 0 grey;
`;

const pricePerTopping = 5;

export const getPrice = (order) =>
  order.quantity *
  (order.price + order.toppings.filter((t) => t.checked).length) *
  pricePerTopping;

const FoodDialogContainer = ({ openFood, setOpenFood, orders, setOrders }) => {
  const toppings = useToppings(openFood.toppings);
  const quantity = useQuantity(openFood && openFood.quantity);
  const isEditMode = openFood.index > -1;
  const closeDialog = () => {
    setOpenFood();
  };

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    closeDialog();
  };

  const editOrder = () => {
    const newOrder = [...orders];
    newOrder[openFood.index] = order;
    setOrders(newOrder);
    closeDialog();
  };

  const hasToppings = (food) => {
    return food.section === "Pizza";
  };

  return (
    <>
      <DialogShadow onClick={closeDialog} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {hasToppings(openFood) && (
            <>
              <h3>Would you like toppings?</h3>
              <Toppings {...toppings} />
            </>
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={isEditMode ? editOrder : addToOrder}>
            {isEditMode ? `Update Cart` : `Add to Order`} |{" "}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const FoodDialog = (props) => {
  if (!props.openFood) return null;
  else return <FoodDialogContainer {...props} />;
};
