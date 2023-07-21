import React from "react";
import { styled } from "styled-components";

const LocalNavBar = () => {
	return (
		<StLocalNavBar>
			<div>
				<div>
					<nav>
						<span>{"홈"}</span>
						<span>{"추천"}</span>
						<span>{"집들이"}</span>
						<span>{"살림수납"}</span>
						<span>{"홈스토랑"}</span>
						<span>{"취미일상"}</span>
						<span>{"3D인테리어"}</span>
						<span>{"이벤트"}</span>
					</nav>
				</div>
				<div></div>
			</div>
		</StLocalNavBar>
	);
};

export default LocalNavBar;

const StLocalNavBar = styled.div``;
