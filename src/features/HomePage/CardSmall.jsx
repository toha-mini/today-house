import React from "react";
import { styled } from "styled-components";
import CardTitle from "./CardTitle";

const CardSmall = ({ card, title, subtitle, more, src }) => {
	console.log(card);

	return (
		<StCard>
			<CardTitle title={title} subtitle={subtitle} more={more} />
			<CardWrap>
				<CardContainer>
					<CardInner>
						<CardSmallWrap>
							{card &&
								card.map((item, index) => (
									<CardSmallItem key={index}>
										<CardInnerWrap>
											<CardInnerImageWrap>
												<CardInnerImageItem src={item.src} />
												<CardProfileWrap>
													<CardProfileContainer>
														<CardProfileInner>
															<CardProfileItem />
														</CardProfileInner>
														<CardProfileUserName>{item.username}</CardProfileUserName>
													</CardProfileContainer>
												</CardProfileWrap>
												<div>
													<button>
														<span></span>
													</button>
												</div>
											</CardInnerImageWrap>
											<CardInnerLink></CardInnerLink>
										</CardInnerWrap>
									</CardSmallItem>
								))}
						</CardSmallWrap>
					</CardInner>
				</CardContainer>
			</CardWrap>
		</StCard>
	);
};

export default CardSmall;

const StCard = styled.div`
	margin: 40px auto;
	max-width: 1256px;
	padding: 0px 60px;
`;

const CardWrap = styled.div``;

const CardContainer = styled.div`
	position: relative;
`;

const CardInner = styled.div`
	position: relative;
	z-index: 0;
`;

const CardSmallWrap = styled.ul`
	display: flex;
	overflow: hidden;
`;

const CardSmallItem = styled.li`
	margin: 0 20px 0 0;
	flex-shrink: 0;
	scroll-snap-align: start;
	width: calc((100% - 100px) / 6);
`;

const CardInnerWrap = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	min-width: 0;
	flex-flow: column;
`;

const CardInnerImageWrap = styled.div`
	overflow: hidden;
	position: relative;
	border-radius: 4px;
	height: 230px;
`;

const CardInnerLink = styled.a`
	position: absolute;
	inset: 0;
	cursor: pointer;
`;

const CardInnerImageItem = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.2s ease 0s;
	overflow-clip-margin: content-box;
	overflow: clip;
`;

const CardProfileWrap = styled.div`
	position: absolute;
	padding: 8px;
	font-size: 0px;
	z-index: 1;
	left: 0px;
	bottom: 0px;
`;

const CardProfileContainer = styled.div`
	display: flex;
	align-content: center;
	margin: 0;
	padding: 0;
`;

const CardProfileInner = styled.div`
	position: relative;
	width: 24px;
	height: 24px;
	border-radius: 100%;
	overflow: hidden;
	display: inline-block;
	margin-right: 4px;
`;

const CardProfileItem = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow-clip-margin: content-box;
	overflow: clip;
`;

const CardProfileUserName = styled.span`
	overflow: hidden;
	display: inline-block;
	max-width: 100px;
	font-size: 12px;
	line-height: 20px;
	font-weight: 700;
	color: rgb(255, 255, 255);
	white-space: nowrap;
	text-overflow: ellipsis;
`;
