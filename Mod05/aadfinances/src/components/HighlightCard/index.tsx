import React from "react";

import {
  Title,
  Amount,
  CardInfo,
  Container,
  Header,
  Icon,
  LastTransaction,
} from "./styles";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total'
}

export function HighlightCard({
  title,
  amount = '0,00',
  lastTransaction,
  type
}: Props) {

  const icon = {
      up: 'arrow-up-circle',
      down: 'arrow-down-circle',
      total: 'dollar-sign'
  }

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <CardInfo>
        <Amount type={type}>R$ {amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </CardInfo>
    </Container>
  );
}
