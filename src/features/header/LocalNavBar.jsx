import React, { useState } from "react";
import styled from "styled-components";
import LocalNavBarTag from "./LocalNavBarTag"; // 상대 경로를 확인하십시오.

const LocalNavBar = () => {
	const navItems = ["홈", "추천", "집들이", "살림수납", "홈스토랑", "취미일상", "3D인테리어", "이벤트"];
	const [localSelected, setLocalSelected] = useState(null);
	return <NavBarWrapperContainer>dddd</NavBarWrapperContainer>;
};

export default LocalNavBar;

const NavBarWrapperContainer = styled.div`
	/* display: flex;
	flex-direction: column;
	margin-top: 20px;
	height: 51px;
	width: 1256px;
	background-color: #fff; */
`;

const NavBarWrapper = styled.div`
	/* position: fixed;
	z-index: 1000;
	transition: top 0.1s ease 0s;
	top: 80px;
	width: 100%;
	justify-content: space-between;
	background-color: #fff;
	border-bottom: 1px solid rgb(234, 237, 239); */
`;

const NavBarInner = styled.div`
	/* display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1256px;
	margin: 0 auto;
	padding: 0 50px; */
`;

const NavItemsWrapper = styled.div``;

const NavItemsContainer = styled.nav`
	/* display: flex;
	align-items: stretch;
	overflow-x: auto;
	white-space: nowrap;
	margin: 0 -5px;
	height: 50px;
	justify-content: center; */
`;

const RankItem = styled.div`
	/* position: relative;
	z-index: 1; */
`;
