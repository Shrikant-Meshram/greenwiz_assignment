import React from "react";
import styled from "styled-components";

import { FoodItems } from "../../data/FoodData";
import { FoodGrid, Food, FoodLabel } from "./FoodGrid";
import { formatPrice } from "./../../data/FoodData";

const StyledMenu = styled.div`
  height: 100%;
  width: 67%;
  margin: 65px 0 0 20px;
  background: #fff;
  padding: 5px 20px 20px 20px;
`;

const Menu = ({ setOpenFood }) => {
  return (
    <StyledMenu>
      {Object.entries(FoodItems).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food img={food.img} onClick={() => setOpenFood(food)}>
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </StyledMenu>
  );
};

export default Menu;
