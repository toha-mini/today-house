import axios from "axios";

export const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

//! Get Post
const getPhotoLists = async () => {
	console.log(process.env.REACT_APP_SERVER_URL);
	try {
		const response = await instance.get(`/api/posts`);
		console.log("response: ", response);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

//! Get Bookmark
const getBookMarkLists = async () => {
	console.log(process.env.REACT_APP_SERVER_URL);
	try {
		const response = await instance.get(`/api/scrap`);
		console.log("response: ", response);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

//! Post Bookmark
const postBookMarkLists = async ({ id }) => {
	try {
		console.log("bookmarkId: ", id);
		const authorizationCookie = localStorage.getItem("authorization");
		const response = await instance.post(
			`/api/scrap`,
			{ id },
			{
				headers: {
					"Content-Type": "application/json",
					Accept: "*/*",
					Authorization: authorizationCookie,
					// Authorization: `${accessToken}`,
				},
			}
		);
		console.log("bookmarkresponse: ", response.data);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

export { getPhotoLists, getBookMarkLists, postBookMarkLists };
