import * as types from "../types";

const initialState = {
  botaoClicado: false
};

// A variável reducer vai receber(ouvir) a ação e retornar o estado
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("Deu bom!");
      const newState = { ...state }; // copio o estado pra variavel newState
      newState.botaoClicado = !newState.botaoClicado; // realiza um toggle = se o botao estiver true vira false e vice e versa
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log("Errou!");
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log("Requisição feita");
      return state;
    }

    default: {
      return state;
    }
  }
}
