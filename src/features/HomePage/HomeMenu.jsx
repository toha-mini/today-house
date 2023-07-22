import React from "react";
import { styled } from "styled-components";

const HomeMenu = ({ src, name }) => {
	return (
		<HomeIconWrap>
			<IconImage src={src} />
			<IconName>{name}</IconName>
		</HomeIconWrap>
	);
};

export default HomeMenu;

const HomeIconWrap = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 12px;
`;

const IconName = styled.div`
	display: block;
	margin-top: 8px;
	font-size: 16px;
	line-height: 20px;
`;

const IconImage = styled.img`
	max-width: 88px;
	max-width: 100%;
`;
