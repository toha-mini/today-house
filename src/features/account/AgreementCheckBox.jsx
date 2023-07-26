import React, { useState } from "react";
import { styled } from "styled-components";

const AgreementCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const OnclickCheckInput = () => {
    // 리렌더가 일어나면 지금 값이 가리키는 참조값이랑 렌더링 후 참조값이 다르기때문에 이전꺼에서 반대로해줘가 안전.
    setIsChecked((prev) => !prev);
  };
  return (
    <div>
      <LabelName>약관동의</LabelName>
      <AgreeContainer>
        <AreeTitleContainer>
          <CheckInput type="checkbox" />
          <AgreeContents>
            전체동의
            <SubContents>선택항목에 대한 동의 포함</SubContents>
          </AgreeContents>
        </AreeTitleContainer>

        <div>
          <AgreeItemsContainer>
            <CheckInput
              type="checkbox"
              checked={isChecked}
              onChange={OnclickCheckInput}
            />
            <PlusContents>
              만 14세 이상입니다
              <Essential>(필수)</Essential>
            </PlusContents>
          </AgreeItemsContainer>
          <AgreeItemsContainer>
            <CheckInput type="checkbox" />
            <PlusContents>
              이용약관
              <Essential>(필수)</Essential>
            </PlusContents>
          </AgreeItemsContainer>
          <AgreeItemsContainer>
            <CheckInput type="checkbox" />
            <PlusContents>
              개인정보수집 및 이용동의
              <Essential>(필수)</Essential>
            </PlusContents>
          </AgreeItemsContainer>
          <AgreeItemsContainer>
            <CheckInput type="checkbox" />
            <PlusContents>
              개인정보 마케팅 활용 동의
              <Select>(선택)</Select>
            </PlusContents>
          </AgreeItemsContainer>
          <AgreeItemsContainer>
            <CheckInput type="checkbox" />
            <PlusContents>
              이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신
              <Select>(선택)</Select>
            </PlusContents>
          </AgreeItemsContainer>
        </div>
      </AgreeContainer>
    </div>
  );
};

const LabelName = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #2f3438;
  letter-spacing: -0.3px;
`;

const AgreeContainer = styled.div`
  border: 1px solid #eaedef;
  padding: 18px;
  margin-bottom: 30px;
  width: 360px;
`;

const AreeTitleContainer = styled.div`
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const CheckInput = styled.input`
  appearance: none;
  border: 1px solid #2f3438;
  border-radius: 4px;
  width: 18px;
  height: 18px;
  margin-right: 5px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #35c5f0;
  }
`;

const AgreeContents = styled.span`
  color: #2f3438;
  line-height: 20px;
  font-size: 14px;
  font-weight: 700;
`;
const SubContents = styled.span`
  color: rgb(194, 200, 204);
  font-size: 11px;
  font-weight: 400;
`;

const PlusContents = styled.span`
  color: #424242;
  line-height: 20px;
  font-size: 13px;
  line-height: 35px;
`;

const AgreeItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Essential = styled.span`
  color: #009fce;
  line-height: 20px;
  font-size: 11px;
`;

const Select = styled.span`
  color: #828c94;
  line-height: 20px;
  font-size: 11px;
`;

export default AgreementCheckBox;
