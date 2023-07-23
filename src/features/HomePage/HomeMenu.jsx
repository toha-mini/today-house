import React from "react";
import { styled } from "styled-components";

const HomeMenu = ({ src, title }) => {
	return (
		<StHomeMenu>
			<IconImage src={src} alt={title} />
			<IconName>{title}</IconName>
		</StHomeMenu>
	);
};

export default HomeMenu;

const StHomeMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex: 1;
	border: none;
	cursor: pointer;
	text-align: center;
`;

const IconName = styled.span`
	margin-top: 8px;
	font-size: 16px;
	line-height: 20px;
`;

const IconImage = styled.img`
	max-width: 88px;
	width: 100%;
`;
