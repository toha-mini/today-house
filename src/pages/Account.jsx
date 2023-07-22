import React from "react";
import { styled } from "styled-components";
import todaylogo from "../images/todaylogo.png";
import facebook from "../images/facebook.png";
import kakaotalk from "../images/kakaotalk.png";
import naver from "../images/naver.png";
import recaptcha from "../images/recaptcha.png";

const Account = () => {
  return (
    <AccountPageContainer>
      {/* 로고 */}
      <LogoContainerTitle>
        <img src={todaylogo} alt="logo" />
      </LogoContainerTitle>
      {/* 회원가입 전체 요소들 묶어주기 */}
      <AccountElementsContainer>
        {/* 회원가입 */}
        <AccountTitle>회원가입</AccountTitle>
        <SnsAccountButtonContainer>
          <SnsAccountContent>SNS계정으로 간편하게 회원가입</SnsAccountContent>
          <SnsButtons>
            <SnsButton>
              <ButtonImg src={facebook} alt="facebook" />
            </SnsButton>
            <SnsButton>
              <ButtonImg src={kakaotalk} alt="kakaotalk" />
            </SnsButton>
            <SnsButton>
              <ButtonImg src={naver} alt="naver" />
            </SnsButton>
          </SnsButtons>
        </SnsAccountButtonContainer>
        {/* 이메일  */}
        <form>
          <LabelName>이메일</LabelName>
          <EmailInput text="text" placeholder="이메일" />
          <AtSign>@</AtSign>
          <EmailSelect>
            <EmailOption>선택해주세요</EmailOption>
            <EmailOption>naver.com</EmailOption>
            <EmailOption>hanmail.com</EmailOption>
            <EmailOption>daum.net</EmailOption>
            <EmailOption>gmail.com</EmailOption>
            <EmailOption>nate.com</EmailOption>
            <EmailOption>hotmail.com</EmailOption>
            <EmailOption>outlook.com</EmailOption>
            <EmailOption>icloud.com</EmailOption>
            <EmailOption>직접입력</EmailOption>
          </EmailSelect>
          {/* 이메일 안쓰면 들어가게하기 */}
          <EmailCheckContents>필수입력항목입니다.</EmailCheckContents>
          <div>
            <EmailCheckButton>이메일 인증하기</EmailCheckButton>
            <EmailCheckContents>중복된 이메일입니다.</EmailCheckContents>
          </div>
          {/* 비밀번호 */}
          <LabelName>비밀번호</LabelName>
          <CheckContents>
            영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </CheckContents>
          <InputBox type="password" placeholder="비밀번호" />
          <EmailCheckContents>필수입력항목입니다.</EmailCheckContents>
          <LabelName>비밀번호 확인</LabelName>
          <InputBox type="password" placeholder="비밀번호 확인" />
          <EmailCheckContents>
            확인을 위해 비밀번호를 한 번 더 입력해주세요.
          </EmailCheckContents>
          {/* 닉네임 */}
          <LabelName>닉네임</LabelName>
          <CheckContents>
            다른 유저와 겹치지 않도록 입력해주세요.(2~15자)
          </CheckContents>

          <InputBox type="text" placeholder="별명(2~15자)" />
          <EmailCheckContents>사용 중인 별명입니다.</EmailCheckContents>
          {/* 약관동의 */}
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
                <CheckInput type="checkbox" />
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
                  <span>버튼</span>
                </PlusContents>
              </AgreeItemsContainer>
              <AgreeItemsContainer>
                <CheckInput type="checkbox" />
                <PlusContents>
                  개인정보수집 및 이용동의
                  <Essential>(필수)</Essential>
                  <span>버튼</span>
                </PlusContents>
              </AgreeItemsContainer>
              <AgreeItemsContainer>
                <CheckInput type="checkbox" />
                <PlusContents>
                  개인정보 마케팅 활용 동의
                  <Select>(선택)</Select>
                  <span>버튼</span>
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
          {/* 로봇이 아닙니다 */}
          <RobotCheckContainer>
            <RobotLabel>
              <input type="checkbox" />
              <span>로봇이 아닙니다.</span>
              <div>
                <ReImage src={recaptcha} alt="recaptcha" />
              </div>
              <a>개인정보 보호 약관</a>
            </RobotLabel>
          </RobotCheckContainer>
          {/* 회원가입하기버튼 */}
          <div>
            <AccountButton>회원가입하기</AccountButton>
          </div>
          {/* 로그인으로 */}
          <FooterContainer>
            <span>이미 아이디가 있으신가요?</span>
            <LogInLink>로그인</LogInLink>
          </FooterContainer>
        </form>
      </AccountElementsContainer>
    </AccountPageContainer>
  );
};

