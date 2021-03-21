import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "./firebase";
import { Link, Redirect } from "react-router-dom";
import landingReducer from "../reducers/landingReducer";
import { signInAction } from "../actions/landingAction";
import { connect } from "react-redux";

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
  background: #ffffff;
`;
const ContainerDiv = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  flex-direction: column;
  margin-left: 60px;
`;
const ImgLogo = styled.img`
  height: 40px;
`;
const Head = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 20px 20px 0 20px;
`;
const SignupContainerBody = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px 20px 40px;
`;

const Input = styled.input`
  margin: 5px;
  padding: 9px 0 7px 8px;
  border: 1px solid grey;
  width: 250px;
  background: #fafafa;
  border-radius: 7px;
`;
const SignUpButton = styled.div`
  margin: 20px;
  text-align: center;
  background: #54b3f3;
  padding: 9px;
  border-radius: 7px;
`;
const ImgBanner = styled.img``;
const Text = styled.text``;

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redir, setRedir] = useState(true);

  const handleSignIn = (event) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // console.log(userCredential.user.displayName, "userCredi");
        localStorage.setItem(
          "userName",
          JSON.stringify(userCredential.user.displayName)
        );
        setRedir(false);
      })
      .catch((error) => alert(error.message));
  };
  console.log(props, "signedUser");

  if (redir) {
    return (
      <Div>
        <ImgBanner src='https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg' />
        <ContainerDiv>
          <Head>
            <ImgLogo
              src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
              alt='logo'
            />
          </Head>
          <SignupContainerBody>
            <Input
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <SignUpButton type='submit' onClick={() => handleSignIn()}>
              SignIn
            </SignUpButton>

            <Text>Want to join magical world of InstaKilo</Text>
            <Link to='/'>SignUp</Link>
          </SignupContainerBody>
        </ContainerDiv>
      </Div>
    );
  } else {
    return <Redirect to='/home' />;
  }
}

const mapStateToProps = (signInAction) => {
  const { userId } = landingReducer;
  return {
    userId,
  };
};

export default connect(mapStateToProps, { signInAction })(SignIn);
