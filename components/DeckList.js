import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


class DeckList extends Component {

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
    backgroundColor: '#48a90a',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default DeckList
