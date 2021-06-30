import React, { useState } from "react";
import { toast } from "react-toastify";
// import { isEmail } from "validator";
import { get } from "lodash";
import { Container } from "../../styles/GlobalStyles";
import { Form, Title } from "./style";
import axios from "../../services/axios";
import history from "../../services/history";

export default function Registro() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 255 caracteres");
    }

    if (species.length < 3 || species.length > 255) {
      formErrors = true;
      toast.error("Espécie deve ter entre 3 e 255 caracteres");
    }

    // if (!isEmail(email)) {
    //   formErrors = true;
    //   toast.error("E-mail inválido");
    // }

    if (formErrors) return;

    try {
      await axios.post("/character/", {
        name,
        species
      });
      toast.success("Você fez seu cadastro");
      history.push("/login");
    } catch (err) {
      const error = get(err, "response.data.errors", []);
      error.map((error) => toast.error(error));

      // console.log(err); - Erro pq a API nao aceita POST de fora
    }
  }

  return (
    <Container>
      <Title isBlack>Crie sua Conta</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Espécie"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
