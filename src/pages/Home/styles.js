import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const Body = styled.View`
  flex: 1;
`;
export const ValueArea = styled.View`
  margin-left: 15px;
  flex: 2;
`;
export const Name = styled.Text`
  font-size: 20px;
  color: ${colors.outsideText};
`;
export const Value = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.status >= 0? colors.white : colors.expense};
  margin-top: 3px;
`;
export const LatestTransactionsArea = styled.View`
  flex: 1;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.white};
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  padding-right: 10px;
`;
export const LatestTransactions = styled.Text`
  margin-left: 32px;
  font-size: 17px;
  font-weight: bold;
  color: ${colors.outsideText};
`;
export const ListArea = styled.View`
  flex: 12;
  padding-top: 5px;
`;
