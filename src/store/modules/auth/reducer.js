import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false
};

// A variável reducer vai receber(ouvir) a ação e retornar o estado
export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState }; // copia o initialState pra nao ser manipulado diretamente
      return newState; // e aqui ele desloga
    }

    default: {
      return state;
    }
  }
}
