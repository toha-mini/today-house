import React, { useState } from 'react'
import { styled } from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

export const Comment = () => {

    const [isFilledHeart, setIsFilledHeart] = useState(false)
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleHeartClick = () => {
        setIsFilledHeart(!isFilledHeart)
        setIsLiked((prevState) => !prevState);
        setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
    }

 



  return (
    <CommentLayout>
        <CommentDivAll>
            <CommentImgDiv>
                <CommentFigure>
                  <Emoticon src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164890162254034673.jpeg?w=1440"  />
                </CommentFigure>
            </CommentImgDiv>
            <CommentAll>
                <CommentNameDiv>
                    <CommentName>
                        Royce Kim
                    </CommentName>
                </CommentNameDiv>
                <CommentTitle>
                    정말 깔끔하네요
                </CommentTitle>
                <CommentDiv>
                        <CommentMonth>4개월전</CommentMonth>
                        <LikeFlex>
                            <Comma>.</Comma>
                            <LikeButton>

                                <LikeEmoticon onClick={handleHeartClick} >
                                {isFilledHeart ? <AiFillHeart  color = "#43C5F0"size={16}/> : <AiOutlineHeart  size={16}/>}
                                </LikeEmoticon>
                            {/* 라이크 카운트 */}
                                <LikeText>{isLiked ? '' : '좋아요'}</LikeText>
                                {isLiked && <LikeCounter>{likeCount}</LikeCounter>}

                            </LikeButton>
                        </LikeFlex>

                        <LikeFlex>
                            <Comma>.</Comma>
                            <LikeButton>
                                <LikeText>
                                    답글달기
                                </LikeText>
                            </LikeButton>
                        </LikeFlex>

                        <LikeFlex>
                            <Comma>.</Comma>
                            <LikeButton>
                                <LikeText>
                                    신고
                                </LikeText>
                            </LikeButton>
                        </LikeFlex>
                </CommentDiv>
            </CommentAll>
        </CommentDivAll>
    </CommentLayout>
  )
}
const LikeCounter = styled.span`
     padding: 0px;
    background-color: transparent;
    border: none;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
    color: rgb(53, 197, 240);
`;

const Comma = styled.div`
display: block;
    margin-right: 4px;
    margin-left: 4px;
    margin-bottom: 7px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
    color: rgb(130, 140, 148);
    `

const CommentLayout = styled.div`
    margin: 30px 0px;
`

const CommentDivAll = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 16px 0px;
    * {
    box-sizing: border-box;
}
`
const CommentImgDiv = styled.div`
       cursor: pointer;
`

const CommentFigure = styled.figure`
    display: inline-block;
    background: url(https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/320/320) 50% center / cover no-repeat;
    border-radius: 50%;
    width: 30px;
    margin-right: 12px;
`

const Emoticon = styled.div`
    height: 0px;
    display: block;
    visibility: hidden;
    padding-top: 100%;
`

const CommentAll = styled.div`
    flex: 1 1 0%;
    * {
    box-sizing: border-box;
}
`

const CommentNameDiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 10px;
    line-height: 14px;
    font-weight: 700;
    letter-spacing: -0.3px;
    `

const CommentName = styled.div`
    font-size: 16px;
    line-height: 20px;
    color: rgb(33, 38, 41);
    margin-right: 5px;
    cursor: pointer;

`
const CommentTitle = styled.div`
     margin: 8px 0px;
    -webkit-box-align: center;
    font-size: 16px;
    line-height: 24px;
    word-break: break-word;
    white-space: pre-line;
    color: rgb(47, 52, 56);
`

const CommentDiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
    color: rgb(130, 140, 148);
    box-sizing: border-box;
`

const CommentMonth = styled.div`
    color: rgb(130, 140, 148);
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
`

const LikeFlex = styled.div`
    display: flex;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
    color: rgb(130, 140, 148);

`

const LikeText = styled.span`
    padding: 0px;
    background-color: transparent;
    border: none;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
`


const LikeEmoticon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 1;
    margin-right: 3px;
`

const LikeButton = styled.button`
    cursor: pointer;
    touch-action: manipulation;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(130, 140, 148);
    padding: 0px;
    background-color: transparent;
    border: none;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
`