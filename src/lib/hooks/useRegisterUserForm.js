import { useState } from "react";
import axios from "../axiosConfig";
import _ from "lodash"; // Import lodash for debouncing
import { isValidUsername } from "../utilis/users";
import toast from "react-hot-toast";

export const useUsernameUserForm = (userId = "") => {
  const [username, setUsername] = useState({
    loading: false,
    error: "",
    value: "",
  });

  const setUsernameValue = (newUsername) => {
    // Validate username
    toast.dismiss();

    if (isValidUsername(newUsername) || !newUsername) {
      // Dismiss any existing toasts
      setUsername({
        loading: true,
        error: "",
        value: newUsername,
      });
    } else {
      toast.error("Invalid username. Only lowercase letters are allowed.");
    }
  };

  const setUsernameError = (errorMessage) => {
    setUsername((prevUser) => ({
      loading: false,
      error: errorMessage,
      value: prevUser.value,
    }));
  };

  return {
    username,
    setUsernameValue,
    setUsernameError,
  };
};

// Debounced function for username validation
export const validateUsername = _.debounce(
  async (usernameValue, setUsernameError, userId = "") => {
    // Replace this with your actual API call
    const errorMessage = await usernameExistsApi(usernameValue, userId);

    setUsernameError(errorMessage);
  },
  500
); // 500ms debounce time

// API to verify whether username already exists
const usernameExistsApi = async (usernameValue, userId = "") => {
  try {
    const { data } = await axios.get(
      `users/?username=${usernameValue}&userId=${userId}`
    );

    if (data.length > 0) return "Username already exist";
  } catch (error) {
    return error.message;
  }
};
