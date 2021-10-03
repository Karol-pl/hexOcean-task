import styled from "styled-components";

export const StyledInput = styled.input`
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 5px 50px;
  margin-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

export const ErrorText = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding-bottom: 20px;
  text-align: center;
  color: red;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
