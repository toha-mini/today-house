import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { add_card, delete_card, selectCards } from "../redux/module/CardSlice";

export const useCard = () => {
  const [content, setContent] = useState("");
  const [titleImage, setTitleImage] = useState("");

  const card = useSelector(selectCards);
  const dispatch = useDispatch();
  console.log(card);

  const onChangeTitleHandle = (e) => {
    setTitleImage(e.target.value);
  };

  const onChangeContentHandle = (e) => {
    setContent(e.target.value);
  };

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      content: content,
      titleImage: titleImage,
    };
    dispatch(add_card(newCard));
    setTitleImage("");
    setContent("");
  };

  const deleteCard = (id) => {
    dispatch(delete_card(id));
  };

  return {
    card,
    content,
    setTitleImage,
    setContent,
    addCard,
    deleteCard,
    onChangeContentHandle,
    onChangeTitleHandle,

  };
};
