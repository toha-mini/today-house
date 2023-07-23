import React from "react";
import { styled } from "styled-components";
import postlogo from "../images/postlogo.png";
import camera from "../images/camera.png";
import SpaceInofoModal from "../components/homepicturepost/SpaceInofoModal";

const HomePicturePost = () => {
  return (
    <div>
      <NavbarContainer>
        <HeaderContainer>
          <Logo src={postlogo} alt="postlogo" />
          <UploadButton>올리기</UploadButton>
        </HeaderContainer>
      </NavbarContainer>
      <SubHeaderContainer>
        <PictureButton>사진</PictureButton>
      </SubHeaderContainer>
      <MainContainer>
        <ImageUploadContainer>
          <ImageUpload>
            <CameraLogo src={camera} />
            <FirstContent>사진을 끌어다 놓으세요</FirstContent>
            <SecondContent>10장까지 올릴 수 있어요.</SecondContent>
            <ButtonContainer>
              <PcUploadButton>PC에서 불러오기</PcUploadButton>
            </ButtonContainer>
          </ImageUpload>
        </ImageUploadContainer>
        <ContentsUploadContainer>
          <Contents>
            <ContentInput
              type="text"
              placeholder="어떤 사진인지 짧은 소개로 시작해보세요."
            />
          </Contents>
          <SpaceInfo>공간정보추가</SpaceInfo>
          <SpaceInofoModal />
        </ContentsUploadContainer>
      </MainContainer>
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
  background-color: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bdbdbd;
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
  cursor: pointer;
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

const MainContainer = styled.div`
  /* border: 1px solid green; */
  width: 943px;
  height: 480px;
  margin: auto;
  margin-top: 40px;
  display: flex;
`;

const ImageUploadContainer = styled.div`
  background-color: rgb(247, 249, 250);
  /* border: 2px solid blue; */
  width: 428px;
  height: 428px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageUpload = styled.div`
  /* border: 1px solid red; */
  text-align: center;
`;
const CameraLogo = styled.img`
  /* border: 1px solid black; */
  width: 35px;
  height: 35px;
`;
const FirstContent = styled.div`
  color: rgb(130, 140, 148);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

const SecondContent = styled.div`
  color: rgb(130, 140, 148);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 2px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const PcUploadButton = styled.div`
  cursor: pointer;
  width: 122px;
  height: 40px;
  font-size: 14px;
  border: none;
  background-color: rgb(53, 197, 240);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-weight: 400;
  box-sizing: border-box;
  line-height: 18px;
`;
const ContentsUploadContainer = styled.div`
  /* border: 2px solid red; */
  width: 514px;
  height: 440px;
  margin-left: 10px;
`;

const Contents = styled.div`
  /* border: 2px solid pink; */
  width: 437px;
  height: 152px;
`;
const ContentInput = styled.input`
  width: 437px;
  height: 152px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;

const SpaceInfo = styled.div`
  border: 2px solid gray;
  width: 437px;
  height: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin-top: 10px;
  color: #dbdbdb;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 15px;
`;
export default HomePicturePost;
