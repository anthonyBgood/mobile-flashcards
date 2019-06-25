import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


class DeckView extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>
          DeckView
        </Text>
        <Button
          style={{margin:'1em'}}
          title="start quiz"
          onPress={() => this.props.navigation.navigate('QuizView')}
        />
        <Text></Text>
        <Button 
          style={{margin:'1em'}}
          title="add question"
          onPress={() => this.props.navigation.navigate('AddQuestion')}
        />
      </View>
    )
  }
}

export default DeckView


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6cba3a',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
