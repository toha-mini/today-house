import React, { useState } from "react";
import { styled } from "styled-components";
import Card from "react-bootstrap/Card";
import { useMutation } from "@tanstack/react-query";
import { instance, logIn } from "../api/oha";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(logIn);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const logInfo = {
      email: email,
      password: password,
    };
    mutation.mutate(logInfo);
  };

  // const mutation = useMutation(async (payload) => {
  // 	const response = await instance.post(`/api/auth/login`, payload);
  // 	document.cookie = `accessToken=${response.headers.auth}; path=/;`;
  // 	return response.data;
  // });

  // const handleSubmit = async (event) => {
  // 	event.preventDefault();
  // 	try {
  // 		const payload = {
  // 			email: email,
  // 			password: password,
  // 		};

  // 		const res = await mutation.mutateAsync(payload);
  // 		console.log(res);
  // 		if (res.state >= 300) {
  // 			alert(res.message);
  // 			return;
  // 		}
  // 		moveHome();
  // 		initTextFiled();
  // 		console.log(res);
  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // };

  const inputEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const inputPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const moveHome = () => {
    navigate("/");
  };

  return (
    <LoginMain>
      <LoginLayout>
        <Layout>
          <h2>
            <img
              src="/img/todaylogo.png"
              alt="로고 이미지"
              onClick={moveHome}
              style={{
                marginBottom: "30px",
                cursor: "pointer",
                marginTop: "40px",
                width: "150px",
                height: "50px",
              }}
            />
          </h2>

          <form style={{ width: "300px" }} onSubmit={handleSubmit}>
            {/* 로그인 인풋 */}
            <LoginInput
              name="id"
              autoFocus
              autoComplete="current-id"
              label="아이디"
              required
              value={email}
              onChange={inputEmailHandler}
            />
            <LoginInput
              margin="normal"
              name="password"
              autoComplete="current-password"
              label="패스워드"
              type="Password"
              value={password}
              onChange={inputPasswordHandler}
            />

            <LoginBtn
              style={{ backgroundColor: "#3F9EF2" }}
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
            >
              로그인
            </LoginBtn>

            <section style={{ display: "block", textAlign: "center" }}>
              <LoginText>비밀번호 재설정</LoginText>
              <LoginText>회원가입</LoginText>
            </section>
          </form>

          <section style={{ display: "block", textAlign: "center" }}>
            <LoginSns>SNS계정으로 간편 로그인/회원가입</LoginSns>
            <Card.Img
              variant="top"
              src="/img/facebook.png"
              style={{
                objectFit: "cover",
                width: "1.3cm",
                height: "1.3cm",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
            <Card.Img
              variant="top"
              src="/img/kakao.png"
              style={{
                objectFit: "cover",
                width: "1.3cm",
                height: "1.3cm",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
            <Card.Img
              variant="top"
              src="/img/naver.png"
              style={{
                objectFit: "cover",
                width: "1.3cm",
                height: "1.3cm",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
          </section>
          <p
            style={{
              marginTop: "24px",
              color: "rgb(194, 200, 204)",
              fontSize: "14px",
              lineHeight: "18px",
              cursor: "pointer",
            }}
          >
            로그인에 문제가 있으신가요?
          </p>
          <LoginUnuserText>비회원 주문 조회하기</LoginUnuserText>
        </Layout>

        <LoginFooter>© bucketplace, Co., Ltd.. All Rights Reserved</LoginFooter>
      </LoginLayout>
    </LoginMain>
  );
};

export default LogIn;

const LoginMain = styled.div`
  display: flex;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100vh;
`;

const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
  letter-spacing: -0.4px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  background-color: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  body,
  html {
    margin: 0;
    padding: 0;
  }
`;
const Layout = styled.div`
  flex: 1 0 auto;
  margin: 0px auto;
  max-width: 300px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0px;
  font-size: 15px;
`;

const LoginInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0px 0px 4px 4px;
  line-height: 21px;
  resize: none;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  padding: 13px 15px 14px;
  box-sizing: border-box;
`;

const LoginBtn = styled.button`
  margin: 20px 0px;
  width: 100%;
  padding: 15px 10px;
  font-size: 17px;
  min-height: 50px;
  background-color: rgb(53, 197, 240);
  border: none;
  color: rgb(255, 255, 255);
  user-select: none;
  position: relative;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  font-weight: 700;
  transition: color 0.1s ease 0s, background-color 0.1s ease 0s,
    border-color 0.1s ease 0s;
  border-radius: 4px;
  cursor: pointer;
`;
const LoginText = styled.a`
  text-decoration: none;
  margin-right: 20px;
  font-weight: 500;
`;

const LoginSns = styled.p`
  margin: 35px 0px 15px;
  color: rgb(117, 117, 117);
  font-size: 12px;
  line-height: 1.33;
`;

const LoginUnuserText = styled.div`
  width: 100%;
  margin: 40px 0px 20px;
  padding-top: 20px;
  line-height: 1.4;
  border-top: 1px solid rgb(219, 219, 219);
  text-align: center;
  font-weight: 500;
`;
const LoginFooter = styled.footer`
  width: 100%;
  color: rgb(117, 117, 117);
  font-size: 10px;
  line-height: 20px;
  margin: -5px 0px 25px;
  text-align: center;
  box-sizing: border-box;
  display: block;
  position: relative;
  bottom: 0px;
  right: 0px;
`;
