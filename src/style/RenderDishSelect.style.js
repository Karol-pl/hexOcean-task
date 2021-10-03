import styled from "styled-components";

export const StyledSelect = styled.select`
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 5px 50px;
  margin-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;
