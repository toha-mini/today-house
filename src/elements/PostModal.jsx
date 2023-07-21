import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import modal1 from "../imgs/modal1.png";
import modal2 from "../imgs/modal2.png";
import modal3 from "../imgs/modal3.png";
import modal4 from "../imgs/modal4.png";
import modal5 from "../imgs/modal5.png";
import { useNavigate } from "react-router-dom";

const PostModal = () => {
	console.log("Modal is rendering!!!");

	const navigate = useNavigate();
	const [modalOpen, setPostModalOpen] = useState(false);
	const refModal = useRef(null);
	const onModalOpen = (event) => {
		event.stopPropagation();
		setPostModalOpen(!modalOpen);
	};

	const handleClickOutside = (event) => {
		if (refModal.current && !refModal.current.contains(event.target)) {
			setPostModalOpen(false);
		}
	};

	// componentDidMount와 componentDidUpdate에서 이벤트 핸들러를 추가하고, componentWillUnmount에서 이벤트 핸들러를 제거합니다.
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	const onPostPictureHandler = () => {
		navigate("/homepicturepost");
	};

	return (
		<>
			<GlobalNavButton onMouseDown={(event) => onModalOpen(event)}>
				{"글쓰기"}
				<GlobalNavButtonArrow>
					<IoIosArrowDown size='20px' />
				</GlobalNavButtonArrow>
			</GlobalNavButton>
			{modalOpen ? (
				<OpenPostModal ref={refModal}>
					<PostModalContainer onClick={onPostPictureHandler}>
						<PostModalImg src={modal1} />
						<PostModalContents>
							<PostModalTitle>{"사진동영상 올리기"}</PostModalTitle>
							<PostModalText>{"우리 집의 공간과 나의 일상을 기록해 보세요."}</PostModalText>
						</PostModalContents>
					</PostModalContainer>
					<PostModalContainer>
						<PostModalImg src={modal2} />
						<PostModalContents>
							<PostModalTitle>{"집들이 글쓰기"}</PostModalTitle>
							<PostModalText>{"집에 관한 이야기를 글로 작성해 보세요."}</PostModalText>
						</PostModalContents>
					</PostModalContainer>
					<PostModalContainer>
						<PostModalImg src={modal3} />
						<PostModalContents>
							<PostModalTitle>{"노하우 글쓰기"}</PostModalTitle>
							<PostModalText>{"다양한 인테리어 노하우를 공유해 주세요."}</PostModalText>
						</PostModalContents>
					</PostModalContainer>
					<PostModalContainer>
						<PostModalImg src={modal4} />
						<PostModalContents>
							<PostModalTitle>{"상품 리뷰 쓰기"}</PostModalTitle>
							<PostModalText>{"상품 리뷰를 작성하고 포인트도 받아 보세요."}</PostModalText>
						</PostModalContents>
					</PostModalContainer>
					<PostModalContainer>
						<PostModalImg src={modal5} />
						<PostModalContents>
							<PostModalTitle>{"시공 전문가 리뷰쓰기"}</PostModalTitle>
							<PostModalText>{"시공 전문가 리뷰를 작성하고 포인트도 받아 보세요."}</PostModalText>
						</PostModalContents>
					</PostModalContainer>
				</OpenPostModal>
			) : null}
		</>
	);
};

export default PostModal;

const GlobalNavButton = styled.button`
	margin: 0;
	padding: 0;
	border: none;
	font-size: 14px;
	line-height: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: 40px;
	border-radius: 4px;
	padding: 0 16px;
	font-weight: 400;
	box-sizing: border-box;
	text-align: center;
	color: #ffffff;
	background-color: #35c5f0;
	outline: none;
	position: relative;
`;

const GlobalNavButtonArrow = styled.div`
	margin: 0 0 0 8px;
`;

const OpenPostModal = styled.div`
	position: absolute;
	top: 50px;
	left: 65px;
	padding: 8px;
	background-color: rgb(255, 255, 255);
	border: 1px solid rgb(218, 221, 224);
	border-radius: 6px;
	box-shadow: rgba(63, 71, 77, 0.2) 0px 4px 10px 0px;
	pointer-events: auto;
	width: 340px;
	height: 373px;
	transition: opacity 1s ease;
`;

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
