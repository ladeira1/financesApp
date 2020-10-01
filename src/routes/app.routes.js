import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import colors from '../styles/colors'
import Home from '../pages/Home'
import NewTransaction from '../pages/NewTransaction'
import CustomDrawer from '../components/CustomDrawer'

const AppDrawer = createDrawerNavigator()

export default function AppRoutes() {
  return(
    <AppDrawer.Navigator 
    drawerContent = {(props) => <CustomDrawer {...props} />}
    drawerStyle = {{
      backgroundColor: colors.background,
    }}
    drawerContentOptions = {{
      labelStyle: {
        fontWeight: 'bold',
      },
      activeTintColor: colors.white,
      activeBackgroundColor: colors.income,
      inactiveTintColor: colors.gray,
      inactiveBackgroundColor: colors.black,
      itemStyle: {
        marginVertical: 5,
      }}} >
      <AppDrawer.Screen name = 'My Transactions' component = {Home} />
      <AppDrawer.Screen name = 'Register new transaction' component = {NewTransaction} />
    </AppDrawer.Navigator>
  )
}