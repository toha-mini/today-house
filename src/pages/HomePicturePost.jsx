import React, { useState } from "react";
import { styled } from "styled-components";
import postlogo from "../imgs/postlogo.png";
import { BiSolidDownArrow } from "react-icons/bi";
import SpaceInofoModal from "../features/homepicturepost/SpaceInofoModal";
import ImageUpload from "../features/homepicturepost/ImageUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function getCookie(cookieName) {
  var cookieValue = null;
  if (document.cookie) {
    var array = document.cookie.split(escape(cookieName) + "=");
    if (array.length >= 2) {
      var arraySub = array[1].split(";");
      cookieValue = unescape(arraySub[0]);
    }
  }
  return cookieValue;
}

const HomePicturePost = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [titleImage, setTitleImage] = useState([]);
  const [contents, setContents] = useState("");
  const [menu, setMenu] = useState("공간정보추가");
  console.log(titleImage);
  const OnclickModalOpen = () => {
    setIsOpen(!isOpen);
  };
  const contentsChange = (event) => {
    setContents(event.target.value);
  };

  const isJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const Data = new FormData();
    const content = { content: contents };
    Data.append(
      "content",
      new Blob([JSON.stringify(content)], { type: "application/json" })
    );
    console.log("이미지", titleImage);
    // if (titleImage) {
    // Data.append("titleImage", titleImage);
    // }

    titleImage.forEach((file, index) => {
      if (index === 0) {
        Data.append("titleImage", file);
        console.log("첫번째", file);
      } else {
        Data.append(`subImage${index}`, file);
        console.log("두번째 부터:", file);
      }
    });

    try {
      const accessToken = getCookie("accessToken");
      console.log(accessToken);
      console.log("데이터임미다", Data);
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/posts`,

        Data,
        {
          headers: {
            // Accept: "*/*",
            "Content-Type": "multipart/form-data",
            Authorization: accessToken,
          },
        }
      );
      // 데이터 전송 성공 후 작업
      console.log("데이터 전송 성공");
      console.log(res);
      moveHome();

      return res;
    } catch (error) {
      // 데이터 전송 실패 처리
      console.error("데이터 전송 실패", error);
    }
  };

  const moveHome = () => {
    navigate("/");
  };

  return (
    <PageContainer>
      <NavbarContainer>
        <HeaderContainer>
          <Logo
            src={postlogo}
            alt="postlogo"
            onClick={() => {
              navigate("/");
            }}
          />
          <UploadButton onClick={handleSubmit}>올리기</UploadButton>
        </HeaderContainer>
      </NavbarContainer>
      <SubHeaderContainer>
        <PictureButton>사진</PictureButton>
      </SubHeaderContainer>
      <MainContainer>
        {/* 컴포넌트 분리 */}
        <ImageUpload setTitleImage={setTitleImage} titleImage={titleImage} />
        <ContentsUploadContainer>
          <Contents>
            <ContentTextArea
              type="text"
              value={contents}
              onChange={contentsChange}
              placeholder="어떤 사진인지 짧은 소개로 시작해보세요.&#13;&#10;다양한 #태그도 추가할 수 있어요."
            />
          </Contents>
          <div>
            <SpaceInfo
              onClick={OnclickModalOpen}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            >
              {menu}
              <BiSolidDownArrow style={{ marginLeft: "300px" }} />
            </SpaceInfo>
          </div>
          {isOpen && (
            <SpaceInofoModal
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              setMenu={setMenu}
            />
          )}
        </ContentsUploadContainer>
      </MainContainer>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  height: 100%;
`;

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
  cursor: pointer;
  width: 74px;
  height: 32px;
`;
const UploadButton = styled.div`
  cursor: pointer;
  width: 132px;
  height: 44px;
  font-size: 14px;
  border: none;
  background-color: rgb(53, 197, 240);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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
  width: 943px;
  height: 480px;
  margin: auto;
  margin-top: 40px;
  display: flex;
`;

const ContentsUploadContainer = styled.div`
  width: 514px;
  height: 440px;
  margin-left: 10px;
`;

const Contents = styled.div`
  width: 437px;
  height: 152px;
`;
const ContentTextArea = styled.textarea`
  width: 437px;
  height: 152px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  resize: none;
  padding: 16px;
  font-size: 14px;
  line-height: 20px;
`;

const SpaceInfo = styled.div`
  cursor: pointer;
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
