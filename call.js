const axios = require("axios");

const API_URL = "https://www.oration.ai/api/v2/conversations";

const API_KEY = "b6b4693d-2412-4565-a206-a48864bc9829";
const WORKSPACE_ID = "88d83488-8c76-45ad-8818-66980fbbdbdb";

const payload = {
	conversations: [
		{
			agentId: "a4b1da07-57b0-4de8-8a65-2d5049e5a60a",
			conversationType: "telephony",
			toPhoneNumber: "+918296276281",
			dynamicVariables: {
				name: "John Doe",
			},
		},
	],
};

(async () => {
	try {
		const response = await axios.post(API_URL, payload, {
			headers: {
				"x-api-key": API_KEY,
				"x-workspace-id": WORKSPACE_ID,
				"Content-Type": "application/json",
			},
		});

		console.log("Call triggered successfully!");
		console.log("Status:", response.status);
		console.log("Response data:", response.data);
	} catch (error) {
		if (error.response) {
			console.error("API responded with an error:");
			console.error("Status code:", error.response.status);
			console.error("Response data:", error.response.data);
		} else if (error.request) {
			console.error("No response received from API. Request info:");
			console.error(error.request);
		} else {
			console.error("Error setting up request:", error.message);
		}
	}
})();
