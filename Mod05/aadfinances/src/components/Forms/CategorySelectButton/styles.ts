import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

// Use theme with ${({ theme }) => theme.colors.shape};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  border-radius: 5px;
  padding: 16px 18px;
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)`   
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;