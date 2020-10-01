import AsyncStorage from '@react-native-community/async-storage'
import React, {createContext, useState, useEffect} from 'react'
import firebase from '../services/firebaseConnection'
import {format} from 'date-fns'

export const AuthContext = createContext({})



export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingAsyncStorage, setLoadingAsyncStorage] = useState(false)

  async function signUp(name, email, password) {
    if(password === null) {
      alert('The password is invalid.')
      return
    }

    setLoading(true)
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid
        await firebase.database().ref('users').child(uid).set({
          name: name,
          balance: 0,
        })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: email,
            }

            setUser(data)
            saveLocalUser(data)
            setLoading(false)
          })
      })
      .catch((err) => {
        alert(err)
        setLoading(false)
      })
  }

  async function signIn(email, password) {
    if(password === null) {
      alert('The password is invalid.')
      return
    }

    setLoading(true)
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid
        await firebase.database().ref('users').child(uid).once('value')
          .then((snapshot) => {
            let data = {
              uid: uid,
              name: snapshot.val().name,
              email: value.user.email,
              balance: snapshot.val().balance,
            }

            setUser(data)
            saveLocalUser(data)
            setLoading(false)
          })
      })
      .catch((err) => {
        alert(err)
        setLoading(false)
      })
  }

  async function signOut() {
    await firebase.auth().signOut()
    await AsyncStorage.clear()
      .then(() => {
        setUser(null)
      })
  }
  
  async function addTransaction(title, description, type, value) {
    let uid = user.uid
    let key = await firebase.database().ref('transactions').child(uid).push().key

    await firebase.database().ref('transactions').child(uid).child(key).set({
      title: title,
      description: description,
      type: type,
      value: value,
      date: format(new Date(), 'MM/dd/yyyy')
    })

    let userData = firebase.database().ref('users').child(uid)
    await userData.once('value').then((snapshot) => {
      let balance = parseFloat(snapshot.val().balance)
      let newValue = parseFloat(value)
      type? balance += newValue : balance -= newValue

      userData.child('balance').set(balance)
    })
    .catch((err) => {
      alert(err)
    })
  }

  async function loadTransactionList(setBalance, setTransactions) {
    setLoading(true)
    const uid = user && user.uid

    await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
      setBalance(snapshot.val().balance)
    })
    
    await firebase.database().ref('transactions').child(uid).limitToLast(10)
        .on('value', (snapshot) => {
          setTransactions([])

          snapshot.forEach((item) => {
            let array = {
              key: item.key,
              title: item.val().title,
              description: item.val().description,
              value: item.val().value,
              type: item.val().type,
              date: item.val().date
            }
            setTransactions((oldArray) => [...oldArray].reverse())
            setTransactions((oldArray) => [...oldArray, array].reverse())
          })
          setLoading(false)
        })
  }

  async function removeTransaction(data, balance) {
    const uid = user.uid
    await firebase.database().ref('transactions').child(uid).child(data.key).remove()
      .then(async () => {
        let currentBalance = balance
        let removedValue = parseFloat(data.value)
        data.type?
          currentBalance -= removedValue : currentBalance += removedValue

        await firebase.database().ref('users').child(uid).child('balance')
          .set(currentBalance)
      })
      .catch((err) => {
        alert(err)
      })
  }

  async function saveLocalUser(user) {
    await AsyncStorage.setItem('@localUser', JSON.stringify(user))
  }

  useEffect(() => {
    async function loadLocalStorage() {
      setLoadingAsyncStorage(true)
      let savedUser = await AsyncStorage.getItem('@localUser')

      if(savedUser) {
        setUser(JSON.parse(savedUser))
      }
      setLoadingAsyncStorage(false)
    }

    loadLocalStorage()
  }, [])

  return(
    <AuthContext.Provider value = {{ signed: !!user, user, loading, loadingAsyncStorage,
    signUp, signIn, signOut, 
    addTransaction, loadTransactionList, removeTransaction}} >
      {children}
    </AuthContext.Provider>
  )
}
