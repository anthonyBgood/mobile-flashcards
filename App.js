import React, {Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {  createStackNavigator, 
          createAppContainer } from 'react-navigation'

import { createStore } from 'redux'
import  { Provider } from 'react-redux'
import reducer from './reducer'
import middleware from './middleware'

import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import AddQuestion from './components/AddQuestion'
import AddDeck from './components/AddDeck'
import { setLocalNotification } from './utils/notificationsHelper'

const MainNavigator = createStackNavigator(
  {
    Home: { screen: DeckList },
    DeckView: { screen: DeckView },
    QuizView: {screen: QuizView},
    AddQuestion: {screen: AddQuestion},
    AddDeck: {screen: AddDeck}
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: '#98a90a',
      },
      headerTintColor:'#a90a48',
      headerTitleStyle:{
        fontWeight:'bold',
      },
    }
  }
)

const MainAppContainer = createAppContainer(MainNavigator)  

export default class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render(){
    return (
      
      <Provider  store = {createStore(reducer)}>
        <MainAppContainer/>
      </Provider>  
    
    )
  }
}


