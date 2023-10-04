import styled from "styled-components/native";
import { Link } from "react-router-native";
export const Phone = styled.View`
  background-color: #353745;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
export const PhoneContainer = styled.View`
 background-color: #353745;
  height: 844px;
  position: relative;
  width: 390px;
`;
export const Overlap = styled.View`
  height: 279px;
  left: 47px;
  position: absolute;
  top: 181px;
  width: 296px;
`;
export const FlexContainer = styled.View`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 144px;
  left: 0;
  position: absolute;
  top: 0;
  width: 296px;
`;
export const TextConfirmation = styled.Text`
  align-self: stretch;
  color: #bfd9d7;
  font-family: "Montserrat-Bold";
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  text-transform: uppercase;
`;
export const TextEmail = styled.Text`
  align-self: stretch;
  color: #bfd9d7;
  font-family: "Montserrat-Bold";
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  text-transform: uppercase;
`;
export const ImageEnvoye = styled.Image`
  height: 164px;
  left: 75px;
  object-fit: cover;
  position: absolute;
  top: 115px;
  width: 164px;
`;
export const Textpara = styled.Text`
  color: #bfd9d7;
  font-family: "Montserrat-Regular";
  font-size: 14px;
  font-weight: 400;
  left: 38px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 527px;
  width: 291px;
`;
export const Textpara2 = styled.Text`
  color: #bfd9d7;
  font-family: "Montserrat-Regular";
  font-size: 14px;
  font-weight: 400;
  left: 38px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 682px;
  width: 291px;
  text-align: center;
`;
export const BoutonContinuer = styled.TouchableOpacity`
  height: 56px;
  left: 30px;
  position: absolute;
  top: 599px;
  width: 333px;
`;
export const OverlapGroup = styled.View`
  background-color: #000000;
  border-radius: 15px;
  height: 56px;
  position: relative;
  width: 331px;
`;
export const TextLabel = styled.Text`
  color: #bfd9d7;
  font-family: "Montserrat-Bold";
  font-size: 18px;
  font-weight: 700;
  left: 65px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 18px;
  width: 227px;
`;
export const ImageArroba = styled.Image`
  height: 28px;
  left: 24px;
  object-fit: cover;
  position: absolute;
  top: 14px;
  width: 28px;
`;

export const Inscrip = styled(Link)`

    flex-direction: row;

    flex: 1;

  `;