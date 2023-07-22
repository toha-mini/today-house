import React from "react";
import { styled } from "styled-components";
import housewarming1 from "../../imgs/housewarming1.jpeg";
import housewarming2 from "../../imgs/housewarming2.jpeg";
import housewarming3 from "../../imgs/housewarming3.jpeg";
import housewarming4 from "../../imgs/housewarming4.jpeg";
import HousewarmingCard from "./HousewarmingCard";

const Housewarming = () => {
	return (
		<StHousewarming>
			<HousewarmingCardTitle>
				<HousewarmingCardTitleWrap>
					<HousewarmingCardContainer>
						<HousewarmingTitle>{"🥇 20평 대! 공간 활용 best 4 🥇"}</HousewarmingTitle>
					</HousewarmingCardContainer>
				</HousewarmingCardTitleWrap>
				<HousewarmingButtonWrap>
					<HousewarmingMore>{"더보기"}</HousewarmingMore>
				</HousewarmingButtonWrap>
			</HousewarmingCardTitle>
			<HousewarmingCardImageWrap>
				<HousewarmingCardImageContainer>
					<HousewarmingCard />
				</HousewarmingCardImageContainer>
			</HousewarmingCardImageWrap>
		</StHousewarming>
	);
};

export default Housewarming;

const StHousewarming = styled.div`
	margin: 40px auto;
	max-width: 1256px;
	padding: 0 60px;
`;

const HousewarmingCardTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 20px 0;
	line-height: 1;
`;

const HousewarmingCardTitleWrap = styled.div`
	flex: 1 1 0%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	min-width: 0px;
`;

const HousewarmingCardContainer = styled.div`
	display: inline-flex;
	align-items: center;
	min-width: 100%;
	cursor: pointer;
`;

const HousewarmingTitle = styled.strong`
	overflow: hidden;
	display: inline-flex;
	font-weight: 700;
	letter-spacing: -0.3px;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 20px;
	line-height: 28px;
`;

const HousewarmingButtonWrap = styled.div`
	display: flex;
	align-items: center;
	height: 0px;
	margin-left: 10px;
`;

const HousewarmingMore = styled.strong`
	margin: 0px;
	padding: 0px;
	border: none;
	font-size: 16px;
	line-height: 20px;
	cursor: pointer;
	color: rgb(53, 197, 240);
`;

const HousewarmingCardImageWrap = styled.div`
	margin: 0px;
	padding: 0px;
`;

const HousewarmingCardImageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`;

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
	/* object-fit: cover; */
	/* position: absolute;
	top: 0px;
	left: 0px; */
	/* transition: transform 0.2s ease 0s; */
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
