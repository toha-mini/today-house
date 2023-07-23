import React from "react";
import { css, styled } from "styled-components";

const HousewarmingCard = ({ src, title, text, size }) => {
	return (
		<HousewarmingCardItem>
			<HousewarmingCardImageInner>
				<HousewarmingCardImage src={src} size={size} />
			</HousewarmingCardImageInner>
			<HousewarmingCardName>
				<HousewarmingCardNameWrap>
					<HousewarmingCardNameItem>{title}</HousewarmingCardNameItem>
					{text}
				</HousewarmingCardNameWrap>
			</HousewarmingCardName>
		</HousewarmingCardItem>
	);
};

export default HousewarmingCard;

const HousewarmingCardItem = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	min-width: 0px;
	flex-flow: column;
`;

const HousewarmingCardImageInner = styled.div`
	overflow: hidden;
	position: relative;
	border-radius: 4px;
`;

const HousewarmingCardImage = styled.img`
	width: 100%;
	height: 179px;
	border-radius: 4px;

	${({ size }) => {
		switch (size) {
			case "housewarming":
				return css`
					height: 179px;
				`;
			case "shopping":
				return css`
					height: 269px;
				`;
			case "interior":
				return css`
					height: 243px;
					width: 365px;
				`;
			default:
				return css``;
		}
	}}
`;

const HousewarmingCardName = styled.div`
	min-width: 0px;
	font-size: 16px;
	line-height: 24px;
	color: rgb(47, 52, 56);
	word-break: keep-all;
	overflow-wrap: break-word;
`;

const HousewarmingCardNameWrap = styled.p`
	overflow: hidden;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	color: rgb(47, 52, 56);
	word-break: keep-all;
	overflow-wrap: break-word;
`;

const HousewarmingCardNameItem = styled.span`
	color: rgb(53, 197, 240);
	font-weight: 700;
	min-width: 0px;
	font-size: 16px;
	line-height: 24px;

	word-break: keep-all;
	overflow-wrap: break-word;
`;
