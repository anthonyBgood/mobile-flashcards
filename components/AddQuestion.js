import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Button } from 'react-native'


class AddQuestion extends Component {
  static navigationOptions = {
    title: 'Add new Card',
  };
  state = {
    questionText: '' , 
    answerText: '' ,
  }


  render(){
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text>
          Add a card 
        </Text>

        <TextInput 
          placeholder='question'
          style={{minHeight: 40, 
                  width: 350, 
                  borderColor: 'black', 
                  borderWidth: 1, 
                  color:'black',
                  padding: 10 ,
                  backgroundColor: '#48a90a' ,
                  fontSize: 20 ,
                  marginTop:10,                  
                }}
          placeholderTextColor = 'gray'
          multiline = {true}
          onChangeText={(questionText) => this.setState({questionText})}
        />

        <TextInput 
          placeholder='answer'
          style={{minHeight: 40, 
                  width: 350, 
                  borderColor: 'black', 
                  borderWidth: 1, 
                  color:'black',
                  padding: 10 ,
                  backgroundColor: '#48a90a' ,
                  fontSize: 20 ,
                  marginTop:10, 
                }}
          multiline = {true}           
          placeholderTextColor = 'gray'
          onChangeText={(answerText) => this.setState({answerText})}
        />

        {
          !(this.state.answerText.length === 0) && !(this.state.questionText.length === 0) 
          && 
          <View style={{marginTop: 20}} >
            <Button 
              title="SUBMIT"
              
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        }

      </KeyboardAvoidingView>
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