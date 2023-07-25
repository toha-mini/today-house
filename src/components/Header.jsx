import React from "react";
import GlobalNavBar from "../features/header/GlobalNavBar";
import LocalNavBar from "../features/header/LocalNavBar";
import { styled } from "styled-components";

const Header = () => {
	return (
		<StHeader>
			<GlobalNavBar />
			<LocalNavBar />
		</StHeader>
	);
};

export default Header;

const StHeader = styled.header`
	display: flex;
	/* flex-direction: column; */
`;
