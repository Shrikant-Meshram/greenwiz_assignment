import React from "react";
import styled from "styled-components";

import { NavbarColor, Title } from "../common";

const NavbarStyled = styled.div`
  background-color: ${NavbarColor};
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Logo = styled(Title)`
  color: #fff;
  font-size: 25px;
  letter-spacing: 2px;
  padding-left: 10px;
  text-shadow: 2px 2px 3px #edaf6b;
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo>
        Fast Food Store{" "}
        <span role="img" aria-label="react-food-cart">
          🍔
        </span>
      </Logo>
    </NavbarStyled>
  );
};

export default Navbar;
