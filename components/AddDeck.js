import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


class AddDeck extends Component {
  static navigationOptions = {
    title: 'New Deck',
  };
  render(){
    return (
      <View style={styles.container}>
        <Text>
          AddDeck
        </Text>
      </View>
    )
  }
}

export default AddDeck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91cb6c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});