import React, { memo } from "react";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  console.log("Layout is rendering");
  return (
    <>
      <Header />
      <StLayout>{children}</StLayout>
    </>
  );
};

export default memo(Layout);

const StLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: calc(100vh - 45px);
  /* background-color: ${({ bgColor }) => {
    return bgColor;
  }}; */
  padding: 24px;
`;
