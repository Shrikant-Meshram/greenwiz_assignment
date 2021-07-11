import styled from "styled-components";
import { Title } from "../common";

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  grid-auto-rows: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Food = styled.div`
  padding: 10px;
  font-size: 20px;
  background-image: ${(p) => `url(${p.img})`};
  background-position: top center;
  background-size: cover;
  box-shadow: 0px 0px 0px grey;
  filter: contrast(75%);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const FoodLabel = styled(Title)`
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export { FoodGrid, FoodLabel, Food };
