const errorResponseReducer = (state = null, action) => {
    console.log(action.type);
  switch (action.type) {
    case "FORM_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default errorResponseReducer;
