import React from 'react'
import {
  HeaderArea,
  Text,
} from './styles'

export default function AuthHeader({text}) {
  return(
    <HeaderArea>
        <Text>{text}</Text>
    </HeaderArea>
  )
}