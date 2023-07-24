import React, { useState } from 'react'
import { styled } from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { SlBubble } from 'react-icons/sl';
import { FiShare2 } from 'react-icons/fi';

export const Detail = () => {


    
    const [isFilledHeart, setIsFilledHeart] = useState(false)
    const [isFilledBook, setIsFilledBook] = useState(false)

    const handleHeartClick = () => {
        setIsFilledHeart(!isFilledHeart)
    }

    const handleBookClick = () => {
        setIsFilledBook(!isFilledBook)
    }


        const [isEmpty, setIsEmpty] = useState(true);
        
        const handleChange = (e) => {
          setIsEmpty(e.target.textContent === '');
        };
      
 

  return (
    <PicTotal>
        <PicPadding>
            <PicTop>
                <CardWidth>
                    <CardTop>
                        <DetailTag>
                           <DetailTagText>
                                <TagTextButton>모던스타일</TagTextButton>
                                <TagTextButton>아파트</TagTextButton>
                            </DetailTagText> 
                        </DetailTag>
                        <CardPics>
                             <CardPic src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164890162254034673.jpeg?w=1440"  />
                        </CardPics>
                    </CardTop>
<CustomHr2 />
                    <div>
                        <CommentDiv>
                            <CommentText>
                                댓글
                                <CommentNumber>
                                    46
                                </CommentNumber>
                            </CommentText>
                            <CommentButDiv6>
                                <CommentButDiv5>
                                    <CommentEmoticon>
                                        <CommentEmoticonPic src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164890162254034673.jpeg?w=1440"  />
                                    </CommentEmoticon>
                                    <CommentButDiv4>
                                        <CommentButDiv3>
                                            <CommentButDiv2>
                                                <CommentLine contenteditable="true" data-placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:)" size='44' isEmpty={isEmpty} onInput={handleChange}>

                                                </CommentLine>
                                                <CommentButDiv>
                                                    <CommentBtn>
                                                        입력
                                                    </CommentBtn>
                                                </CommentButDiv>
                                            </CommentButDiv2>
                                        </CommentButDiv3>
                                    </CommentButDiv4>
                                </CommentButDiv5>
                            </CommentButDiv6>
                        </CommentDiv>
                    
                    </div>
                </CardWidth>

                <SideButtonPosition>
                    <SideButtonSticky>
                        <SideButtonControl>
                            <SideButtonBox>
                                <SideButton>
                                    <SideButtonSpan onClick={handleHeartClick}>
                                        <SideButtonHeart >
                                        {isFilledHeart ? <AiFillHeart  color = "#43C5F0"size={23}/> : <AiOutlineHeart  size={23}/>}
                                            

                                        </SideButtonHeart>
                                    </SideButtonSpan>
                                    <SideButtonSpanNumber>
                                        180
                                    </SideButtonSpanNumber>
                                </SideButton>

                                <SideButton>
                                    <SideButtonSpan onClick={handleBookClick}>
                                        <SideButtonHeart>
                                        {isFilledBook ? <FaBookmark  color = "#43C5F0"size={23}/> : <FaRegBookmark  size={23}/>}
                                          

                                        </SideButtonHeart>
                                    </SideButtonSpan>
                                    <SideButtonSpanNumber>
                                        180
                                    </SideButtonSpanNumber>
                                </SideButton>
<CustomHr />
                                <SideButton>
                                    <SideButtonSpanLow>
                                        <SideButtonHeart>
                                            <SlBubble size={23}/>
                                        </SideButtonHeart>
                                    </SideButtonSpanLow>
                                    <SideButtonSpanNumber>
                                        180
                                    </SideButtonSpanNumber>
                                </SideButton>

                                <SideButton>
                                    <SideButtonSpanLow>
                                        <SideButtonHeart>
                                            <FiShare2 size={23}/>
                                        </SideButtonHeart>
                                    </SideButtonSpanLow>
                                    <SideButtonSpanNumber>
                                        180
                                    </SideButtonSpanNumber>
                                </SideButton>

                            </SideButtonBox>
                        </SideButtonControl>
                    </SideButtonSticky>
                </SideButtonPosition>
            </PicTop>
        </PicPadding>
    </PicTotal>
  ) 
}
const CommentLine = styled.div`
        word-break: break-word;
    cursor: text;
    display: inline-block;
    padding: 0px;
    border: none;
    background: none;
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    font-family: inherit;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    color: rgb(47, 52, 56);
    outline: none;
    font-size: 16px;
    line-height: 24px;
    overflow-y: auto;
    flex: 1 0 0%;
    min-height: 24px;
    margin: 9px 0px;
    box-sizing: border-box;
    resize: none;
    vertical-align: top;
    height: 0px;
    min-width: 100px;
    
    &::before{
    content: attr(data-placeholder);
    color: rgb(194, 200, 204);
    pointer-events: none;
    ${({ isEmpty }) => isEmpty ? 'display: block;' : 'display: none;'}
    position: absolute;
    }
`

const CommentEmoticonPic = styled.figure`
    height: 0px;
    display: block;
    visibility: hidden;
    padding-top: 100%;
    box-sizing: border-box;
`

const CommentEmoticon = styled.figure`
    display: inline-block;
    background: url(https://bucketplace-v2-development.s3.amazonaws.com/uploads/default_images/avatar.png) 50% center / cover no-repeat;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 12px;
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 0px;
    flex-shrink: 0;
    border: 0.5px solid rgba(0, 0, 0, 0.08);
`

