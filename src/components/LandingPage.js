import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PostCard from "./PostCard";
import styled from "styled-components";
import { db } from "./firebase";
import Header from "./Header";
import { CgAddR } from "react-icons/cg";
import ImageUploader from "./ImageUploader";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;
const ModelDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 30px 0px 0px;
`;
const HeaderDiv = styled.div``;
const FileUploadContainer = styled.div`
  display: flex;
  flexdirection: row;
  top: 120px;
  width: 100vw;
  background: #fafafa;
  padding: 5px 0 5px 0;
  justify-content: center;
`;

function LandingPage(props) {
  const [post, setPost] = useState([]);
  const [open, setOpen] = useState(false);

  const handleModel = (data) => {
    setOpen(!data);
  };

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(props, "landingPage props");

  return (
    <div>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <FileUploadContainer>
        <CgAddR onClick={() => handleModel(open)} size={40} />
        <ModelDiv>{open ? <ImageUploader /> : null}</ModelDiv>
      </FileUploadContainer>

      <Div>
        {post.map((data) => (
          <PostCard data={data} />
        ))}
      </Div>
    </div>
  );
}

const mapStateToProps = ({ landingReducer }) => {
  const { userId, userName } = landingReducer;
  return {
    userId,
    userName,
  };
};

export default connect(mapStateToProps, {})(LandingPage);
