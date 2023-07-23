import React from "react";
import { styled } from "styled-components";
import postlogo from "../images/postlogo.png";

const HomePicturePost = () => {
  return (
    <div>
      <NavbarContainer>
        <HeaderContainer>
          <Logo src={postlogo} alt="postlogo" />
          <UploadButton>올리기</UploadButton>
        </HeaderContainer>
        <SubHeaderContainer>
          <PictureButton>사진</PictureButton>
        </SubHeaderContainer>
      </NavbarContainer>
    </div>
  );
};
const NavbarContainer = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 80px;
`;
const HeaderContainer = styled.div`
  width: 1256px;
  height: 79px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 74px;
  height: 32px;
`;
const UploadButton = styled.div`
  cursor: pointer;
  width: 132px;
  height: 44px;
  font-size: 14px;
  border: none;
  background-color: #35c5f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 400;
  box-sizing: border-box;
  line-height: 18px;
`;

const SubHeaderContainer = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: center;
`;

const PictureButton = styled.div`
  border-bottom: 2px solid rgb(47, 52, 56);
  width: 37px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(47, 52, 56);
  font-weight: 700;
  font-size: 15px;
`;
export default HomePicturePost;
