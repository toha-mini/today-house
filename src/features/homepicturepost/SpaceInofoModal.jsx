import React, { useState } from "react";
import { styled } from "styled-components";

const SpaceInofoModal = ({ isOpen, setIsOpen ,setMenu}) => {
  const ItemOnClick = (event) => {
    setMenu(event.target.innerHTML);
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      <ModalItem onClick={ItemOnClick}>원룸</ModalItem>
      <ModalItem onClick={ItemOnClick}>거실</ModalItem>
      <ModalItem onClick={ItemOnClick}>침실</ModalItem>
      <ModalItem onClick={ItemOnClick}>주방</ModalItem>
      <ModalItem onClick={ItemOnClick}>욕실</ModalItem>
      <ModalItem onClick={ItemOnClick}>아이방</ModalItem>
      <ModalItem onClick={ItemOnClick}>드레스룸</ModalItem>
      <ModalItem onClick={ItemOnClick}>서재&작업실</ModalItem>
      <ModalItem onClick={ItemOnClick}>베란다</ModalItem>
      <ModalItem onClick={ItemOnClick}>사무공간</ModalItem>
      <ModalItem onClick={ItemOnClick}>상업공간</ModalItem>
      <ModalItem onClick={ItemOnClick}>가구&소품</ModalItem>
      <ModalItem onClick={ItemOnClick}>현관</ModalItem>
      <ModalItem onClick={ItemOnClick}>외관&기타</ModalItem>
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
