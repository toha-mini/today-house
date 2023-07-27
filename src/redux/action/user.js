// redux/action/user.js
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const logIn = () => {
	return {
		type: LOG_IN,
	};
};

export const logOut = () => {
	return {
		type: LOG_OUT,
	};
};
