import React, { useState, useEffect } from "react";
import cart from "../../imgs/kart.png";
import logo from "../../imgs/logo.jpeg";
import styled from "styled-components";
import PostModal from "./PostModal";

const GlobalNavBar = () => {
  console.log("GlobalNavBar is rendering!!!");
  const [selected, setSelected] = useState(null);

  return (
    <StGlobalNavBar>
      <GlobalNavBarContainer>
        <ContainerInner>
          <StLogo>
            <Logo src={logo} />
          </StLogo>
          <>
            <StGlobalNav1>
              <GlobalNav1
                selected={selected === "커뮤니티"}
                onClick={() => setSelected("커뮤니티")}
              >
                {"커뮤니티"}
              </GlobalNav1>
              <GlobalNav1
                selected={selected === "쇼핑"}
                onClick={() => setSelected("쇼핑")}
              >
                {"쇼핑"}
              </GlobalNav1>
              <GlobalNav1
                selected={selected === "이사/시공/생활"}
                onClick={() => setSelected("이사/시공/생활")}
              >
                {"이사/시공/생활"}
              </GlobalNav1>
            </StGlobalNav1>
            <StGlobalNav2>
              <StGlobalInputNav>
                <GlobalInput type="text" />
              </StGlobalInputNav>
              <GlobalNavCart src={cart} />
              <StGlobalNavContainer>
                <GlobalNavTag>
                  <GlobalNav2 $noBorder>{"로그인"}</GlobalNav2>
                  <GlobalNav2>{"회원가입"}</GlobalNav2>
                  <GlobalNav2>{"고객센터"}</GlobalNav2>
                </GlobalNavTag>
                <PostModal />
              </StGlobalNavContainer>
            </StGlobalNav2>
          </>
        </ContainerInner>
      </GlobalNavBarContainer>
    </StGlobalNavBar>
  );
};

export default GlobalNavBar;

const StGlobalNavBar = styled.div`
  z-index: 1102;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaedef;
`;

const GlobalNavBarContainer = styled.div`
  width: 100%;
`;

const ContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const StLogo = styled.div`
  position: static;
`;

const Logo = styled.img`
  margin-right: 35px;
  width: 74px;
  height: 30px;
`;

const StGlobalNav1 = styled.div`
  display: flex;
  margin-right: 50px;
`;

const GlobalNav1 = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 10px;
  padding: 21px 5px 15px;
  font-size: 18px;
  line-height: 1;
  font-weight: bold;
  color: ${(props) => (props.selected ? "#35c5f0" : "#2f3438")};
  outline: none;

  &:hover {
    color: #35c5f0;
  }
`;

const StGlobalNav2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StGlobalInputNav = styled.div`
  align-items: center;
`;

const GlobalInput = styled.input`
  align-items: center;
  margin-right: 14px;
  width: 280px;
  height: 40px;
  align-items: center;
  line-height: 0;
  box-sizing: border-box;
  border: 1px solid #dadde0;
  border-radius: 4px;
  height: 40px;
  padding: 0 14px;
`;

const GlobalNavCart = styled.img`
  width: 24px;
  height: 24px;
`;

const StGlobalNavContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 20px;
`;

const GlobalNavTag = styled.div`
  display: flex;
  align-items: center;
`;

const GlobalNav2 = styled.div`
  padding: 0 10px;
  border-left: ${(props) => (props.$noBorder ? "none" : "1px solid #c1cad0")};
`;
