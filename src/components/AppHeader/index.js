import React from 'react'
import {
  Container,
  HeaderArea,
  ButtonMenu,
  Title,
} from './styles'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../styles/colors'
import {useNavigation} from '@react-navigation/native'


export default function AppHeader({title}) {
  const navigation = useNavigation()

  return(
    <Container>

      <HeaderArea>

        <ButtonMenu onPress = {() => navigation.toggleDrawer()} >
          <Icon name = 'menu' color = {colors.white} size = {30} />
        </ButtonMenu>
        
          <Title>{title}</Title>

      </HeaderArea>

    </Container>
  )
}