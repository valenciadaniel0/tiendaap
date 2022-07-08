const userReducer = (state = null, action) => {
  console.log(action.type);
  switch (action.type) {
    case "USER_SESSION":
      return action.payload
    default:
      return state;
  }
};

export default userReducer;