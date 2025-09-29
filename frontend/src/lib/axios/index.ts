import axios from "axios";
import { toast } from "sonner";

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		let message = "Something went wrong";

		if (error.response?.data?.message) {
			message = error.response.data.message;
		} else if (error.message) {
			message = error.message;
		}

		console.error("API ERROR", message);

		toast.error(message);

		return Promise.reject(new Error(message));
	},
);
