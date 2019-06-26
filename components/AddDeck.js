import React, { Component } from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, Button } from 'react-native'


class AddDeck extends Component {
  static navigationOptions = {
    title: 'Add New Deck',
  };

  state = {
    text: '' , 
  }


  render(){
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text>
          Add a new Deck
        </Text>

        <TextInput 
          style={{height: 40, 
                  width: 350, 
                  borderColor: 'black', 
                  borderWidth: 1, 
                  color:'black',
                  padding: 10 ,
                  backgroundColor: '#48a90a' ,
                  fontSize: 20 ,
                }}
          placeholder='name'
          placeholderTextColor = 'gray'
          onChangeText={(text) => this.setState({text})}
        />

        {
          !(this.state.text.length === 0) 
          && 
          <View>
            <Button
              title="SUBMIT"
              onPress={() => this.props.navigation.navigate('Home')}
            />

            <Text style={{marginTop: 50}}>
              {this.state.text}
            </Text>
          </View>
        }

      </KeyboardAvoidingView>
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