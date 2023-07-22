import React from "react";
import styled from "styled-components";

const UploadButton = () => {
  return (
    <div>
      <GlobalNavButton>올리기</GlobalNavButton>
    </div>
  );
};
const GlobalNavButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 40px;
  border-radius: 4px;
  padding: 0 16px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  background-color: #35c5f0;
  outline: none;
`;
export default UploadButton;
