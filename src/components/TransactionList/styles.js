import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.View`
  background-color: #4d4d51;
  border-radius: 5px;
  height: 100px;
  margin: 5px 5px;
`;
export const TitleArea = styled.View`
  padding-right: 13px;
  padding-top: 6px;
  flex-direction: row;

`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 4;
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  padding-left: 13px;
`;
export const ValueArea = styled.View`
  flex: 2;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 5px;
`;
export const ValueText = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${(props) => props.type? colors.income:colors.expense};
  font-size: 22px;
`;
export const DescriptionArea = styled.View`
  flex: 4;
  padding-left: 10px;
  padding-right: 10px;
`;
export const DescriptionText = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${colors.outsideText};
`;
export const DateArea = styled.View`
  align-items: flex-end;
  padding-right: 10px;
  padding-bottom: 5px;
`;
export const DateText = styled.Text`
  color: ${colors.date};
  font-size: 12px;
`;
