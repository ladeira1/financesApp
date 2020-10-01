import React, {useState, useContext} from 'react'
import {
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import {
  Container,
  LoginInputArea,
  TextInputArea,
  Input,
  ForgotArea,
  ForgotText,
  LoginButtonArea,
  LoginButton,
  LoginButtonText,
  SignUpArea,
  SignUpText,
  SignUpButtonText,
  Body
} from './styles'
import AuthHeader from '../../components/AuthHeader'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../styles/colors'
import {useNavigation} from '@react-navigation/native'
import {AuthContext} from '../../contexts/auth'


export default function SignIn() {
  const navigation = useNavigation()

  const {signIn, loading} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleForgottenPassword() {
    alert('you forgot')
  }

  function handleLogin() {
    signIn(email, password)
    setPassword(null)
    Keyboard.dismiss()
  }

  
  return(
    <Container>
      <AuthHeader text = 'Login' />
      <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()} >
        <Body>
          <LoginInputArea>

            <TextInputArea> 
              <Icon name = 'mail' color = {colors.white} size = {28} 
              style = {{paddingLeft: 10}} />
              <Input placeholder = 'Email' placeholderTextColor = {colors.inputText}
              value = {email} onChangeText = {(text) => setEmail(text)}
              autoCaptalize = 'none' autoCorrect = {false} />
            </TextInputArea>

            <TextInputArea> 
              <Icon name = 'lock' color = {colors.white} size = {28} 
              style = {{paddingLeft: 10}} />
              <Input placeholder = 'Password' placeholderTextColor = {colors.inputText}
              value = {password} onChangeText = {(text) => setPassword(text)}
              secureTextEntry = {true} autoCaptalize = 'none' autoCorrect = {false} />
            </TextInputArea>
      
          </LoginInputArea>

          <LoginButtonArea>

              <LoginButton onPress = {handleLogin} >
                { loading? (
                  <ActivityIndicator size = {20} color = {colors.white} />
                ) : (
                  <LoginButtonText>LOGIN</LoginButtonText>
                ) }
              </LoginButton>

              <SignUpArea>
                <SignUpText>Don't have an account? </SignUpText>

                <TouchableOpacity onPress = {() => navigation.navigate('SignUp')} >
                  <SignUpButtonText>Sign Up</SignUpButtonText>
                </TouchableOpacity>

              </SignUpArea>

          </LoginButtonArea>
          </Body>
      </TouchableWithoutFeedback>
    </Container>
  )
}