import React from "react";
import styled from "styled-components";

const ToppingsGrid = styled.div`
  display: grid;
  grid-auto-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckBoxLabel = styled.label`
  cursor: pointer;
`;

const Toppings = ({ toppings, checkTopping }) => {
  return (
    <ToppingsGrid>
      {console.log(toppings, "Ye Chutiyapa hai")}
      {toppings.map((topping, idx) => (
        <CheckBoxLabel key={topping}>
          <ToppingCheckbox
            type="checkbox"
            checked={topping.checked}
            onClick={() => checkTopping(idx)}
          />
          {topping.name}
        </CheckBoxLabel>
      ))}
    </ToppingsGrid>
  );
};

export default Toppings;
