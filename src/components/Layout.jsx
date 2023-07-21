import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			asdasdasd
			<StLayout>{children}</StLayout>
		</div>
	);
};

export default Layout;

const StLayout = styled.div`
	height: calc(100vh - 45px);
	/* background-color: ${({ bgColor }) => {
		return bgColor;
	}}; */
	padding: 24px;
`;
