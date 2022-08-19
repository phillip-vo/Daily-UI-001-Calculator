import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ borderRadius }) => borderRadius || "none"};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || "space-evenly"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  align-items: flex-end;
`;
