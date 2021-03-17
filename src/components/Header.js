import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 54px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 5px 20px;
`;
const Img = styled.img`
    background-color:white;
`;

function Header() {
  return (
    <Nav>
      <Img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt = "logo" />
    </Nav>
  );
}

export default Header;
