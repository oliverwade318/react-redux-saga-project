import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Nav } from "./style";

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/acesso">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? "Clicado" : "Não clicado"}
    </Nav>
  );
}
