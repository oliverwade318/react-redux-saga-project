import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  color: ${(props) => (props.isBlack ? "black" : "red")};
  text-align: center;
`;

export const Form = styled.form`
  input {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 15px 0;
    border-radius: 5px;

    &:focus {
      border: 1px solid ${colors.PrimaryColor};
    }
  }

  button {
    width: 100%;
    background-color: ${colors.PrimaryColor};
    transition: all 300ms;

    &:hover {
      filter: brightness(80%);
    }
  }
`;
