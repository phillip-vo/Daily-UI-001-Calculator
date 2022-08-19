import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent || "space-evenly"};
  align-items: center;
`;
