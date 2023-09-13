import styled from "styled-components/native";
import { theme } from "./Theme.Style";

export const ScreenContainer = styled.View`
  background-color: ${theme.colors.backgroundblue};
  flex: 2;
`;

export const CentredContainer = styled.View`
  justify-content: center;
  flex: 2;
  
`;
export const LogoContainer = styled.View`
  align-items: center;
  padding-bottom: 30;
`;
export const LogoImage = styled.Image`
width: 130px
height: 130px


`;
export const LogoText = styled.Text`
  text-align: "center";
  font-family: ${theme.fonts.inter.semiBold};
  padding: ${theme.sizes.m};
  color: ${theme.colors.white};
  font-size: ${theme.sizes.l};
`;
export const TitleText = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 20px;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
`;