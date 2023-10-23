import { useState } from "react";
import axios from "../axiosConfig";
import _ from "lodash"; // Import lodash for debouncing
import { isValidPassword, isValidUsername } from "../utilis/users";
import toast from "react-hot-toast";

export const useRegisterUserForm = () => {
  const [user, setUser] = useState({
    username: {
      loading: false,
      error: "",
      value: "",
    },
    password: "",
    confirmPassword: "",
    first_name: "",
    is_staff: false,
    role: "",
    image: "",
  });

  const setUsernameValue = (newUsername) => {
    // Validate username
    toast.dismiss();

    if (isValidUsername(newUsername) || !newUsername) {
      // Dismiss any existing toasts
      setUser((prevUser) => ({
        ...prevUser,
        username: {
          ...prevUser.username,
          value: newUsername,
          loading: false,
          error: "",
        },
      }));
    } else {
      toast.error("Invalid username. Only lowercase letters are allowed.");
    }
  };

  const setUsernameError = (errorMessage) => {
    setUser((prevUser) => ({
      ...prevUser,
      username: {
        ...prevUser.username,
        error: errorMessage,
        loading: false,
      },
    }));
  };

  const setUsernameLoading = () => {
    setUser((prevUser) => ({
      ...prevUser,
      username: {
        ...prevUser.username,
        error: "",
        loading: true,
      },
    }));
  };

  const setPassword = (newPassword) => {
    // Dismiss any existing toasts
    toast.dismiss();
    if (isValidPassword(newPassword) || !newPassword) {
      setUser((prevUser) => ({ ...prevUser, password: newPassword }));
    } else {
      toast.error("Invalid password. Only letters and numbers are allowed.");
    }
  };

  const setConfirmPassword = (newConfirmPassword) => {
    // Dismiss any existing toasts
    toast.dismiss();
    if (isValidPassword(newConfirmPassword) || !newConfirmPassword) {
      setUser((prevUser) => ({
        ...prevUser,
        confirmPassword: newConfirmPassword,
      }));
    } else {
      toast.error("Invalid password. Only letters and numbers are allowed.");
    }
  };

  const setUserField = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const setIsStaff = (newIsStaff) => {
    // Validate password

    setUser((prevUser) => ({ ...prevUser, is_staff: newIsStaff }));
  };

  return {
    ...user,
    setUsernameValue,
    setUsernameError,
    setUsernameLoading,
    setPassword,
    setConfirmPassword,
    setUserField,
    setIsStaff,
  };
};

// Debounced function for username validation
export const validateUsername = _.debounce(
  async (username, setUsernameError, setUsernameValue) => {
    // Replace this with your actual API call
    const errorMessage = await usernameExistsapi(username);

    if (errorMessage) {
      setUsernameError(errorMessage);
    } else {
      setUsernameValue(username);
    }
  },
  500
); // 500ms debounce time

// API to verify whether username already exists
const usernameExistsapi = async (username) => {
  try {
    const { data } = await axios.get(`users/?username=${username}`);

    if (data.length > 0) return "Username already exist";
  } catch (error) {
    return error.message;
  }
};
