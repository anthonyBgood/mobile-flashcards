import React from 'react';
import {  createStackNavigator, 
  createAppContainer } from 'react-navigation'

import DeckList from '../components/DeckList'
import DeckView from '../components/DeckView'
import QuizView from '../components/QuizView'
import AddQuestion from '../components/AddQuestion'
import AddDeck from '../components/AddDeck'


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

export default createAppContainer(MainNavigator)  