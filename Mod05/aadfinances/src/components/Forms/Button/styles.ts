import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
// Use theme with ${({ theme }) => theme.colors.shape};

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  border-radius: 5px;
  align-items: center;
  padding: 18px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;