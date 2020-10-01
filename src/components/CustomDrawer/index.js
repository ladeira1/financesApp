import React, {useContext} from 'react'
import {Alert} from 'react-native'
import {
  Container,
  HeaderText,
  NameText,
} from './styles'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import colors from '../../styles/colors'
import {AuthContext} from '../../contexts/auth'


export default function CustomDrawer(props) {
  const {user, signOut} = useContext(AuthContext)

  function handleSignOut() {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            signOut()
          }
        }
      ]
    )
  }

  return( 
    <DrawerContentScrollView {...props} >

      <Container>
        <HeaderText>Welcome</HeaderText>
        <NameText>{user && user.name}</NameText>
      </Container>

      <DrawerItemList {...props} />
      <DrawerItem {...props} label = 'Logout' onPress = {handleSignOut}
      inactiveBackgroundColor = {colors.expense} />
      
    </DrawerContentScrollView>
  )
}