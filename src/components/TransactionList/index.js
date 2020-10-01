import React from 'react'
import {
  Container,
  TitleArea,
  Title,
  DateArea,
  DateText,
  DescriptionArea,
  DescriptionText,
  ValueArea,
  ValueText,
} from './styles'
import { TouchableWithoutFeedback } from 'react-native'

export default function TransactionList({ data, deleteItem }) {
  return (
    <TouchableWithoutFeedback onLongPress = {() => deleteItem(data)} >
      <Container>

        <TitleArea>
          <Title>{data.title}</Title>

          <ValueArea>
            <ValueText type = {data.type}>
              {data.type? '':'-'}${data.value}
            </ValueText>
          </ValueArea>

        </TitleArea>
        
          <DescriptionArea>
            <DescriptionText>{data.description}</DescriptionText>
          </DescriptionArea>

        <DateArea>
          <DateText>{data.date}</DateText>
        </DateArea>
        

      </Container>
    </TouchableWithoutFeedback>
  )
}