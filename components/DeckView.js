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
    return (
      <View style={styles.container}>
        <Text>
          DeckView
        </Text>
        <Button

          title="start quiz"
          onPress={() => this.props.navigation.navigate('QuizView')}
        />
        <Button 

          title="add question"
          onPress={() => this.props.navigation.navigate('AddQuestion')}
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


function mapStateToProps(decks, {navigation}){

  const { deckId } = navigation.state.params

  return{
    deckId ,
    deck: decks[deckId] ,
  }
}

export default connect(mapStateToProps)(DeckView)