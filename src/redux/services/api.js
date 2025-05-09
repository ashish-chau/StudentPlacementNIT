import axios from "axios";

console.log("API Base URL:", process.env.REACT_APP_API_URL); // Debugging line

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Uses environment variable
});



export const PostLogin = async (payload) => {
  try {
    const response = await api.post("api/auth/login", payload);
    console.log("Login API Response:", response);
    return response.data;
  } catch (error) {
    console.error("Login API Error:", error.response?.data);
    throw {
      data: error.response?.data || { message: "Unknown error" },
      status: error.response?.status || 500,
    };
  }
};


export const PostPlacementDetails = async (payload) => {
  try {
    const response = await api.post("api/placements", payload, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });
    console.log("Placement Details API Response:", response);
    return response.data;
  } catch (error) {
    console.error("Placement API Error:", error.response?.data);
    throw {
      data: error.response?.data || { message: "Unknown error" },
      status: error.response?.status || 500,
    };
  }
};
