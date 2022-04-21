import React from "react";
import { TouchableOpacityProps } from "react-native";
import theme from "../../../global/styles/theme";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps{
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}


export function TransactionTypeButton({ 
  title, 
  type,
  isActive,
  ...rest
}: Props) {
  return ( 
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={theme.icons[type]} type={type}/>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
}