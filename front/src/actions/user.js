import back from "../apis/back";
export const login = (email, password) => async (dispatch) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }
  const response = await back.post("/users/login", { email, password });
  console.log(response);
  return {
    type: "USER_SESSION",
    payload: null,
  };
};
