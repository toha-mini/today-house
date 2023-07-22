import React from "react";
import { styled } from "styled-components";
import postlogo from "../../images/postlogo.png";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <HeaderTitle>
          <PostLogoImage src={postlogo} alt="postlogo" />
          <UploadButton>올리기</UploadButton>
        </HeaderTitle>
      </NavContainer>
      <NavSubContainer>
        <HeaderSubTitle>사진</HeaderSubTitle>
      </NavSubContainer>
    </>
  );
};
const NavContainer = styled.div`
  top: 0px;
  left: 0px;
  right: 0px;
  border-bottom: 1px solid #dbdbdb;
`;

const HeaderTitle = styled.div`
  border: 2px solid black;
  margin: auto;
  width: 1256px;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostLogoImage = styled.img`
  width: 72px;
  height: 32px;
`;

const UploadButton = styled.div`
  width: 132px;
  height: 44px;
  background-color: #dbdbdb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavSubContainer = styled.div`
  top: 0px;
  left: 0px;
  right: 0px;
  border-bottom: 1px solid #dbdbdb;
`;

const HeaderSubTitle = styled.div`
  border: 2px solid green;
  margin: auto;
  width: 1256px;
  height: 48px;
  text-align: center;
  display: flex;
`;
export default Navbar;
