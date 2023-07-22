import React from "react";

import Layout from "../components/Layout";
import MainBanner from "../features/HomePage/MainBanner";
import HomeMenu from "../features/HomePage/HomeMenuBar";
import { styled } from "styled-components";
import Housewarming from "../features/HomePage/Housewarming";
import { useSelector } from "react-redux";
import { Cards_1 } from "../redux/module/homeSlice_1";
import { Cards_2 } from "../redux/module/homeSlice_2";
import { Cards_3 } from "../redux/module/homeSlice_3";
import { Cards_4 } from "../redux/module/homeSlice_4";

const Main = () => {
	const card_1 = useSelector(Cards_1);
	const card_2 = useSelector(Cards_2);
	const card_3 = useSelector(Cards_3);
	const card_4 = useSelector(Cards_4);

	const data = [
		{ title: "🥇 20평 대! 공간 활용 best 4 🥇", card: card_1 },
		{ title: "인기 급상승📈 Weekly Best 💘", card: card_2 },
		{ title: "몰라서 못 썼던 여름철 꿀팁 🌊", card: card_3 },
		{ title: "우리 가족 맞춤 집들이 💁‍♀️", card: card_4 },
	];

	return (
		<Layout>
			<StPage>
				<MainBanner />
				<HomeMenu />
				{data.map((item, index) => (
					<div>
						<Housewarming key={index} title={item.title} card={item.card} />
					</div>
				))}
			</StPage>
		</Layout>
	);
};

export default Main;

const StPage = styled.div``;
