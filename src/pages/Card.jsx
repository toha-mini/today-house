import React from 'react';
import Cards from 'react-bootstrap/Card';
import { styled } from 'styled-components';
import { PiHeartThin } from 'react-icons/pi';
import { PiBookmarkSimpleThin } from 'react-icons/pi';
import { PiChatCircleThin } from 'react-icons/pi';

export const Card = (id) => {
  return (
    <CardMain  key={id} >
      <CardBody>
        <CardButton>
      <CardNav style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Cards.Img
          variant="top"
          src="https://avatars.githubusercontent.com/u/126327414?v=4"
          style={{
            objectFit: 'cover',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <div style={{ fontWeight: '700', fontSize: '14px' }} >아이디</div>
        <div style={{ marginBottom: '10px'}} >.</div>
        <FollowText >팔로우</FollowText>
      </CardNav>

      <div style={{ position: 'relative' }}>
        <img src="https://avatars.githubusercontent.com/u/126327414?v=4" style={{ width: '235px', height: '215', borderRadius: '10px' }} />

        <IconBoxs style={{ display: 'flex' }} >

          <IconBox style={{ display: 'flex', gap:'2px'}} >
          <PiHeartThin size={30}  strokeWidth={3}  />
            <div>23</div>
          </IconBox>
          
          <IconBox style={{ display: 'flex', gap:'2px' }}>
            <PiBookmarkSimpleThin size={30} />
            <div>343</div>
          </IconBox>
         
          <IconBox style={{ display: 'flex', gap:'2px' }}>
          <PiChatCircleThin size={30} />
          <div>343</div>
            </IconBox>
         
        </IconBoxs>
        <div style={{ margin: '10px 0 0', fontSize: '14px' }}>
        이곳은 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내
      </div>
      </div>
       </CardButton>
      </CardBody>
    </CardMain>
  );
};


const CardMain = styled.div`
  padding-right: 10px;
    padding-left: 10px;
    position: relative;
    width: 255px;
    box-sizing: border-box;
    min-height: 1px;
    
`

const CardBody = styled.div`
  div {
    display: block;
}
body, html {
    line-height: 1;
    font-family: OhouseSans,Noto Sans KR,Apple SD Gothic Neo,맑은 고딕,Malgun Gothic,sans-serif;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -.4px;
    font-size: 13px;
}
`

const CardButton = styled.div`
padding-bottom: 40px;
`

const CardNav = styled.div`
    display: flex;
    min-height: 36px;
    margin: 0 0 16px;
`

const FollowText = styled.div`
    flex: 0 0 auto;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    color: #35c5f0;
    font: inherit;
    font-weight: 700;
    transition: opacity .1s;
    font-size: 14px;
`

const IconBoxs = styled.div`
  flex: 0 0 auto;
  display: flex;
    margin-bottom: -12px;
`
const IconBox = styled.div`
    flex: 1 0 0px;
    position: relative;
    width: 85px;
    height: 24px;
    display: block;
    margin: 0;
    padding: 13px 0 16px;
    background: none;
    border: none;
    text-align: center;
    transition: opacity .1s;
    z-index: 2;
    justify-content: center;
    align-items: center;

`