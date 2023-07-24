import React from "react";
import GlobalNavBar from "../features/header/GlobalNavBar";
import LocalNavBar from "../features/header/LocalNavBar";
import { styled } from "styled-components";
import test from "../features/header/test";

const Header = () => {
	return (
		<StHeader>
			<GlobalNavBar />
			<test />
			{/* <LocalNavBar /> */}
		</StHeader>
	);
};

export default Header;

const StHeader = styled.header`
	display: flex;
	/* flex-direction: column; */
`;
