import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  padding: 20px;
`;

export const StyledButton = styled.button`
  padding: 5px 20px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: 1.2rem;
  margin: 20px 0;
  background-image: linear-gradient(
    45deg,
    rgba(1, 215, 49, 1) 1%,
    rgba(0, 80, 154, 1) 100%
  );
  background-origin: border-box;
  background-clip: border-box;
  -webkit-background-clip: border-box;
  -moz-background-clip: border-box;
  box-shadow: 0px 1000px 0px ${({ theme }) => theme.body} inset;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: none;
    color: #ffffff;
  }
`;
