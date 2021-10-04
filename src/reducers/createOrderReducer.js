export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_ORDER":
      return action.payload;
    default:
      return state;
  }
};
