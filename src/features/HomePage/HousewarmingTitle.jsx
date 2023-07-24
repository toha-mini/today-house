import React from "react";
import { styled } from "styled-components";

const HousewarmingTitle = ({ title, subtitle, more }) => {
	return (
		<CardTitleWrap>
			<CardTitleContainer>
				<CardTitleInner>
					<CardTitleItem>{title}</CardTitleItem>
				</CardTitleInner>
				{subtitle && (
					<CardSubTitleInner>
						<CardSubTitleItem>{subtitle}</CardSubTitleItem>
					</CardSubTitleInner>
				)}
			</CardTitleContainer>
			<CardMoreButtonContainer>
				{more && <CardMoreButtonItem>{"더보기"}</CardMoreButtonItem>}
			</CardMoreButtonContainer>
		</CardTitleWrap>
	);
};

export default HousewarmingTitle;

const CardTitleWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 20px 0;
`;

const CardTitleContainer = styled.div`
	flex: 1 1 0%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	min-width: 0;
	margin: 0;
	padding: 0;
`;

const CardTitleInner = styled.div`
	display: inline-flex;
	align-items: center;
	max-width: 100%;
	cursor: pointer;
`;

const CardTitleItem = styled.strong`
	overflow: hidden;
	display: inline-flex;
	font-weight: 700;
	color: rgb(47, 52, 56);
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 20px;
	line-height: 28px;
`;

const CardSubTitleInner = styled.div`
	display: inline-flex;
	align-items: center;
	max-width: 100%;
	margin-top: 4px;
`;

const CardSubTitleItem = styled.span`
	overflow: hidden;
	display: inline-block;
	line-height: 18px;
	font-weight: 400;
	color: rgb(47, 52, 56);
	white-space: nowrap;
	text-overflow: ellipsis;
`;

const CardMoreButtonContainer = styled.div`
	display: flex;
	align-items: center;
	height: 0px;
	margin-left: 10px;
`;

const CardMoreButtonItem = styled.button`
	display: inline-block;
	margin: 0;
	padding: 0;
	background: none;
	border: none;
	font-size: 16px;
	line-height: 20px;
	font-weight: 700;
	color: rgb(53, 197, 240);
	cursor: pointer;
`;
