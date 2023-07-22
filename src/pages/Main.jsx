import React from "react";

import Layout from "../components/Layout";
import MainBanner from "../features/HomePage/MainBanner";
import HomeMenu from "../features/HomePage/HomeMenuBar";
import { styled } from "styled-components";
import Housewarming from "../features/HomePage/Housewarming";

const Main = () => {
	return (
		<Layout>
			<StPage>
				<MainBanner />
				<HomeMenu />
				<Housewarming />
			</StPage>
		</Layout>
	);
};

export default Main;

const StPage = styled.div``;