const AccountPageContainer = styled.div`
  margin-top: 40px;

  padding: 0px 0px 0px 15px;
`;
const LogoContainerTitle = styled.div`
  width: 88px;
  height: 31px;
  display: flex;
`;

const LogoTitle = styled.div``;

const AccountElementsContainer = styled.div`
  width: 360px;
  height: 1400px;
  padding: 60px 0px;
  margin: auto;
`;
const SnsAccountButtonContainer = styled.div`
  margin: 30px 0px;
  padding-bottom: 30px;
  border: none;
`;

const SnsButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const SnsButton = styled.div`
  margin-left: 10px;
`;

const AccountTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const SnsAccountContent = styled.div`
  font-size: 12px;
  text-align: center;
  margin: 15px 0px;
  color: #757575;
`;

const ButtonImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

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

const EmailInput = styled.input`
  width: 170px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
  &:hover {
    border: 2px solid #c3e7fa;
  }
`;

const AtSign = styled.span`
  color: #dbdbdb;
  line-height: 40px;
  font-size: 15px;
`;

const EmailSelect = styled.select`
  width: 170px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  padding: 0 15px;
  line-height: 40px;
  color: #424242;
`;
const EmailOption = styled.option`
  border: 1px solid #dbdbdb;
  color: #424242;
  padding: 5px;
`;

const EmailCheckContents = styled.div`
  color: rgb(255, 119, 119);
  padding-top: 10px;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
`;
const EmailCheckButton = styled.div`
  width: 360px;
  height: 50px;
  margin-top: 10px;

  width: 100%;
  background: rgb(247, 248, 250);
  border: 1px solid rgb(194, 200, 204);
  border-radius: 4px;
  color: rgb(194, 200, 204);
  font-size: 17px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  border: 1px solid #dbdbdb;
  background-color: #fff;
  line-height: 18px;
  width: 100%;
  width: 360px;
  height: 40px;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  padding-left: 10px;
  &:hover {
    border: 2px solid #c3e7fa;
  }
`;

const CheckContents = styled.div`
  color: #828c94;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
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
const AgreeItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CheckInput = styled.input`
  width: 18px;
  height: 18px;
  &:checked {
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
const Select = styled.span`
  color: #828c94;
  line-height: 20px;
  font-size: 11px;
`;
const Essential = styled.span`
  color: #009fce;
  line-height: 20px;
  font-size: 11px;
`;
const RobotCheckContainer = styled.div`
  border: 1px solid #d3d3d3;
  width: 360px;
  display: flex;
`;
const RobotLabel = styled.label`
  display: flex;
`;
const ReImage = styled.img`
  width: 50px;
  height: 50px;
`;
const AccountButton = styled.button`
  margin-top: 30px;
  background-color: #35c5f0;
  border: 1px solid transparent;
  border-color: #35c5f0;
  width: 360px;
  height: 50px;
  color: #fff;
  border-radius: 4px;
  font-size: 17px;
  line-height: 26px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    filter: brightness(70%);
  }
`;

const FooterContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  margin-top: 30px;
  justify-content: center;
`;

const LogInLink = styled.div`
  cursor: pointer;

  font-weight: 700;
`;
export default Account;
