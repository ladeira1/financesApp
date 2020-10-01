import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;
export const RegistrationArea = styled.View`
  flex: 1;
  justify-content: flex-start;
  margin-top: 30px;
`;
export const TextInputArea = styled.View`
  background-color: ${colors.outsideText};
  margin: 10px 16px 17px 16px;
  height: 55px;
  border-radius: 10px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.background
})`
  font-size: 17px;
  margin-left: 5px;
`;
export const SwitchArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`;
export const SwitchText = styled.Text`
  color: ${colors.outsideText};
  font-size: 16px;
`;
export const ButtonRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`;
export const ButtonArea = styled.View`
  height: 55px;
  width: 160px;
  background-color: ${colors.outsideText};
  justify-content: center;
  border-radius: 10px;
`;
export const ButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${colors.background};
`;