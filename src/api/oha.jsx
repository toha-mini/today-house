import axios from "axios";

export const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

// //! Get
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

export { getPhotoLists };
