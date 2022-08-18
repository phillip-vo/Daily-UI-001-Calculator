import styled from "styled-components";
import { theme } from "../../App";

export const Button = styled.button`
  width: ${({ width }) => width || "75px"};
  height: 75px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  color: ${({ color }) => color || theme.colors.primary};
  font-size: 1.15em;
  border-radius: ${({ borderRadius }) => borderRadius || "50%"};
  cursor: pointer;
  border: none;
`;
