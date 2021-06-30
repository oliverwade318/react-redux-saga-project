import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function MyRoute({ component: Component, IsClosed, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // A rota esta fechada e o usuário não esta logado (verifica area de login)
  if (IsClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/login", // caminho redireciona para o login
          state: { prevPath: rest.location.pathname } // guarda o estado da pagina anterior (lembra o histórico)
        }}
      />
    );
  }

  // O usuário esta em qualquer outra área do site (retorna o ...restante das outras páginas)
  return <Route {...rest} component={Component} />;
}

// Valor Padrão de proptypes quando não é requerido
MyRoute.defaultProps = {
  IsClosed: false
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  IsClosed: PropTypes.bool
};
