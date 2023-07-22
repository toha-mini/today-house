import React from "react";
import { styled } from "styled-components";

const PostModalItem = ({ onClickHandler, imgSrc, title, text }) => {
	return (
		<PostModalContainer onClick={onClickHandler}>
			<PostModalImg src={imgSrc} />
			<PostModalContents>
				<PostModalTitle>{title}</PostModalTitle>
				<PostModalText>{text}</PostModalText>
			</PostModalContents>
		</PostModalContainer>
	);
};

export default PostModalItem;

const PostModalContainer = styled.div`
	display: flex;
	padding: 15px;
	width: 100%;
	height: 71px;
	background-color: rgb(255, 255, 255);
	transition: background-color 0.1s ease 0s;
	cursor: pointer;

	&:hover {
		background-color: #fbf5f5;
	}
`;

const PostModalContents = styled.div``;

const PostModalImg = styled.img`
	width: 50px;
	height: 50px;
	margin-right: 10px;
`;

const PostModalTitle = styled.div`
	font-size: 15px;
	font-weight: bold;
	line-height: 21px;
	color: rgb(47, 52, 56);
`;

const PostModalText = styled.div`
	margin: 4px 0px 0px;
	font-size: 12px;
	line-height: 16px;
	color: rgb(130, 140, 148);
`;
