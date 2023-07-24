import React from "react";
import styled from "styled-components";
import HomeMenu from "./HomeMenu";

const HomeMenuBar = ({ menu }) => {
	return (
		<StHomeMenu>
			<HomeMenuContainer>
				<HomeMenuWrap>
					{menu && menu.map((item, index) => <HomeMenu key={index} src={item.src} title={item.title} />)}
				</HomeMenuWrap>
				<HomeMenu />
			</HomeMenuContainer>
		</StHomeMenu>
	);
};

export default HomeMenuBar;

const StHomeMenu = styled.div`
	display: flex;
	max-width: 1256px;
	margin: 0 auto;
	padding: 0px 60px;
`;

const HomeMenuContainer = styled.div`
	display: flex;
	margin-top: 30px;
	margin: none;
	justify-content: space-between;
	flex: 1 1 0%;
`;

const HomeMenuWrap = styled.div`
	display: flex;
	padding: 0px;
	margin: 0;
	width: 100%;
`;
