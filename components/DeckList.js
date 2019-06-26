
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { connect } from 'react-redux'

import { startDeck } from '../utils/api'
import { receiveDecks } from '../actions'


class DeckList extends Component {
  static navigationOptions = {
    title: 'flash card decks',
  };

  state = {
    ready: false
  }

  componentDidMount () {

    const { dispatch } = this.props
    const localDecks = startDeck()
    dispatch(receiveDecks(localDecks))
    this.setState(()=> ({ready: true}))

  }


  render(){
    return (
    <View style={styles.container}>
      <Text>
        DeckList
      </Text>
      <Button
        style={{margin:10}}
        title="view this Deck"
        onPress={() => this.props.navigation.navigate('DeckView')}
      />
      <Button
        title="add new deck"
        onPress={() => this.props.navigation.navigate('AddDeck')}
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

function mapStateToProps (decks){

  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
