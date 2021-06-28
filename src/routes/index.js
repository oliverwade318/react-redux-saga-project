import React from "react";
import { Switch } from "react-router-dom";
import { toast } from "react-toastify";
import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

export default function Routes() {
  toast.success("Loguei");
  toast.error("Errei");
  return (
    <Switch>
      <MyRoute path="/" exact component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
