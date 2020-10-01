import React from 'react'
import {StatusBar, LogBox} from 'react-native'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import AuthProvider from './src/contexts/auth'
import Routes from './src/routes'
import colors from './src/styles/colors'

LogBox.ignoreAllLogs()

export default function App() {
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor = {colors.statusBar} barStyle = 'light-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}