// import axios from "axios";

// // Utility function to validate environment variables
// const validateEnv = () => {
//   if (!process.env.NEXT_PUBLIC_API_KEY) {
//     throw new Error("Missing NEXT_PUBLIC_API_KEY in environment variables");
//   }
//   if (!process.env.NEXT_PUBLIC_USER_EMAIL) {
//     throw new Error("Missing NEXT_PUBLIC_USER_EMAIL in environment variables");
//   }
//   if (!process.env.NEXT_PUBLIC_API_URL) {
//     throw new Error("Missing NEXT_PUBLIC_API_URL in environment variables");
//   }
// };

// // Validate environment variables
// validateEnv();

// const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL;
// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// // Function to fetch access token from the server
// const fetchAccessToken = async () => {
//   try {
//     const response = await axios.get(`${apiUrl}/getaccesstoken`, {
//       headers: {
//         Accept: "application/json",
//         "api-token": apiKey,
//         "user-email": userEmail,
//       },
//     });

//     if (!response.data || !response.data.auth_token) {
//       throw new Error("Invalid access token response");
//     }

//     return response.data.auth_token;
//   } catch (error) {
//     console.error("Error fetching access token:", error);
//     throw new Error(
//       "Failed to fetch access token. Please check API credentials.",
//     );
//   }
// };

// // Create and configure Axios instance dynamically
// const createAxiosClient = async () => {
//   try {
//     const token = await fetchAccessToken();

//     return axios.create({
//       baseURL: apiUrl,
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.error("Error creating Axios client:", error);
//     throw error;
//   }
// };

// // Export the Axios client
// const axiosClient = await createAxiosClient();
// export default axiosClient;
