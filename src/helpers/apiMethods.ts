import axios from "axios";

import { ENV } from "@/utils/const/main";
import { GetCookie } from "./manageCookie";

const api = axios.create({
	baseURL: `${ENV.basePath}${process.env.REACT_APP_API_URL}`,
	headers: { accept: "application/json" },
});

axios.interceptors.request.use(
	async (config) => {
		let token = GetCookie("token");
		if (token && token !== '""') {
			const cleartoken = token.replace(/^"|"$/g, "");
			config.headers["Authorization"] = `Bearer ${cleartoken}`;
		} else {
			// config.headers["Authorization"] = "";
		}
		return config;
	},
	(error) => {
		console.error("Error in request interceptor:", error);
		return Promise.reject(error);
	}
);
const Api = {
	auth: {},
};

export default Api;
