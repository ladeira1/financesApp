import React, {useState, useContext, useEffect} from 'react'
import {
  FlatList, 
  Alert,
  ActivityIndicator,
} from 'react-native'
import {
  Container,
  Body,
  ValueArea,
  Name,
  Value,
  LatestTransactionsArea,
  LatestTransactions,
  ListArea,
} from './styles'
import AppHeader from '../../components/AppHeader'
import TransactionList from '../../components/TransactionList'
import {AuthContext} from '../../contexts/auth'
import colors from '../../styles/colors'


export default function Home() {
  const {user, loadTransactionList, removeTransaction, loading} = useContext(AuthContext)
  const [transactions, setTransactions] = useState([]) 
  const [balance, setBalance] = useState(0)

  function handleDeletion(data) {
    Alert.alert(
      'Confirmation',
      `Are you sure you want to remove \n${data.title} - Value: ${data.value}`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Confirm',
          onPress: () => {
            removeTransaction(data, balance)
          }
        }
      ]
    )
  }

  useEffect(() => {
    loadTransactionList(setBalance, setTransactions)
  }, [])

  return (
    <Container>
      <AppHeader title = 'My transactions'/>

      <Body>

        <ValueArea>
          <Name>{user && user.name}</Name>
          <Value status = {balance} >$ {balance.toFixed(2)}</Value>
        </ValueArea>

        <LatestTransactionsArea>
          <LatestTransactions>Latest Transactions</LatestTransactions>
        </LatestTransactionsArea>

        <ListArea>
          { loading? (
            <ActivityIndicator size = {20} color = {colors.white} style = {{flex: 1}} />
          ) : (
            <FlatList showsVerticalScrollIndicator = {false} data = {transactions}
          keyExtractor = {item => item.key}
          renderItem = {({item}) => (
            <TransactionList data = {item} deleteItem = {handleDeletion} />
          )} />
          ) }
        </ListArea>

      </Body>
    </Container>
  )
}