import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
  static navigationOptions = ({navigation}) => {
    const { deckId } = navigation.state.params
    return {
      title: `Deck: ${deckId}`,
    }
  }

  render(){

    const { deckId } = this.props
    return (
      <View style={styles.container}>
        <Text>
          DeckView
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
          onPress={() => this.props.navigation.navigate('Home')}
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
  }
}

export default connect(mapStateToProps)(DeckView)