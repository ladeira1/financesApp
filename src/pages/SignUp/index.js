import React, {useState, useContext} from 'react'
import {
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import {
  Container,
  LoginInputArea,
  TextInputArea,
  Input,
  LoginButtonArea,
  LoginButton,
  LoginButtonText,
  SignUpArea,
  SignUpText,
  SignUpButtonText,
  Body
} from '../SignIn/styles'
import AuthHeader from '../../components/AuthHeader'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../styles/colors'
import {useNavigation} from '@react-navigation/native'
import {AuthContext} from '../../contexts/auth'

import * as Animatable from 'react-native-animatable'

export default function SignUp() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const {signUp, loading} = useContext(AuthContext)
  
  function handleRegistration() {
    signUp(name, email, password)
    setPassword(null)
    Keyboard.dismiss()
  }

  return(
    <Container>
      <Animatable.View style = {{flex: 1}}
      animation = 'slideInUp'  duration = {500} useNativeDriver 
      easing = 'ease-out' >


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
                <Icon name = 'user' color = {colors.white} size = {28} 
                style = {{paddingLeft: 10}} />
                <Input placeholder = 'Name' placeholderTextColor = {colors.inputText}
                value = {name} onChangeText = {(text) => setName(text)} />
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

                <LoginButton onPress = {handleRegistration} >
                  { loading? (
                    <ActivityIndicator size = {20} color = {colors.white} />
                  ) : (
                    <LoginButtonText>REGISTER</LoginButtonText>
                  ) }
                </LoginButton>

                <SignUpArea>
                  <SignUpText>Already have an account? </SignUpText>

                  <TouchableOpacity onPress = {() => navigation.navigate('SignIn')} >
                    <SignUpButtonText>Sign In</SignUpButtonText>
                  </TouchableOpacity>

                </SignUpArea>

            </LoginButtonArea>
          </Body>
        </TouchableWithoutFeedback>
      </Animatable.View>
    </Container>
  )
}