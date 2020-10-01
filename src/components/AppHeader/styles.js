import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 30px 0 15px 15px;
  width: 100%;
  height: 50px;
`;
export const HeaderArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const ButtonMenu = styled.TouchableWithoutFeedback`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 24px;
  text-align: center;
  color: ${colors.white};
  padding-right: 45px;
`;