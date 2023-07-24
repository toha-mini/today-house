import React from "react";
import { styled } from "styled-components";

const Footer = () => {
	return (
		<StFooter>
			<FooterWrap>
				<FooterSection1>
					<FooterTitle>이노베이션 캠프</FooterTitle>
					<FooterSubTitle>클론프로젝트</FooterSubTitle>
				</FooterSection1>
				<FooterSectionLine></FooterSectionLine>
				<div>
					<FooterTeam>조원</FooterTeam>
					<FooterGrid>
						<div>류이환</div>
						<div>최도영</div>
						<div>김동현</div>
						<div>정길규</div>
						<div>이지원</div>
						<div>서명진</div>
						<div>백태준</div>
						<div>박경덕</div>
					</FooterGrid>
				</div>
			</FooterWrap>
		</StFooter>
	);
};

export default Footer;

const StFooter = styled.footer`
	margin-top: auto;
	display: block;
	position: relative;
	padding: 40px 0;
	background-color: rgb(247, 249, 250);
`;

const FooterWrap = styled.div`
	display: flex;
	max-width: 1256px;
	margin: 0px auto;
	padding: 0px 60px;
`;

const FooterTitle = styled.h1`
	font-weight: bold;
	font-size: 20px;
`;

const FooterSubTitle = styled.p``;

const FooterTeam = styled.p`
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 16px;
`;

const FooterGrid = styled.p`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(6, min-content);
	gap: 20px 10px;
`;

const FooterSectionLine = styled.div`
	width: 1px;
	background-color: rgb(234, 237, 239);
	margin: 0 30px;
`;

const FooterSection1 = styled.div`
	width: 300px;
`;
