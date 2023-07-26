import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import camera from "../../imgs/camera.png";
import styled from "styled-components";

const DropZone = () => {
  const [selectedImages, setSelectedImages] = useState("");
  console.log("악", selectedImages);

  useEffect(() => {
    setSelectedImages(selectedImages);
  }, [selectedImages]);

  const onDrop = (acceptedFiles) => {
    setSelectedImages(acceptedFiles);
    console.log("acceptedFiles", acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {selectedImages.length === 0 && (
        <ImageUploadContainer>
          <PictureContainer>
            <CameraLogo src={camera} alt="camera" />
            <FirstContent>사진을 끌어다 놓으세요</FirstContent>
            <SecondContent>10장까지 올릴 수 있어요.</SecondContent>
            <UploadButton>PC에서 불러오기</UploadButton>
          </PictureContainer>
        </ImageUploadContainer>
      )}
      {selectedImages.length >= 1 && (
        <div>
          {selectedImages.map((file) => (
            <StImageWrap>
              <Image
                key={file.name}
                src={URL.createObjectURL(file)}
                alt={file.name}
                s
              />
            </StImageWrap>
          ))}
        </div>
      )}
    </div>
  );
};

const ImageUploadContainer = styled.div`
  background-color: rgb(247, 249, 250);
  width: 374px;
  height: 374px;
  display: flex;
`;
const PictureContainer = styled.div`
  width: 374px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CameraLogo = styled.img`
  margin-bottom: 10px;
  width: 35px;
  height: 35px;
`;
const FirstContent = styled.div`
  color: rgb(130, 140, 148);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 5px;
`;
const SecondContent = styled.div`
  color: rgb(130, 140, 148);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 5px;
`;
const UploadButton = styled.div`
  cursor: pointer;
  width: 127px;
  height: 40px;
  background-color: rgb(53, 197, 240);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-weight: 400;
`;

const StImageWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  max-width: 374px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
export default DropZone;
