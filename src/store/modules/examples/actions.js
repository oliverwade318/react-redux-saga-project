import * as types from "../types";

export function requestClickButton() {
  return {
    type: types.BOTAO_CLICADO_REQUEST
  };
}

export function successClickButton() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS
  };
}

export function failureClickButton() {
  return {
    type: types.BOTAO_CLICADO_FAILURE
  };
}
