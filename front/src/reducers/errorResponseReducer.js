const errorResponseReducer = (state = null, action) => {
  switch (action.type) {
    case "FORM_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default errorResponseReducer;
