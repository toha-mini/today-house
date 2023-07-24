import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

//! Get
const getPhotoLists = async () => {
	try {
		const response = await instance.get(`api/posts/like`);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

export { getPhotoLists };
