import React from "react";
import { styled } from "styled-components";

const SpaceInofoModal = ({ setIsOpen, isOpen }) => {
	return (
		<ModalContainer>
			<ModalItem>원룸</ModalItem>
			<ModalItem>거실</ModalItem>
			<ModalItem>침실</ModalItem>
			<ModalItem>주방</ModalItem>
			<ModalItem>욕실</ModalItem>
			<ModalItem>아이방</ModalItem>
			<ModalItem>드레스룸</ModalItem>
			<ModalItem>서재&작업실</ModalItem>
			<ModalItem>베란다</ModalItem>
			<ModalItem>사무공간</ModalItem>
			<ModalItem>상업공간</ModalItem>
			<ModalItem>가구&소품</ModalItem>
			<ModalItem>현관</ModalItem>
			<ModalItem>외관&기타</ModalItem>
		</ModalContainer>
	);
};

export default SpaceInofoModal;

const ModalContainer = styled.div`
	border: 1px solid #dbdbdb;
	width: 435px;
	border-radius: 4px;
`;
const ModalItem = styled.div`
	cursor: pointer;
	font-size: 16px;
	padding: 16px;
	line-height: 20px;
	overflow: auto;
`;
