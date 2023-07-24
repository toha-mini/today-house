import React from "react";

import Layout from "../components/Layout";
import MainBanner from "../features/HomePage/MainBanner";
import HomeMenu from "../features/HomePage/HomeMenuBar";
import { styled } from "styled-components";
import { CardLayout } from "./CardLayout";

const Main = () => {
	return (
		<Layout>
			<StPage>
				<MainBanner />
				<HomeMenu />
				<CardLayout/>
			</StPage>
		</Layout>
	);
};

export default Main;

const StPage = styled.div``;
