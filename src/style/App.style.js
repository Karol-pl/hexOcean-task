import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
  padding: 20px;
  text-align: center;
`;

export const ThemeButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-image: linear-gradient(
    45deg,
    rgba(1, 215, 49, 1) 1%,
    rgba(0, 80, 154, 1) 100%
  );
  background-origin: border-box;
  background-clip: border-box;
  -webkit-background-clip: border-box;
  -moz-background-clip: border-box;
  box-shadow: 0px 1000px 0px ${({ theme }) => theme.text} inset;
  cursor: pointer;
  transform: scale(1.15);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1);
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
