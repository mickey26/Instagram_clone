import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { BiHeart, BiMessageRounded } from "react-icons/bi";

const Div = styled.div`
  margin-top: 30px;
  background-color: white;
  border: 1px solid grey;
  max-width: 500px;
  margin-bottom: 40px;
  box-shadow: 5px 5px 5px 5px grey;
  padding: 5px;
`;
const Nav = styled.nav`
  height: 60px;
  padding: 16px 16px 0 16px;
`;
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
`;
const ImgPost = styled.img`
  width: 100%;
  object-fit: contain;
`;
const Fotter = styled.div`
  // padding: 4px 0 8px 4px;
  margin-top: 15px;
  padding: 10px;
`;

const H6 = styled.h6``;
const H3 = styled.h3``;
const P = styled.p``;

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
          <H3>{props.data.username}</H3>
        </HeaderDiv>
      </Nav>
      <ImgPost src={props.data.imageurl} />
      <Fotter>
        <BiHeart style={{ paddingRight: "8px" }} size={30} />
        <BiMessageRounded style={{ paddingLeft: "7px" }} size={30} />
        <P>
          {props.data.username}: {props.data.caption}
        </P>
      </Fotter>
    </Div>
  );
}

export default PostCard;
