import axios from "axios";

export const createOrder = (formValues) => async (dispatch) => {
  const response = await axios.post(
    "https://frosty-wood-6558.getsandbox.com:443/dishes",
    formValues
  );

  dispatch({ type: "CREATE_ORDER", payload: response });
};
