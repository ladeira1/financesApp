import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${colors.background};
`;
export const Body = styled.View`
  flex: 8;
`;
export const LoginInputArea = styled.View`
  justify-content: center;
  flex: 3;
`;
export const TextInputArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin:  24px 18px 0 18px; 
  background-color: ${colors.gray};
  border-radius: 20px;
  
`;
export const Input = styled.TextInput`
  height: 50px;
  padding-left: 15px;
  font-size: 18px;
  color: ${colors.inputText};
`;

export const ForgotArea = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const ForgotText = styled.Text`
  margin-right: 36px;
  font-size: 14px;
  color: ${colors.outsideText};
`;
export const LoginButtonArea = styled.View`
  align-items: center;
  flex: 1;
`;  
export const LoginButton = styled.TouchableOpacity`
  width: 250px;
  height: 53px;
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
export const LoginButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
`;
export const SignUpArea = styled.View`
  flex-direction: row;
`;
export const SignUpText = styled.Text`
  color: ${colors.white};
`;
export const SignUpButtonText = styled.Text`
  color: ${colors.green};
`;