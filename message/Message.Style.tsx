import styled from "styled-components/native";
import { theme } from "../Style/Theme.Style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  justify-content: flex-start;
  width: 100%;
  height: 100%
`;

export const CentredContainer = styled.View`
  flex: 1;
`;
export const NavbarContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%,
  align-items: end; 
`;
export const LogoContainer = styled.TouchableOpacity`
  flex: 1;
  align-item: center;
  border: 1px;
  height: 20%
`;
export const IconNav = styled(FontAwesomeIcon)`
  font-size: ${theme.iconSizes.xl};
  margin: auto
`;

export const TextNav = styled.Text`
  font-size: ${theme.sizes.l};
  margin:auto
`;
export const TitleText = styled.Text`
  color: ${theme.colors.grisNoir};
  text-align: center;
  margin-bottom: 10px;
  margin-top: 50px;
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
  line-height: 39px;
`;
export const TextInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  margin: 0px ${theme.sizes.xxl};
  margin: auto;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: ${theme.sizes.m};
  color: ${theme.colors.grisNoir};
  font-size: ${theme.sizes.l};
  margin-bottom: 20px;
  align-items: center;
  width:300px
  height: 51px
  top: 326px
  left: 33px
  border-radius: 50px
  border: 1px ${theme.colors.grisNoir};  
`;
export const AjoutMessage = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: ${theme.sizes.l};
  
`;
export const LabelMessage = styled.Text`
  color: ${theme.colors.grisNoir};
  font-family: ${theme.fonts.inter.semiBold};
  font-size: ${theme.sizes.xl};
  padding-right: ${theme.sizes.m};
  flex: 1;
  margin-right:25
`;
export const IconPlus = styled(FontAwesomeIcon)`
  color: ${theme.colors.grisNoir};
  font-size: ${theme.iconSizes.xl};
  padding: ${theme.sizes.s} ${theme.sizes.xxl};
  align-self: flex-start;
`;
export const MessageContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.sizes.xxl};
`;
export const IconWhiteButton = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  font-size: ${theme.iconSizes.xl};
  padding: ${theme.sizes.s} ${theme.sizes.m};
  align-self: flex-start;
`;
