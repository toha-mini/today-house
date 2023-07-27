import profile from "../../imgs/default_profile.png";
import BookMark from "./BookMark";
import BookMarkOn from "./BookMarkOn";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postBookMarkLists } from "../../api/oha";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const CardSmall = ({ card = [], title, subtitle, more, src }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const mutation = useMutation(postBookMarkLists, {
		onSuccess: (bookmarkdata) => {
			queryClient.invalidateQueries(["bookmark"]);
		},
	});

	// 로컬 스토리지에서 이전 상태를 불러옵니다.
	const [onScrap, setOnScrap] = useState(() => {
		const savedState = localStorage.getItem("onScrap");
		return savedState ? JSON.parse(savedState) : Array(card.length).fill(false);
	});

	const bookMarkControlHandler = (event, index) => {
		event.stopPropagation();
		const newOnScrap = [...onScrap];
		newOnScrap[index] = !newOnScrap[index];
		setOnScrap(newOnScrap);

		mutation.mutate({ id: card[index].postId });
		console.log({ id: card[index].postId });
	};

	const moveDetailButtonHandler = (id) => {
		console.log(id);
		navigate(`/detail/${id}`);
	};

	// 상태가 변경될 때마다 로컬 스토리지에 저장합니다.
	useEffect(() => {
		localStorage.setItem("onScrap", JSON.stringify(onScrap));
	}, [onScrap]);

	return (
		<>
			{card &&
				card.map((item, index) => (
					<CardSmallItem key={index} onClick={() => moveDetailButtonHandler(item.postId)}>
						<CardInnerWrap>
							<CardInnerImageWrap>
								<CardInnerImageItem src={item.titleImage} />
								<CardProfileWrap>
									<CardProfileContainer>
										<CardProfileInner>
											<CardProfileItem src={profile} />
										</CardProfileInner>
										<CardProfileUserName>{item.nickname}</CardProfileUserName>
									</CardProfileContainer>
								</CardProfileWrap>
								<ScrapButtonWrap>
									<ScrapButtonContainer>
										<span
											className='css-5dnyrm'
											onClick={(event) => bookMarkControlHandler(event, index)}>
											{onScrap[index] ? <BookMark /> : <BookMarkOn />}
										</span>
									</ScrapButtonContainer>
								</ScrapButtonWrap>
							</CardInnerImageWrap>
							<CardInnerLink></CardInnerLink>
						</CardInnerWrap>
					</CardSmallItem>
				))}
		</>
	);
};

export default CardSmall;

const CardSmallItem = styled.li`
	list-style: none;
	margin: 0 20px 0 0;
	flex-shrink: 0;
	scroll-snap-align: start;
	width: calc((100% - 100px) / 6);
	/* transform: translateX(${(props) => props.$slidePx}px);
	transition: 0.5s ease; */
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
	justify-content: space-between;
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

const ScrapButtonWrap = styled.div`
	position: absolute;
	padding: 8px;
	font-size: 0px;
	z-index: 1;
	right: 0px;
	bottom: 0px;
`;

const ScrapButtonContainer = styled.div``;
