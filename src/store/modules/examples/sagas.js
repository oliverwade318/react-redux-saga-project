import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actions from "./actions";
import * as types from "../types";

const require = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    toast.success("Deu bom! =)");
    yield call(require);
    yield put(actions.successClickButton());
  } catch {
    toast.error("Deu ruim =(");
    yield put(actions.failureClickButton());
  }
}

// All pra o Saga ouvir todas as requisições - takeLatest pra que capture somente uma única ação do usuário em determinado local
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
