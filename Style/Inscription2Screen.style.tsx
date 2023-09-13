import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "./Theme.Style";
import { Link } from "react-router-native";

export const ScreenContainer = styled.View`
  background-color: ${theme.colors.backgroundblue};
  flex: 1;
`;

export const CentredContainer = styled.View`
  justify-content: center;
  flex: 1;
  gap: 8%;
`;
export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.sizes.xl};
  margintop: 20%;
`;

export const WhiteButton = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  padding: ${theme.sizes.m} ${theme.sizes.l};
  width: 331px;
  border-radius: 20;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: ${theme.sizes.l};
  border-radius: 15px;
  border: 1px;
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
export const TitleText = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 20px;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  
`;
export const TextInputContainer = styled.View`
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.grisNoir};
  border-radius: 5px;
  margin: 0px ${theme.sizes.xxl};
  margin-top: 40px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: ${theme.sizes.m};
  color: ${theme.colors.softWhite};
  font-size: ${theme.sizes.l};
  margin-bottom: 20px;
  align-items: center;
  width:300px
  height: 51px
  top: 326px
  left: 33px
  border-radius: 50px
  border: 1px #BFD9D7;


  
`;
export const TextInformation = styled.Text`
  color: ${theme.colors.softWhite};
  margin: 0px ${theme.sizes.xxl};
  font-size: ${theme.sizes.s};
  width: 80%;
  textAlign: center;

`;
