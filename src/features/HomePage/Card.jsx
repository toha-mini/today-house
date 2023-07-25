import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardTitle from "./CardTitle";
import CardSmall from "./CardSmall";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ size, card, title, subtitle, more, src }) => {
	const slideRef = useRef(null);
	const [currentImgOrder, setCurrentImgOrder] = useState(0);
	const IMG_WIDTH = 1155;
	const slideRange = currentImgOrder * IMG_WIDTH;

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${slideRange}px)`;
	}, [currentImgOrder]);

	const moveToNextSlide = () => {
		if (currentImgOrder === 1) return;
		setCurrentImgOrder(currentImgOrder + 1);
	};

	const moveToPrevSlide = () => {
		if (currentImgOrder === 0) return;
		setCurrentImgOrder(currentImgOrder - 1);
	};

	return (
		<StCard>
			{/* 카드타이틀 */}
			<CardTitle title={title} subtitle={subtitle} more={more} />
			<CardWrap>
				<CardContainer>
					<CardInner>
						<CardSmallWrap ref={slideRef}>
							{size === "small" ? <CardSmall card={card} /> : null}
						</CardSmallWrap>
					</CardInner>
					<LeftButton onClick={moveToNextSlide}>
						<LeftButtonIcon>
							<PrevBtn>
								<IoIosArrowForward size='30px' />
							</PrevBtn>
						</LeftButtonIcon>
					</LeftButton>
					<RightButton onClick={moveToPrevSlide}>
						<RightButtonIcon>
							<NextBtn>
								<IoIosArrowBack size='30px' />
							</NextBtn>
						</RightButtonIcon>
					</RightButton>
				</CardContainer>
			</CardWrap>
		</StCard>
	);
};

export default Card;

const StCard = styled.div`
	margin: 40px auto;
	max-width: 1256px;
	padding: 0px 60px;
	/* overflow: hidden; */
`;

const CardWrap = styled.div``;

const CardContainer = styled.div`
	position: relative;
`;

const CardInner = styled.div`
	position: relative;
	overflow: hidden;
`;

const CardSmallWrap = styled.ul`
	display: flex;
	transition: 0.5s;
`;

const LeftButton = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: 100%;
	transform: translate(-50%, -50%);
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 24px;
	box-shadow: 0 2px 5px rgba(63, 71, 77, 0.15);
`;

const RightButton = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translate(-50%, -50%);
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 24px;
	box-shadow: 0 2px 5px rgba(63, 71, 77, 0.15);
`;

const PrevBtn = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: white;
`;

const NextBtn = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 24px;
	border: none;
	background-color: white;
`;

const LeftButtonIcon = styled.div``;

const RightButtonIcon = styled.div``;
