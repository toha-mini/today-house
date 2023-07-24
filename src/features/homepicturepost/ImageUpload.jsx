import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import camera from "../../imgs/camera.png";

const ImageUpload = () => {
  const [visible, setIsvisible] = useState(false);
  const imageInput = useRef();
  const onClickplusImage = () => {
    // 이미지버튼 추가하기 했을 때
    imageInput.current.click();
  };
  return (
    <div>
      <ImageUploadContainer>
        <Upload>
          <CameraLogo src={camera} />
          <FirstContent>사진을 끌어다 놓으세요</FirstContent>
          <SecondContent>10장까지 올릴 수 있어요.</SecondContent>

          <ButtonContainer>
            <input
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              ref={imageInput}
              style={{ display: "none" }}
            />
            {visible ? (
              ""
            ) : (
              <PcUploadButton onClick={onClickplusImage}>
                PC에서 불러오기
              </PcUploadButton>
            )}
          </ButtonContainer>
        </Upload>
      </ImageUploadContainer>
    </div>
  );
};

const ImageUploadContainer = styled.div`
  background-color: rgb(247, 249, 250);
  width: 428px;
  height: 428px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Upload = styled.div`
  text-align: center;
`;
const CameraLogo = styled.img`
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
export default ImageUpload;
