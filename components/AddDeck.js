import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


class AddDeck extends Component {

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
    backgroundColor: '#daedce',
    alignItems: 'center',
    justifyContent: 'center',
  },
});