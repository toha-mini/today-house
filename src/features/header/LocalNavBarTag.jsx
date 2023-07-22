import React, { useState } from "react";
import styled from "styled-components";

const LocalNavBarTag = ({ children, localSelected, setLocalSelected }) => {
	// const [localSelected, setLocalSelected] = useState(null);
	return (
		<NavBarItemWrapper>
			<NavBarItem>
				<ItemContainer>
					<ItemContent $selected={localSelected === children} onClick={() => setLocalSelected(children)}>
						{children}
					</ItemContent>
				</ItemContainer>
			</NavBarItem>
		</NavBarItemWrapper>
	);
};

export default LocalNavBarTag;
const NavBarItemWrapper = styled.div``;

const NavBarItem = styled.div`
	justify-content: center;
	vertical-align: top;
	text-align: center;
	padding: 12px 6px;
	margin: 0 5px;
	cursor: pointer;
`;

const ItemContainer = styled.div`
	padding: 4px;
	margin: -4px;
`;

const ItemContent = styled.span`
	font-size: 16px;
	line-height: 20px;
	position: relative;
	font-weight: 700;
	color: ${(props) => (props.$selected ? "#35c5f0" : "#2f3438")};

	&:hover {
		color: #35c5f0;
	}
`;
