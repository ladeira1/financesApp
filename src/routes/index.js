import React, {useContext} from 'react'
import {
  View,
  ActivityIndicator,
} from 'react-native'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { AuthContext } from '../contexts/auth'
import colors from '../styles/colors'


export default function Routes() {
  const {signed, loadingAsyncStorage} = useContext(AuthContext)
  return(
    loadingAsyncStorage? (
      <ActivityIndicator size = {20} color = {colors.black} style = {{flex: 1}} />  
    ) : (
      signed? <AppRoutes /> : <AuthRoutes />  
    ) 
  )
}