import styled from "styled-components/native";

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
export const FlexContainer = styled.View`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 144px;
  left: 47px;
  position: absolute;
  top: 181px;
  width: 296px;
`;
export const TextTitle = styled.Text`
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
export const OverlapGroup = styled.View`
  height: 130px;
  left: 131px;
  position: absolute;
  top: 326px;
  width: 130px;
`;
export const ImagePoucebleu = styled.Image`
  height: 130px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 130px;
`;
export const TextCPF = styled.Text`
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
