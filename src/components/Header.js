import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { auth } from "./firebase";
import { signOutAction } from "../actions/landingAction";
import SignIn from "./SignIn";
import { Redirect } from "react-router";

const Nav = styled.nav`
  height: 54px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 5px 20px;
`;
const Img = styled.img`
  background-color: white;
`;

function Header(props) {
  const [user, setUser] = useState("");
  const [redir, setRedir] = useState(true);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("userName");
        setRedir(false);
      })
      .catch((error) => {});
  };
  
  useEffect(() => {
    setUser(localStorage.getItem("userName", JSON.stringify()));
    console.log(
      localStorage.getItem("userName", JSON.stringify()),
      "localuser"
    );
  }, []);

  if (redir) {
    return (
      <Nav>
        <Img
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='logo'
        />
        <span onClick={() => handleSignOut()}>{user}</span>
      </Nav>
    );
  } else {
    return <Redirect to='/login' />;
  }
}

const mapStateToProps = ({ landingReducer }) => {
  const { userId, userName } = landingReducer;
  return {
    userId,
    userName,
  };
};

export default connect(mapStateToProps, { signOutAction })(Header);
