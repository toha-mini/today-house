import React, { memo } from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const Layout = ({ children }) => {
	console.log("Layout is rendering");
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default memo(Layout);

const Main = styled.div`
	/* top: 111px; */
	margin: auto;
	width: 100%;
`;
