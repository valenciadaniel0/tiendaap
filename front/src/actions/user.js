import back from "../apis/back";
export const login = (email, password) => async (dispatch) => {
  let error = false;
  const response = await back
    .post("/users/login", { email, password })
    .catch((errorResponse) => {
      error = true;
      console.log(error);
      dispatch({
        type: "FORM_ERROR",
        payload: errorResponse.response.data.error,
      });
    });

  if (!error) {
    dispatch({
      type: "USER_SESSION",
      payload: response.data,
    });
  }
};
