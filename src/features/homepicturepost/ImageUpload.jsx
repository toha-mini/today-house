import React, { useState, useRef } from "react";
import styled from "styled-components";
import camera from "../../imgs/camera.png";

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showFileInput, setShowFileInput] = useState(false);

  const handleImageSelect = (index) => (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...selectedImages];
        updatedImages[index] = reader.result;
        setSelectedImages(updatedImages);
        setShowFileInput(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const onClickplusImage = (index) => () => {
    // 이미지버튼 추가하기 했을 때
    setShowFileInput(true);
    document.getElementById(`imageInput-${index}`).click();
  };

  return (
    <ImageUploadContainer>
      <Upload>
        {selectedImages.map((imageSrc, index) => (
          <StImageWrap key={index}>
            <CameraLogo src={camera} alt="camera" />
            <FirstContent>사진을 끌어다 놓으세요</FirstContent>
            <SecondContent>10장까지 올릴 수 있어요.</SecondContent>

            <Image src={imageSrc} alt="selected" />
            {showFileInput && (
              <input
                id={`imageInput-${index}`}
                type="file"
                multiple="multiple"
                accept="image/jpg, image/png, image/jpeg"
                onChange={handleImageSelect(index)}
                style={{ display: "none" }}
              />
            )}

            {imageSrc === null && (
              <PcUploadButton onClick={onClickplusImage(index)}>
                PC에서 불러오기
              </PcUploadButton>
            )}
          </StImageWrap>
        ))}
        {selectedImages.length === 0 && (
          <PcUploadButton onClick={onClickplusImage(selectedImages.length)}>
            PC에서 불러오기
          </PcUploadButton>
        )}
      </Upload>
    </ImageUploadContainer>
  );
};

export default ImageUpload;

const Image = styled.img`
  position: relative;
  width: 430px;
  max-height: 100%;
  align-items: center;
  // object-fit: cover;
  // object-position: center;
  overflow-y: scroll;
`;
const ImageUploadContainer = styled.div`
  background-color: rgb(247, 249, 250);
  width: 428px;
  display: flex;
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
  object-fit: cover;
  object-position: center;
  display: block;
`;
const PcUploadButton = styled.div`
  cursor: pointer;
  width: 124px;
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
  font-weight: 400;
`;

const StImageWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
