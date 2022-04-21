import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
// Use theme with ${({ theme }) => theme.colors.shape};

interface IconProps{
  isActive?: boolean;
  type: 'up' | 'down';
}

interface Props{
  isActive?: boolean;
  type?: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: #ffffff;
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid ${({ theme }) => theme.colors.text};
  border-width: ${({ isActive }) => isActive ? '0' : '1.5px'};
  border-radius: 5px;
  padding: 16px;
  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.attentioon_light};
  `};
  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
  `};
`;

export const Title = styled.Text<Props>`
  font-size: ${RFValue(14)}px;
  color: ${({ theme, isActive }) => isActive ? theme.colors.title : theme.colors.text};
`;

export const Icon = styled(Feather)<IconProps>`   
  font-size: ${RFValue(14)}px;
  margin-right: 12px;

  ${(props) => props.type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `}

  ${(props) => props.type === 'down' && css`
    color: ${({ theme }) => theme.colors.attentioon};
  `}

`;