import React from "react";
import styled from "styled-components";
import { ConfirmButton, DialogFooter } from "../FoodDialog/FoodDialog";
import { formatPrice } from "./../../data/FoodData";
import { getPrice } from "./../FoodDialog/FoodDialog";

const StyledCart = styled.div`
  position: fixed;
  right: 0;
  top: 65px;
  width: 28%;
  background: white;
  height: calc(100% - 80px);
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled.div`
  padding: 20px;
  height: 100%;
  overflow: auto;
`;

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(4, 10% 50% 20% 1fr);
  justify-content: space-between;
`;

const ItemDetail = styled.div`
  color: grey;
  font-size: 10px;
`;

const Cart = ({ orders, setOrders, setOpenFood }) => {
  const getOrderTotal = orders.reduce((total, orderItem) => {
    return total + getPrice(orderItem);
  }, 0);

  const tax = getOrderTotal * 0.05;
  const total = getOrderTotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <StyledCart>
      {orders.length === 0 ? (
        <OrderContent>Your Cart is Empty.</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Items in Cart: {orders.length}</OrderContainer>
          {orders.map((item, idx) => (
            <OrderContainer key={item}>
              <OrderItem
                style={{ cursor: "pointer" }}
                onClick={() => setOpenFood({ ...item, index: idx })}
              >
                <div>{idx + 1}</div>
                <div>
                  {item.name} | x{item.quantity}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(idx);
                  }}
                >
                  <span>❌</span>
                </div>
                <div>{formatPrice(getPrice(item))}</div>
              </OrderItem>
              <ItemDetail>
                {item.toppings
                  .filter((t) => t.checked)
                  .map((topping) => topping.name)
                  .join(", ")}
              </ItemDetail>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div>Subtotal</div>
              <div></div>
              <div></div>
              <div>{formatPrice(getOrderTotal)}</div>
            </OrderItem>
          </OrderContainer>
          <OrderContainer>
            <OrderItem>
              <div>Tax</div>
              <div></div>
              <div></div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
          </OrderContainer>
          <OrderContainer>
            <OrderItem>
              <div>Total</div>
              <div></div>
              <div></div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmButton>Proceed to Checkout</ConfirmButton>
      </DialogFooter>
    </StyledCart>
  );
};

export default Cart;
