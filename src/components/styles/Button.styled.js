import styled from "styled-components";
import { theme } from "../../App";

export const Button = styled.button`
  width: ${({ width }) => width || "75px"};
  height: 75px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  color: ${({ color }) => color || theme.colors.primary};
  font-size: 1.15em;
  font-weight: lighter;
  border-radius: ${({ borderRadius }) => borderRadius || "50%"};
  cursor: pointer;
  border: ${({ border }) => border || "none"};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
