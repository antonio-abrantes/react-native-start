import React from "react";
import { HighlightCard } from "../../components/HighlightCard";


import {
  Container,
  Header,
  Title,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  IconPower,
  HighlightCardsList,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/20172965?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Antônio</UserName>
            </User>
          </UserInfo>
          <IconPower name="power"/>
        </UserWrapper>
      </Header>
      <HighlightCardsList>
        <HighlightCard
          title="Entrada"
          amount="17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="1.259,00"
          lastTransaction="Ultima saída dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCardsList>
    </Container>
  );
}

// Aula 11
