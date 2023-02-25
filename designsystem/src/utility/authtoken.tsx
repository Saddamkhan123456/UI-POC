export const getAuthtoken = () => {
  let token = localStorage.getItem("token");
  if (token === null) {
    window.location.href = "/login";
  }
  return token;
};
