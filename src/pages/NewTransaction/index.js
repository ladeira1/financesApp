import React, {useState, useContext} from 'react'
import {
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert,
  Switch,
} from 'react-native'
import {
  Container,
  RegistrationArea,
  TextInputArea,
  Input,
  SwitchArea,
  SwitchText,
  ButtonRow,
  ButtonArea,
  ButtonText,
} from './styles'
import AppHeader from '../../components/AppHeader'
import {useNavigation} from '@react-navigation/native'
import {AuthContext} from '../../contexts/auth'
import colors from '../../styles/colors'

export default function NewTransaction() {
  const navigation = useNavigation()
  const [header, setHeader] = useState(true)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState(true)
  const [value, setValue] = useState('')

  const {addTransaction} = useContext(AuthContext)

  function handleAdd() {
    Keyboard.dismiss()
    if(title === '') {
      alert("You need to write a title to your transaction")
      return
    }
    else if(value === '0') {
      alert("Your transaction value must be higher than zero.")
      return
    }

    Alert.alert(
      'Confirmation',
      `${type? 'Income' : 'Expense'}, Value: ${parseFloat(value)}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            addTransaction(title, description, type, value)
            setTitle('')
            setDescription('')
            setValue('')
            navigation.navigate('My Transactions')
          }
        }
      ]
    )

  }

  function closeHeader() {
    setHeader(false)
  }

  function showHeader() {
    setHeader(true)
  }

  return (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()} >
      <Container style = {{backgroundColor: '#181817'}} >
      <AppHeader title = 'Register transaction' />
        <RegistrationArea>

          <TextInputArea>
            <Input placeholder = 'Title' value = {title}
            onChangeText = {(text) => setTitle(text)}  />
          </TextInputArea>

          <TextInputArea>
            <Input placeholder = 'Description' value = {description}
            onChangeText = {(text) => setDescription(text)} />
          </TextInputArea>

          <TextInputArea>
            <Input placeholder = 'Value' value = {value} keyboardType = 'numeric'
            onChangeText = {(text) => setValue(text)}  />
          </TextInputArea>

          <SwitchArea>
            <Switch  value = {type} onValueChange = {() => setType(!type)}
            trackColor = {{false: colors.expense, true: colors.income}}
            thumbColor = {type? colors.green : colors.red} />
            <SwitchText>{type? 'Gain' : 'Expense'}</SwitchText>
          </SwitchArea>

          <ButtonRow>
            <ButtonArea>
              <TouchableOpacity onPress = {() => navigation.navigate('My Transactions')} >
                <ButtonText>Cancel</ButtonText>
              </TouchableOpacity>
            </ButtonArea>

            <ButtonArea>
              <TouchableOpacity onPress = {handleAdd} >
                <ButtonText>Add</ButtonText>
              </TouchableOpacity>
            </ButtonArea>
          </ButtonRow>

        </RegistrationArea>
        
      </Container>
    </TouchableWithoutFeedback>
  )
}