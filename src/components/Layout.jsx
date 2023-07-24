import React, { memo } from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const Layout = ({ children }) => {
	console.log("Layout is rendering");
	return (
		<StLayout>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</StLayout>
	);
};

export default memo(Layout);

const StLayout = styled.div`
	flex: 1;
	margin: auto;
`;

const Main = styled.div`
	top: 111px;
	margin: auto;
	width: 100%;
`;
