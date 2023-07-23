import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    content: "content",
    titleImageUrl: "https://avatars.githubusercontent.com/u/126327414?v=4",
    titleImage1Url: "titleImgurl1",
    titleImage2Url: "titleImgurl2",
  },
  {
    id: 1,
    content: "content",
    titleImageUrl: "https://avatars.githubusercontent.com/u/126327414?v=4",
    titleImage1Url: "titleImgurl1",
    titleImage2Url: "titleImgurl2",
  },
  {
    id: 2,
    content: "content",
    titleImageUrl: "https://avatars.githubusercontent.com/u/126327414?v=4",
    titleImage1Url: "titleImgurl1",
    titleImage2Url: "titleImgurl2",
  },
  {
    id: 3,
    content: "content",
    titleImageUrl: "https://avatars.githubusercontent.com/u/126327414?v=4",
    titleImage1Url: "titleImgurl1",
    titleImage2Url: "titleImgurl2",
  },
];

const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    add_card: (state, action) => {
      return [...state, action.payload];
    },
    delete_card: (state, action) => {
      return state.filter((card) => card.id !== action.payload);
    },

  },
  extraReducers: {},
});

export default cardSlice.reducer;
export const selectCards = (state) => state.cardSlice;
export const { add_card, delete_card } = cardSlice.actions;
