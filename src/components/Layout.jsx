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
	position: relative;
	top: 111px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	width: 100%;
`;
