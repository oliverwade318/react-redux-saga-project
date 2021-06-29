import React from "react";
import { Switch } from "react-router-dom";
import MyRoute from "./MyRoute";
import Aluno from "../pages/Aluno";
import Alunos from "../pages/Alunos";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Page404 from "../pages/Page404";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/register" component={Registro} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
