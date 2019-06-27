import React, { Component } from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import { addDeck } from '../actions'



class AddDeck extends Component {
  static navigationOptions = {
    title: 'Add New Deck',
  };

  state = {
    text: '' , 
  }



  render(){

    const submitDeck = () =>{
      const { dispatch } = this.props
      const { text } = this.state
      
      dispatch(addDeck(text))
      this.props.navigation.navigate('Home')
    }

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.contentView}>
          <Text>
            Add a name to start a new deck
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
        </View>

        {/* buttons */}
        <View style={styles.contentButtons}>

          <Button
            title="CANCEL"
            onPress={() => this.props.navigation.navigate('Home')}
          />

          {
          !(this.state.text.length === 0) 
          && 
            <Button
              title="SUBMIT"
              onPress={() => submitDeck() }
            />
          }

        </View>

      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91cb6c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentView:{
    flex: 4, 
    justifyContent: 'center'
  },

  contentButtons: {
    flex: 1,
    /* backgroundColor: '#a90a48', */ 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 300 , 
  },
});


export default connect()(AddDeck)