import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

//
function getCookie(cookieName) {
	var cookieValue = null;
	if (document.cookie) {
		var array = document.cookie.split(escape(cookieName) + "=");
		if (array.length >= 2) {
			var arraySub = array[1].split(";");
			cookieValue = unescape(arraySub[0]);
		}
	}
	return cookieValue;
}

//! Get Post
const getPhotoLists = async () => {
	console.log(process.env.REACT_APP_SERVER_URL);
	try {
		const authorizationCookie = getCookie("accessToken");
		console.log("authorization token: ", authorizationCookie);
		const response = await instance.get(`/api/posts`, {
			headers: {
				"Content-Type": "application/json",
				Accept: "*/*",
				Authorization: authorizationCookie,
				// Authorization: `${accessToken}`,
			},
		});
		console.log("response: ", response);
		console.log(response.data.map((e) => e.isScrap));
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

//! Post Bookmark
const postBookMarkLists = async ({ id }) => {
	try {
		console.log("bookmarkId: ", id);
		const authorizationCookie = getCookie("accessToken");
		console.log("authorization token: ", authorizationCookie);
		const payload = {
			postId: id,
		};
		const response = await instance.post(`/api/scrap`, payload, {
			headers: {
				"Content-Type": "application/json",
				Accept: "*/*",
				Authorization: authorizationCookie,
				// Authorization: `${accessToken}`,
			},
		});
		console.log("bookmarkresponse: ", response.data);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

export { getPhotoLists, postBookMarkLists };
