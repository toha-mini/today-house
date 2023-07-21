import React from "react";
import { styled } from "styled-components";

const LocalNavBar = () => {
	return (
		<StLocalNavBar>
			<div>
				<div>
					<nav>
						<div>
							<div>
								<span>{"홈"}</span>
							</div>
						</div>
						<div>
							<div>
								<span>{"추천"}</span>
							</div>
						</div>
						<div>
							<div>
								<span>{"집들이"}</span>
							</div>
						</div>
						<div>
							<div>
								<span>{"살림수납"}</span>
							</div>
						</div>
						<div>
							<div>
								<span>{"홈스토랑"}</span>
							</div>
						</div>
						<div>
							<div>
								<span>{"취미일상"}</span>
							</div>
						</div>
						<div>
							<div>
								<span>{"3D인테리어"}</span>
							</div>
						</div>
						<div>
							<div>
								<span>{"이벤트"}</span>
							</div>
						</div>
					</nav>
				</div>
				<div></div>
			</div>
		</StLocalNavBar>
	);
};

export default LocalNavBar;

const StLocalNavBar = styled.div`
	margin-top: 80px;
`;
