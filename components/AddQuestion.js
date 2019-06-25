import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


class AddQuestion extends Component {
  static navigationOptions = {
    title: 'Add Question',
  };
  render(){
    return (
      <View style={styles.container}>
        <Text>
        AddQuestion
        </Text>
      </View>
    )
  }
}

export default AddQuestion


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91cb6c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});