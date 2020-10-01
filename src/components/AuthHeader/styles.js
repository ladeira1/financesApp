import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const HeaderArea = styled.View`
  background-color: ${colors.green};
  border-bottom-right-radius: 80px;
  height: 120px;  
  justify-content: flex-end;
`;
export const Text = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: ${colors.white};
  padding-left: 23px;
  padding-bottom: 20px;
`;