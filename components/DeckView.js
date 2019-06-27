import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux' 

import { removeDeck } from '../actions'
import { StackActions } from 'react-navigation'
import { localRemoveDeck } from '../utils/api'



class DeckView extends Component {
  static navigationOptions = ({navigation}) => {
    const { deckId } = navigation.state.params
    return {
      title: `Deck: ${deckId}`,
    }
  }


  render(){

    const { decks, deckId, dispatch } = this.props

    const deleteDeck = () =>{

      localRemoveDeck(deckId)
        .then(() =>{

          dispatch(removeDeck(deckId))
          this.props.navigation.dispatch(StackActions.popToTop());
        })
      

    }


    //TODO: workaround that deals with re-render of this component 
      // after deleteDeck has been called (the deckId isn't valid anymore)
      // the JSX below is never shown as already routed to Home

    if(decks[deckId] === undefined){
      return (
      <View>
        <Text>No deck</Text>
      </View>
      )
    }


    // normal page render
    return (
      
      <View style={styles.container}>
        <Text>
        
        {`This deck (${deckId}) has ${decks[deckId].questions.length} cards`} 
        </Text>
        <Button

          title="start quiz"
          onPress={() => this.props.navigation.navigate('QuizView',{ deckId })}
        />
        <Button 

          title="add card"
          onPress={() => this.props.navigation.navigate('AddQuestion', { deckId })}
        />
        <Button 

          title="delete deck"
          onPress={() => deleteDeck()}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91cb6c',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});


function mapStateToProps(decks,{navigation}){

  const { deckId } = navigation.state.params

  return{
    deckId ,
    decks ,
  }
}

export default connect(mapStateToProps)(DeckView)