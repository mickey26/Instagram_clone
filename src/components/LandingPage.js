import React, { useState, useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import PostCard from "./PostCard";
import styled from "styled-components";
import { db } from "./firebase";
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

function LandingPage(props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(props, post, "landingPage props");
  return (
    <Div>
      <Header />
      {post.map((data) => (
        <PostCard data={data} />
      ))}
    </Div>
  );
}

const mapStateToProps = ({ landingReducer }) => {};

export default connect(mapStateToProps, {})(LandingPage);
