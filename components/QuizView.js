import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


class QuizView extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>
          QuizView
        </Text>
      </View>
    )
  }
}

export default QuizView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5dc9d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});