import React, { useState } from "react";
import { styled } from "styled-components";
import todaylogo from "../imgs/todaylogo.png";
import facebook from "../imgs/facebook.png";
import kakaotalk from "../imgs/kakaotalk.png";
import naver from "../imgs/naver.png";
import AgreementCheckBox from "../features/account/AgreementCheckBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const Account = () => {
  const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    // baseURL : "http://13.209.96.200:8080"
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const [checkAge, setCheckAge] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);
  const [checkPersonalInfo, setCheckPersonalInfo] = useState(false);
  const [checkMarketing, setCheckMarketing] = useState(false);
  const [checkNotification, setCheckNotification] = useState(false);

  const initTextFiled = () => {
    setEmail("");
    setPassword("");
  };

  //   const SignupState = async (event) => {
  // 	event.preventDefault();
  // 	try {
  // 	  const payload = {
  // 		email:email,
  // 		password:password,
  // 		nickname:nickname
  // 	  }
  // 	  let res = await instanceAxios.post(`/api/auth/sign-up`, payload)
  // 	  if(res.data.status >= 300){
  // 		alert(res.data.message)
  // 		return;
  // 	  }
  // 	  console.log(res)
  // 	  initTextFiled();

  // 	  } catch (error) {
  // 		console.log(error)
  // 	  }
  //   }

  // ------------------------- 리액트 쿼리로 리팩토링-------------------------------

  const mutation = useMutation(async (payload) => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/sign-up`,
      payload
    );
    return response.data;
  });

  const emailCheckMutation = useMutation(async (payload) => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/email`,
      payload
    );
    return response.data;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        email: email,
        password: password,
        nickname: nickname,
        checkAge: true,
        checkTerms: true,
        checkPersonalInfo: true,
        checkPersonalMarketing: true,
        checkPushNotification: true,
      };

      const res = await mutation.mutateAsync(payload);
      console.log(res);
      if (res.data.status >= 300) {
        alert(res.data.message);
        return;
      }
      console.log(res);
      initTextFiled();
    } catch (error) {
      console.log(error);
    }
  };
  const onClickCheckEmail = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        email: email,
      };

      const res = await emailCheckMutation.mutateAsync(payload);
      console.log(res);
      if (res.checkValidate !== false) {
        alert("사용가능한 이메일입니다.");
        return;
      } else {
        alert("중복된 이메일입니다.");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ------------------------- 리액트 쿼리로 리팩토링-------------------------------

  const inputEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const inputPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const inputNicknameHandler = (event) => {
    setNickname(event.target.value);
  };

  const navigate = useNavigate();
  const onClickSocial = () => {
    alert("현재 준비중입니다!");
  };

  return (
    <AccountPageContainer>
      <LogoContainerTitle>
        <LogoImage
          src={todaylogo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </LogoContainerTitle>

      <AccountElementsContainer>
        <AccountTitle>회원가입</AccountTitle>
        <SnsAccountButtonContainer>
          <SnsAccountContent>SNS계정으로 간편하게 회원가입</SnsAccountContent>
          <SnsButtons>
            <SnsButton onClick={onClickSocial}>
              <ButtonImg src={facebook} alt="facebook" />
            </SnsButton>
            <SnsButton onClick={onClickSocial}>
              <ButtonImg src={kakaotalk} alt="kakaotalk" />
            </SnsButton>
            <SnsButton onClick={onClickSocial}>
              <ButtonImg src={naver} alt="naver" />
            </SnsButton>
          </SnsButtons>
        </SnsAccountButtonContainer>
        <form>
          <LabelName>이메일</LabelName>

          {/* 회원가입 인박스 */}

          <EmailInput
            text="text"
            placeholder="이메일"
            name="id"
            autoFocus
            autoComplete="current-id"
            label="아이디"
            required
            value={email}
            onChange={inputEmailHandler}
            fullWidth
          />
          {/* <AtSign>@</AtSign>
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
          </EmailSelect> */}
          <EmailCheckContents>필수입력항목입니다.</EmailCheckContents>
          <div>
            <EmailCheckButton
              onClick={onClickCheckEmail}
              isEmailAvailable={isEmailAvailable}
              setIsEmailAvailable={setIsEmailAvailable}
            >
              이메일 인증하기
            </EmailCheckButton>
            {/* <EmailCheckContents>중복된 이메일입니다.</EmailCheckContents> */}
          </div>
          <LabelName>비밀번호</LabelName>

          <CheckContents>
            영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </CheckContents>
          {/* 회원가입 인박스 */}
          <InputBox
            type="password"
            placeholder="비밀번호"
            margin="normal"
            fullWidth
            name="password"
            autoComplete="current-password"
            label="패스워드"
            value={password}
            onChange={inputPasswordHandler}
          />

          <EmailCheckContents>필수입력항목입니다.</EmailCheckContents>
          <LabelName>비밀번호 확인</LabelName>
          <InputBox
            type="password"
            placeholder="비밀번호"
            margin="normal"
            fullWidth
            name="password"
            autoComplete="current-password"
            label="패스워드"
            value={password}
            onChange={inputPasswordHandler}
          />
          <EmailCheckContents>
            확인을 위해 비밀번호를 한 번 더 입력해주세요.
          </EmailCheckContents>
          <LabelName>닉네임</LabelName>

          {/* 닉네인 인박스 */}

          <CheckContents>
            다른 유저와 겹치지 않도록 입력해주세요.(2~15자)
          </CheckContents>
          <InputBox
            type="text"
            placeholder="별명(2~15자)"
            name="id"
            autoFocus
            autoComplete="current-id"
            label="아이디"
            required
            value={nickname}
            onChange={inputNicknameHandler}
            fullWidth
          />

          <AgreementCheckBox
            checkAge={checkAge}
            setCheckAge={setCheckAge}
            checkTerms={checkTerms}
            setCheckTerms={setCheckTerms}
            checkPersonalInfo={checkPersonalInfo}
            setCheckPersonalInfo={setCheckPersonalInfo}
            checkMarketing={checkMarketing}
            setCheckMarketing={setCheckMarketing}
            checkNotification={checkNotification}
            setCheckNotification={setCheckNotification}
          />
          <div>
            <AccountButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 3 }}
              onClick={handleSubmit}
            >
              회원가입하기
            </AccountButton>
          </div>
          <FooterContainer>
            <span>이미 아이디가 있으신가요?</span>
            <LogInLink
              onClick={() => {
                navigate("/LogIn");
              }}
            >
              로그인
            </LogInLink>
          </FooterContainer>
        </form>
      </AccountElementsContainer>
    </AccountPageContainer>
  );
};
const LogoImage = styled.div``;
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

const AccountTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
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
  cursor: pointer;
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
  width: 360px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
  &:focus {
    outline: none !important;
    border-color: #c8ffff;
    /* box-shadow: 0 0 10px #c8ffff; */
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
  cursor: pointer;
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
  margin-top: 10px;
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
  display: flex;
  margin-top: 30px;
  justify-content: center;
`;

const LogInLink = styled.div`
  cursor: pointer;

  font-weight: 700;
`;

export default Account;
