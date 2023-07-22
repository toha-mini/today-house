import React from "react";
import homeicon1 from "../../imgs/mainicon1.webp";
import homeicon2 from "../../imgs/mainicon2.avif";
import homeicon3 from "../../imgs/mainicon3.webp";
import homeicon4 from "../../imgs/mainicon4.avif";
import homeicon5 from "../../imgs/mainicon5.webp";
import homeicon6 from "../../imgs/mainicon6.avif";
import homeicon7 from "../../imgs/mainicon7.avif";
import homeicon8 from "../../imgs/mainicon8.avif";
import homeicon9 from "../../imgs/mainicon9.webp";
import homeicon10 from "../../imgs/mainicon10.webp";
import { styled } from "styled-components";
import HomeMenu from "./HomeMenu";

const HomeMenuBar = () => {
	const menueIcon = [
		{ src: homeicon1, name: "쇼핑하기" },
		{ src: homeicon2, name: "쇼핑하기" },
		{ src: homeicon3, name: "쇼핑하기" },
		{ src: homeicon4, name: "쇼핑하기" },
		{ src: homeicon5, name: "쇼핑하기" },
		{ src: homeicon6, name: "쇼핑하기" },
		{ src: homeicon7, name: "쇼핑하기" },
		{ src: homeicon8, name: "쇼핑하기" },
		{ src: homeicon9, name: "쇼핑하기" },
		{ src: homeicon10, name: "쇼핑하기" },
	];
	return (
		<StHomeMenu>
			<HomeMenuContainer>
				<HomeMenuIconWrap>
					{menueIcon.map((icon, index) => (
						<HomeMenuWrap key={index}>
							<HomeMenu src={icon.src} name={icon.name} />
						</HomeMenuWrap>
					))}
					<HomeMenu />
				</HomeMenuIconWrap>
			</HomeMenuContainer>
		</StHomeMenu>
	);
};

export default HomeMenuBar;

const StHomeMenu = styled.div`
	max-width: 1256px;
	margin: 0 auto;
	padding: 0px 60px;
`;

const HomeMenuContainer = styled.div`
	margin: 30px 0px 40px;
`;

const HomeMenuIconWrap = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
const HomeMenuWrap = styled.div`
	flex: 1 1 0%;
	width: 100px;
	margin: 0;
	align-items: center;
`;
