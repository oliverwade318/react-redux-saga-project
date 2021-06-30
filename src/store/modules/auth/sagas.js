import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { get } from "lodash";
import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";
import history from "../../../services/history";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/character", payload);
    yield put(actions.loginSuccess({ ...response.data })); // response espalha o envio do axios

    toast.success("Usuário Logado");

    //Autorização do envio da APIe requisiç~~ao de login via Token
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath); // retorna a solicitação pra pagina anterior ao login
  } catch (err) {
    toast.error("Nome ou espécie inválido");

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// All pra o Saga ouvir todas as requisições - takeLatest pra que capture somente uma única ação do usuário em determinado local
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
]);
