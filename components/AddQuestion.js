import React, { Component } from 'react'
import { StyleSheet, View, Text, 
        TextInput, KeyboardAvoidingView, Button } from 'react-native'

import { connect } from 'react-redux'
import { addCard } from '../actions'
import { localAddCardToDeck } from '../utils/api'

class AddQuestion extends Component {

  static navigationOptions = ({navigation}) => {
    const { deckId } = navigation.state.params
    return {
      title: `Add card to ${deckId} deck`,
    }
  }


  state = {
    questionText: '' , 
    answerText: '' ,
  }

  submitCard = () =>{

    const { dispatch } = this.props
    const { questionText, answerText } = this.state
    const { deckId } = this.props.navigation.state.params

    localAddCardToDeck(deckId, questionText, answerText)
      .then(() =>{
        dispatch(addCard(deckId, questionText, answerText))
        this.navigateBack()
      })

  }

  navigateBack = () => {

    const { deckId } = this.props.navigation.state.params
    this.props.navigation.navigate('DeckView',
    { deckId: deckId })
  }

  handleChange = (label, value) => {
    this.setState({
      [label]: value
    })
  }


  render(){

    const { deckId } = this.props.navigation.state.params





    return (
      

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.contentView}>
          <Text>
            Add your question/answer pair
          </Text>

          <TextInput 
            placeholder='question'
            style={styles.inputStyles}
            placeholderTextColor = 'gray'
            multiline = {true}
            onChangeText={(questionText) => this.handleChange('questionText',questionText)}
          />

          <TextInput 
            placeholder='answer'
            style={styles.inputStyles}
            multiline = {true}           
            placeholderTextColor = 'gray'
            onChangeText={(answerText) => this.handleChange('answerText',answerText)}
          />
        </View>

        {/* buttons */}
        <View style={styles.contentButtons}>
          <Button
            title="CANCEL"
            onPress={() => this.navigateBack() }
          />

          {
            !(this.state.answerText.length === 0) && !(this.state.questionText.length === 0) 
            && 
              <Button 
                title="SUBMIT"
                
                onPress={() => this.submitCard()}
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

  inputStyles: {
    minHeight: 40, 
    width: 350, 
    borderColor: 'black', 
    borderWidth: 1, 
    color:'black',
    padding: 10 ,
    /* backgroundColor: '#48a90a' , */
    fontSize: 20 ,
    marginTop:10,                  
  }
});


export default  connect()(AddQuestion)

