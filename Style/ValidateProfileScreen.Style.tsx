import styled from "styled-components/native";
import { theme } from "./Theme.Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.backgroundblue};
  justify-content: flex-start;
`;

export const CentredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: ${theme.sizes.xxl};
  font-family: ${theme.fonts.inter.bold};
  color: ${theme.colors.white};
  text-align: center;
  margin-Bottom: 20px;
`;

export const NavButton = styled.TouchableOpacity`
  background-color: ${theme.colors.softWhite};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  border-radius: 50px;
  margin: ${theme.sizes.xl};
`;
export const ArrowButton = styled(FontAwesomeIcon)`
  color: ${theme.colors.backgroundblue};
  size: ${theme.iconSizes.m};
`;

export const NavBtnContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 30;
  width: 100%;
  justify-content: space-between;
`;