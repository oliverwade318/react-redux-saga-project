import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? "red" : "blue")};
`;

export const Paragraph = styled.p`
  font-family: sans-serif;
`;
