import styled from "styled-components/native";
import { theme } from "./Theme.Style";

export const ScreenContainer = styled.View`
  background-color: ${theme.colors.backgroundblue};
  flex: 2;
`;

export const CentredContainer = styled.View`
  justify-content: center top;
  flex: 2;
  
`;
export const LogoContainer = styled.View`
  position: absolute;
  top: 300px;
  left: 0;
  right: 0;
  align-items: center;
  padding: 20px 0;
`;
export const LogoImage = styled.Image`
width: 130px
height: 130px
resizeMode: contain;
`;
export const LogoText = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.inter.semiBold};
  padding: ${theme.sizes.m};
  color: ${theme.colors.white};
  font-size: ${theme.sizes.l};
`;
export const TitleText = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 20px;
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
`;
export const TitleContainer = styled.View`
margin-top: 150`