import React from "react";
import {
  StyledInput,
  ErrorText,
  InputContainer,
} from "../style/RenderField.style";

const RenderField = ({
  input,
  label,
  placeholder,
  type,
  step,
  min,
  max,
  parse,
  meta: { touched, error },
}) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <div>
        <StyledInput
          {...input}
          placeholder={placeholder}
          type={type}
          step={step}
          min={min}
          max={max}
          parse={parse}
        />
        <br />
        {touched && error && <ErrorText>{error}</ErrorText>}
      </div>
    </InputContainer>
  );
};

export default RenderField;
