import React from "react";
import Layout from "../components/Layout";
import MainBanner from "../features/HomePage/MainBanner";
import HomeMenuBar from "../features/HomePage/HomeMenuBar";
import Housewarming from "../features/HomePage/Housewarming";
import HousewarmingTitle from "../features/HomePage/HousewarmingTitle";
import CardSmall from "../features/HomePage/CardSmall";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { Cards_1 } from "../redux/module/homeSlice_1";
import { Cards_2 } from "../redux/module/homeSlice_2";
import { Cards_3 } from "../redux/module/homeSlice_3";
import { Cards_4 } from "../redux/module/homeSlice_4";
import { Menu_1 } from "../redux/module/homeMenuSlice_1";
import { Menu_2 } from "../redux/module/homeMenuSlice_2";
import { Shopping_1 } from "../redux/module/shoppingSlice_1";
import { PhotoReview } from "../redux/module/photoSlice";
import { Interior } from "../redux/module/interiorSlice";

const Main = () => {
	const menu_1 = useSelector(Menu_1);
	const menu_2 = useSelector(Menu_2);
	const card_1 = useSelector(Cards_1);
	const card_2 = useSelector(Cards_2);
	const card_3 = useSelector(Cards_3);
	const card_4 = useSelector(Cards_4);
	const shopping_1 = useSelector(Shopping_1);
	const photo = useSelector(PhotoReview);
	const interior = useSelector(Interior);

	const housewarming = [
		{ title: "🥇 20평 대! 공간 활용 best 4 🥇", card: card_1 },
		{ title: "인기 급상승📈 Weekly Best 💘", card: card_2 },
		{ title: "몰라서 못 썼던 여름철 꿀팁 🌊", card: card_3 },
		{ title: "우리 가족 맞춤 집들이 💁‍♀️", card: card_4 },
	];

	return (
		<Layout>
			<StPage>
				<MainBanner />
				<HomeMenuBar menu={menu_1} />
				{housewarming &&
					housewarming.map((item, index) => {
						if (item.card) {
							return (
								<div key={index}>
									<Housewarming title={item.title} card={item.card} size={"housewarming"} />
								</div>
							);
						}
						return null;
					})}
				<StSecondMenu>
					<MenuWrap>
						<HousewarmingTitle title={"카테고리별 상품 찾기"} />
					</MenuWrap>
					<HomeMenuBar menu={menu_2} />
				</StSecondMenu>
				<Housewarming title={"오늘의딜"} card={shopping_1} size={"shopping"} />
				<CardSmall
					card={photo}
					title={"이런 사진 찾고 있나요?"}
					subtitle={"좋아하실만한 인테리어 콘텐츠를 추천해드려요"}
					more={true}
				/>
			</StPage>
		</Layout>
	);
};

export default Main;

const StPage = styled.div``;

const StSecondMenu = styled.div`
	max-width: 1256px;
	margin: 0 auto;
`;

const MenuWrap = styled.div`
	display: flex;
	width: 100%;
	padding-left: 60px;
`;
