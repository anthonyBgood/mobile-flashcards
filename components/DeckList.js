
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { AppLoading } from 'expo'

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

    const { ready } = this.state
    const { decks } = this.props

    if (ready === false){
      return <AppLoading />
    }
    return (
    <View style={styles.container}>
      <Text>
        DeckList
      </Text>

      {Object.keys(decks).map(key =>{
        return (



          <TouchableOpacity
            key={key}
            style={{ width: 200, }}
            onPress={() => this.props.navigation.navigate(
              'DeckView',
              { deckId: key }
            )}
          >
          <View  style={{ backgroundColor: '#48A90A', padding: 20,}}>
            <Text style={{fontSize: 20}}>
              {decks[key].title}
            </Text>
            <Text style={{fontSize: 16, color: 'gray'}}>
              Questions: {decks[key].questions.length}
            </Text>
          </View>
          </TouchableOpacity>
          

        )
      })}

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
