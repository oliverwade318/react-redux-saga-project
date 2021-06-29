import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "lodash";
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";
import { Container } from "../../styles/GlobalStyles";
import {
  Title,
  AlunoContainer,
  AlunoName,
  AlunoPhoto,
  AlunoSpecies,
  AlunoStatus
} from "./style";
import axios from "../../services/axios";

export default function Alunos() {
  // useState, sempre ira retornar dois resultados - o valor do estado e a função que vai setar esses valores
  const [characters, setCharacter] = useState([]); // array dos objetos do resultado da API

  // useEffect para montar a API na página ou algum componente
  useEffect(() => {
    async function getData() {
      const response = await axios.get("/character");
      console.log(response.data.results);
      setCharacter(response.data.results);
    }

    getData();
  }, []);
  return (
    <Container>
      <Title>Alunos</Title>

      <AlunoContainer>
        {characters.map((character) => (
          <>
            <AlunoName key={String(character.id)}>{character.name}</AlunoName>
            <AlunoPhoto>
              {get(character, "character.image", true) ? (
                // o lodash serve pra que se existir a imagem retorna a imagem
                <img src={character.image} alt={character.species} />
              ) : (
                // se não, retorna um icone da biblioteca de icones
                <FaUserCircle size={36} />
              )}
            </AlunoPhoto>

            <AlunoSpecies>{character.species}</AlunoSpecies>

            <AlunoStatus>
              <Link to={`/aluno/${character.id}/edit`}>
                <FaEdit size={18} />
              </Link>

              <Link to={`/aluno/${character.id}/delete`}>
                <FaWindowClose size={18} />
              </Link>
            </AlunoStatus>
          </>
        ))}
      </AlunoContainer>
    </Container>
  );
}
