import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import modal1 from "../../imgs/modal1.png";
import modal2 from "../../imgs/modal2.png";
import modal3 from "../../imgs/modal3.png";
import modal4 from "../../imgs/modal4.png";
import modal5 from "../../imgs/modal5.png";
import { useNavigate } from "react-router-dom";
import PostModalItem from "./PostModalItem";

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
					<PostModalItem
						onClickHandler={onPostPictureHandler}
						imgSrc={modal1}
						title={"사진동영상 올리기"}
						text={"우리 집의 공간과 나의 일상을 기록해 보세요."}
					/>
					<PostModalItem
						imgSrc={modal2}
						title={"집들이 글쓰기"}
						text={"집에 관한 이야기를 글로 작성해 보세요."}
					/>
					<PostModalItem
						imgSrc={modal3}
						title={"노하우 글쓰기"}
						text={"다양한 인테리어 노하우를 공유해 주세요."}
					/>
					<PostModalItem
						imgSrc={modal4}
						title={"상품 리뷰 쓰기"}
						text={"상품 리뷰를 작성하고 포인트도 받아 보세요."}
					/>
					<PostModalItem
						imgSrc={modal5}
						title={"시공 전문가 리뷰쓰기"}
						text={"시공 전문가 리뷰를 작성하고 포인트도 받아 보세요."}
					/>
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
	z-index: 1100;
	position: absolute;
	top: 70px;
	right: 190px;
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
