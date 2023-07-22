import React from "react";
import { styled } from "styled-components";
import banner from "../../imgs/banner.jpeg";
import bannerevent from "../../imgs/bannerevent.avif";

const MainBanner = () => {
	return (
		<MainBannerWrapper>
			<MainBannerContainer>
				<MainBannerContentsWrapper>
					<BannerImg src={banner} alt='' />
					<MainCommentContainer>
						<MainComment>{"이제는 벽지 대신 인테리어 보드"}</MainComment>
						<MainCommentUser>
							<CommentUser>{"김덕수"}</CommentUser>
						</MainCommentUser>
					</MainCommentContainer>
				</MainBannerContentsWrapper>
			</MainBannerContainer>
			<MainEventBannerWrapper>
				<MainEventBanner src={bannerevent} />
			</MainEventBannerWrapper>
		</MainBannerWrapper>
	);
};

export default MainBanner;

const MainBannerWrapper = styled.div`
	max-width: 1256px;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1256px;
	padding: 0px 60px;
	margin: 0px auto;
`;

const MainBannerContainer = styled.div`
	margin: 0;
	padding: 0;
	flex: 1 1 847px;
`;

const MainBannerContentsWrapper = styled.div`
	overflow: hidden;
	position: relative;
	font-size: 0px;
	border-radius: 4px;
	position: relative;
`;

const BannerImg = styled.img`
	width: 847px;
	height: 500px;
	object-fit: cover;
	transition: transform 0.2s ease 0s;
`;

const MainCommentContainer = styled.div`
	position: absolute;
	left: 0px;
	right: 0px;
	bottom: 0px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 160px;
	padding: 0px 30px 30px;
	box-sizing: border-box;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
	pointer-events: none;
`;

const MainComment = styled.p`
	font-size: 32px;
	line-height: 42px;
	overflow: hidden;
	font-size: 24px;
	line-height: 32px;
	color: rgb(255, 255, 255);
	font-weight: 700;
	text-shadow: rgba(63, 71, 77, 0.25) 0px 2px 10px;
`;

const MainCommentUser = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	margin-top: 8px;
`;

const CommentUser = styled.p`
	font-size: 16px;
	line-height: 20px;
	color: rgb(255, 255, 255);
`;

const MainEventBannerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin-left: 20px;
`;

const MainEventBanner = styled.img`
	width: 269px;
	height: 500px;
	border-radius: 4px;
	object-fit: cover;
`;
