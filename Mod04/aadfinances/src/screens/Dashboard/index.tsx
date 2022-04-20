import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

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
  Transactions,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps{
  id: string;
} 

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de Site",
      amount: "12.700,00",
      category: {
        name: "Dolar",
        icon: "dollar-sign",
      },
      date: "19/04/2022",
    },
    {
      id: '2',
      type: 'negative',
      title: "Aluguel",
      amount: "1.200,00",
      category: {
        name: "Dolar",
        icon: "coffee",
      },
      date: "12/04/2022",
    },
    {
      id: '3',
      type: 'negative',
      title: "Jantar",
      amount: "270,00",
      category: {
        name: "Dolar",
        icon: "shopping-bag",
      },
      date: "12/04/2022",
    }
    ,
    {
      id: '4',
      type: 'positive',
      title: "Jantar",
      amount: "270,00",
      category: {
        name: "Dolar",
        icon: "shopping-bag",
      },
      date: "12/04/2022",
    }
  ];

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
          <IconPower name="power" />
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

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList // @ts-ignore
          data={data}    // @ts-ignore
          keyExtractor={item => item.id} // @ts-ignore
          renderItem={({ item }) => <TransactionCard data={item}/>}
        />

      </Transactions>
    </Container>
  );
}

// Aula 15
