import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? "red" : "black")};
  text-align: center;
  margin: 20px 0;
`;

export const AlunoContainer = styled.div`
  width: 100%;
`;

export const AlunoName = styled.h2`
  text-align: center;
  padding: 15px 0;
`;

export const AlunoPhoto = styled.figure`
  display: flex;
  justify-content: center;

  img {
    border-radius: 50%;
  }
`;

export const AlunoSpecies = styled.h3`
  text-align: center;
  margin: 15px 0 35px 0;
  font-weight: 300;
`;

export const AlunoStatus = styled.div``;
