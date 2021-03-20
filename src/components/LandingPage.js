import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PostCard from "./PostCard";
import styled from "styled-components";
import { db } from "./firebase";
import MainWrapper from "./MainWrapper";
import { Redirect } from "react-router-dom";
import Header from "./Header";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

function LandingPage(props) {
  const [post, setPost] = useState([]);
  const [tempUser, setTempUser] = useState("");

  useEffect(() => {
    // setTempUser(localStorage.getItem("userName", JSON.stringify()));

    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  // useEffect(() => {
  //   setTempUser(localStorage.getItem("userName", JSON.stringify()));
  // });
  console.log(props, "landingPage props");
  // if (tempUser != "") {
  return (
    // <MainWrapper>
    <div>
      <Header />
      <Div>
        {post.map((data) => (
          <PostCard data={data} />
        ))}
      </Div>
    </div>
    // </MainWrapper>
  );
  // } else {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/",
  //       }}
  //     />
  //   );
  // }
}

const mapStateToProps = ({ landingReducer }) => {
  const { userId, userName } = landingReducer;
  return {
    userId,
    userName,
  };
};

export default connect(mapStateToProps, {})(LandingPage);
