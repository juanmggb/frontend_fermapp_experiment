export const isValidUsername = (username) => {
  const re = /^[a-z]+$/;
  return re.test(username);
};

export const isValidPassword = (password) => {
  const re = /^[a-zA-Z0-9]+$/;
  return re.test(password);
};
