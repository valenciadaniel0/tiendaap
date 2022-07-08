import back from "../apis/back";
export const login = (email, password) => async (dispatch) => {
  const response = await back.post("/users/login", { email, password });

  dispatch({
    type: "USER_SESSION",
    payload: response.data,
  })
};
