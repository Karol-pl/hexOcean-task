import React from "react";
import { StyledSelect } from "../style/RenderDishSelect.style";
import { ErrorText } from "../style/RenderField.style";

const dishes = ["pizza", "soup", "sandwich"];

const RenderDishSelect = ({ input, meta: { touched, error } }) => {
  return (
    <>
      <StyledSelect {...input}>
        <option value="">Select a dish...</option>
        {dishes.map((dish) => (
          <option value={dish} key={dish}>
            {dish}
          </option>
        ))}
      </StyledSelect>
      {touched && error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default RenderDishSelect;
