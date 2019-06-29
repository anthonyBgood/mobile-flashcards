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


  deleteDeck = () =>{

    const { deckId, dispatch } = this.props

    localRemoveDeck(deckId)
      .then(() =>{

        dispatch(removeDeck(deckId))
        this.props.navigation.dispatch(StackActions.popToTop());
      })
    
  }

  render(){

    const { decks, deckId } = this.props


    //TODO: this is a workaround that deals with re-render of this component after
      // deleteDeck has been called (the deckId isn't valid anymore)
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
      
      <View style={styles.container2}>
        <View  style={{justifyContent: "flex-start", flex: 2}}>
          <Text style={{fontSize: 20, marginTop: 100}}>
            {deckId} 
          </Text>
          <Text style={{fontSize: 16, color: 'gray'}}>
            {`has ${decks[deckId].questions.length} cards`} 
          </Text>
        </View>
        <View style={styles.contentButtons}>
          <Button 
            title="delete deck"
            onPress={() => this.deleteDeck()}
          />
          <Button 
            title="add card"
            onPress={() => this.props.navigation.navigate('AddQuestion', { deckId })}
          />
          <Button
            title="start quiz"
            onPress={() => this.props.navigation.navigate('QuizView',{ deckId })}
          />
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#91cb6c',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentButtons: {
    flex: 1 ,
    /* backgroundColor: '#a90a48', */
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 350 , 
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