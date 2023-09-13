import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "./Theme.Style";
import { Link } from "react-router-native";

export const ScreenContainer = styled.View`
  background-color: ${theme.colors.backgroundblue};
  flex: 2;
`;

export const CentredContainer = styled.View`
  justify-content: center;
  flex: 2;
  gap: 60;
`;
export const LogoContainer = styled.View`
  align-items: center;
  padding-bottom: 30;
  gap: 50;
`;
export const LogoImage = styled.Image`
  width: 304;
  height: 220;
`;
export const LogoText = styled.Text`
  text-align: "center";
  font-family: ${theme.fonts.inter.semiBold};
  padding: ${theme.sizes.m};
  color: ${theme.colors.white};
  font-size: ${theme.sizes.l};
`;
export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.sizes.xl};
`;

export const WhiteButton = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 100%;
  border-radius: 20;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: ${theme.sizes.l};
`;
export const MarronButton = styled.TouchableOpacity`
  background-color: ${theme.colors.marron};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 100%;
  border-radius: 20;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: ${theme.sizes.l};
`;
export const LabelButtonWhite = styled.Text`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
  text-align: center;
  padding-right: ${theme.sizes.m};
  flex: 1;
`;
export const LabelButtonMarron = styled.Text`
  color: ${theme.colors.marron};
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
  text-align: center;
  padding-right: ${theme.sizes.m};
  flex: 1;
`;