const CommentButDiv6 = styled.div`
        margin-bottom: 40px;
    margin-top: 8px;
    letter-spacing: -.4px;
`

const CommentButDiv5 = styled.div`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    letter-spacing: -.4px;
`
const CommentButDiv4 = styled.div`
-webkit-box-flex: 1;
flex-grow: 1;

`
const CommentButDiv3 = styled.div`
-webkit-box-align: center;
    line-height: 0;
    box-sizing: border-box;
    border: 1px solid rgb(218, 221, 224);
    border-radius: 4px;
    display: block;
    padding: 0px 16px;
    cursor: text;
`
const CommentButDiv2 = styled.div`
    display: inline-flex;
    -webkit-box-align: center;
    line-height: 0;
    box-sizing: border-box;
    border-radius: 4px;
    align-items: flex-start;
    width: 100%;
    padding: 0px;
    border: 0px;
`
const CommentButDiv = styled.div`
    margin-left: 8px;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 42px;
    padding: 9px 0px;
`
const CommentBtn = styled.button`
        display: inline-block;
    margin: 0px 0px 0px 12px;
    border: none;
    background: none transparent;
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    font-family: inherit;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    height: 30px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
    color: rgb(194, 200, 204);
    flex-shrink: 0;
    padding: 0px;
`

const DetailTag = styled.div`
    margin: 0px 0px 16px;
    padding: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

` 

const DetailTagText = styled.div`
    overflow: hidden;
    margin-right: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    * {
    box-sizing: border-box;
}
display: flex;
`
const TagTextButton = styled.div`
    position: relative;
    margin-right: 11px;
    cursor: pointer;
    touch-action: manipulation;
    font-size: 16px;
    line-height: 32px;

    color: rgb(130, 140, 148);


  &:last-child::after {
    display: none;
  }
    &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: -6px;
    bottom: 0px;
    width: 1px;
    height: 14px;
    margin: auto;
    background: rgb(234, 237, 239);
    }
    
`

const CardPics = styled.div`
    padding-bottom: 133.333%;
    position: relative;
    * {
    box-sizing: border-box;
}
`


const CardPic = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
`
const CardTop = styled.div`
    margin: 50px 0px 40px;
    height: 100%;
`

const CardWidth = styled.div`
    max-width: 720px;
    position: relative;
    width: 100%;
    margin: 0px auto;
    box-sizing: border-box;
`

const PicTop = styled.div`
    position: relative;

` 
const PicPadding = styled.div`
    position: relative;
    padding: 0px 40px;
    box-sizing: border-box;
`

const PicTotal = styled.div`
    flex: 1;
    width: 100%;
    box-sizing: border-box;
`

const SideButton = styled.button`
    cursor: pointer;
    touch-action: manipulation;
    position: relative;
    display: block;
    width: 60px;
    margin-bottom: 38px;
    padding: 0px;
    border: 0px;
    background: none;
`

const SideButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`
const SideButtonControl = styled.div`
    position: relative;
`

const SideButtonSticky = styled.div`
    position: sticky;
    top: 182px;
    transition: top 0.1s ease 0s;
`

const SideButtonPosition = styled.div`
        position: absolute;
    top: 50px;
    right: 0px;
    width: calc(50% - 360px);
    max-width: 340px;
    height: 100%;
    padding: 0px 40px;
    box-sizing: border-box;
`

const SideButtonSpan = styled.div`
    border: 1px solid rgb(194, 200, 204);
    background: rgb(255, 255, 255);
    box-shadow: rgba(63, 71, 77, 0.15) 0px 2px 6px;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    border-radius: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease 0s;
    cursor: pointer;
`
const SideButtonSpanLow = styled.div`
       position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    border-radius: 100%;
    box-sizing: border-box;
    background: rgb(247, 249, 250);
    transition: all 0.2s ease 0s;
`

const SideButtonHeart = styled.div`
    display: flex;
  align-items: center;
    font-size: 24px;
    line-height: 1;
    color: rgb(33, 38, 41);
    box-sizing: border-box;
    cursor: pointer;
`

const SideButtonSpanNumber = styled.div`
    position: absolute;
    left: 50%;
    bottom: -22px;
    font-size: 14px;
    line-height: 18px;
    color: rgb(130, 140, 148);
    white-space: nowrap;
    transform: translateX(-50%);
    box-sizing: border-box;
    cursor: pointer;
`
const CustomHr = styled.hr`
  width: 54px;
  height: 1px;
  margin: 0px 0px 16px;
  border: 0px;
  background: rgb(234, 237, 239);
`;

const CustomHr2 = styled.hr`
        margin: 0px;
    padding: 0px;
    height: 1px;
    border: none;
    background-color: rgb(234, 237, 239);
`

const CommentNumber = styled.span`
        margin-left: 6px;
    color: rgb(53, 197, 240);
    box-sizing: border-box;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700
`

const CommentText = styled.h1`
        font-size: 20px;
    line-height: 28px;
    color: rgb(47, 52, 56);
    margin: 20px 0px;
    font-weight: 700;
    box-sizing: border-box;
    
`
const CommentDiv = styled.div`
margin: 48px 0px 40px;
    padding: 0px;
`