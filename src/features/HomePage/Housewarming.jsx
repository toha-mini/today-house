import React from "react";
import { styled } from "styled-components";
import HousewarmingCard from "./HousewarmingCard";
import HousewarmingTitle from "./HousewarmingTitle";

const Housewarming = ({ title, card, size }) => {
	return (
		<StHousewarming>
			<HousewarmingCardTitle>
				<HousewarmingTitle title={title} />
				<HousewarmingButtonWrap>
					<HousewarmingMore>{"더보기"}</HousewarmingMore>
				</HousewarmingButtonWrap>
			</HousewarmingCardTitle>
			<HousewarmingCardImageWrap>
				<HousewarmingCardImageContainer>
					{card.map((item, index) => (
						<HousewarmingCard key={index} src={item.src} title={item.title} text={item.text} size={size} />
					))}
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
