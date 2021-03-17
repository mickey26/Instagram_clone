import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { BiHeart, BiMessageRounded } from "react-icons/bi";

const Div = styled.div`
  margin-top: 30px;
  background-color: white;
  border: 1px solid black;
  max-width: 500px;
  margin-bottom: 60px;
`;
const Nav = styled.nav`
  height: 60px;
  padding: 16px 16px 0 16px;
`;
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  //   border-bottom:1px solid black;
`;
const ImgPost = styled.img`
  width: 100%;
  object-fit: contain;
`;
const Fotter = styled.div`
  padding: 4px;
`;

const H6 = styled.h6``;

function PostCard(props) {
  console.log(props, "props in postcard");
  return (
    <Div>
      <Nav>
        <HeaderDiv>
          <Avatar
            style={{ marginRight: "10px" }}
            alt={props.data.username}
            src='/static/images/avatar/1.jpg'
          />
          <h3>{props.data.username}</h3>
        </HeaderDiv>
      </Nav>
      <ImgPost src={props.data.imageurl} />
      <Fotter>
        <BiHeart style={{ paddingRight: "7px" }} size={30} />
        <BiMessageRounded style={{ paddingRight: "7px" }} size={30} />
        <H6>
          {props.data.username}: {props.data.caption}
        </H6>
      </Fotter>
    </Div>
  );
}

export default PostCard;
