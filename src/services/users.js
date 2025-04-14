// services/users.js
import axios from "axios";

const apiUrl = process.env.REACT_APP_LOCAL_API_URL;

export const getUsers = async () => {
  const response = await axios.get(`${apiUrl}/users`);
  return response.data;
};

export const addUser = async (user) => {
  try {
    const response = await axios.post(`${apiUrl}/users`, user);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};
