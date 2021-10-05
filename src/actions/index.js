import axios from "axios";

export const createOrder = (formValues) => (dispatch) => {
  return axios
    .post("https://frosty-wood-6558.getsandbox.com/dishes", formValues, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

// export const createOrder = (formValues) => async (dispatch) => {
//   const response = await axios.post(
//     "https://frosty-wood-6558.getsandbox.com/dishes",
//     formValues,
//     { headers: { "Content-Type": "application/json" } }
//   );
//   console.log(response);
//   dispatch({ type: "CREATE_ORDER", payload: response });
// };
