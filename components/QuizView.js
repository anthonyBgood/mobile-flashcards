import React, { Component, Fragment } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';

import { clearLocalNotification, setLocalNotification} from '../utils/notificationsHelper'


class QuizView extends Component {

    static navigationOptions = ({navigation}) => {
      const { deckId } = navigation.state.params
      return {
        title: `Quiz:  ${deckId}`,
      }
    }

    state = {
      currentQuestion: 0 ,
      revealAnswer: false ,
      totalRight: 0 ,
    }

    recordAnswer(answeredCorrect){
      
      answeredCorrect && this.setState({ totalRight: this.state.totalRight + 1})
      this.setState({ currentQuestion: this.state.currentQuestion + 1})
      this.setState({revealAnswer: false})      
    }


  render(){

    const { deckId, questions } = this.props

    const {
      currentQuestion,
      revealAnswer,
      totalRight,
    } = this.state

    const competeQuizAndNotifyForTomorrow = () =>{

      // Clear local notification
      clearLocalNotification()
          .then(setLocalNotification)

      // navigate back
      this.props.navigation.navigate('DeckView',{ deckId: deckId })

    }

    let displayContent 
   

    debugger
    // no questions
    if (questions.length == 0){
      displayContent = (
        <Fragment>
        <View style={styles.content}>
          <Text  style={styles.questionBox}>
            there are no questions
          </Text>
        </View>
        <View style={styles.contentButtons}>
          <Button
            title="exit"
            onPress={() => this.props.navigation.navigate(
              'DeckView',
              { deckId: deckId }
            )}
          />
        </View>
        </Fragment>
      ) 
    }  else

    // all questions answered
    if(currentQuestion === questions.length){

      displayContent = (
        <Fragment>
        <View style={styles.content}>
          <View style={styles.questionBox}>
            <Text style={{fontSize: 20}}>
              Cards Done!
            </Text>
            <Text style={{fontSize: 20}}>
              You got {totalRight} of {questions.length} right.
            </Text>
          </View>
        </View>

        <View style={styles.contentButtons}>
          <Button
                title="exit"
                onPress={() => competeQuizAndNotifyForTomorrow()}
              />

          <Button
                title="restart Quiz"
                onPress={() => this.props.navigation.replace('QuizView',{ deckId })}

              />
        </View>
        </Fragment>
      )

    } else

    // show question or answer?
    {
      !revealAnswer
      ? displayContent = (
        <Fragment>
          <View style={styles.content}>
            <Text style={styles.questionBox}>
              {questions[currentQuestion].question}
            </Text>
          </View>
          <View style={styles.contentButtons}>
              <Button
                title="reveal Answer"
                onPress={() => this.setState({revealAnswer: true ,}) }
              />
          </View>
        </Fragment>
        )
      :displayContent = (
        <Fragment>
          <View style={styles.content}>
            <Text style={styles.questionBox}>
              {questions[currentQuestion].answer}
            </Text>
          </View>
          <View style={styles.contentButtons}>
            <Button
              title="Correct"
              style={{backgroundColor: 'green'}}
              onPress={() => this.recordAnswer(true)}
            />
            <Button
              title="Incorrect"
              style={{backgroundColor: 'red'}}
              onPress={() => this.recordAnswer(false)}
            />
          </View>      
        </Fragment>
      )
    }


    return (
      
      <View style={styles.container}>
        <View style={styles.counter}>
          <Text>
            {currentQuestion}/{questions.length}
          </Text>

        </View>

        {displayContent}

      </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91cb6c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    flex: 1,
/*     backgroundColor: '#0a48a9', */
    alignItems: 'stretch',
  },
  content: {
    flex: 4,    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48a90a',
    borderRadius: 10,
  },
  contentButtons: {
    flex: 2,
/*     backgroundColor: '#a90a48', */
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 300 , 
  },
  questionBox: {
    
    fontSize: 20, 
    width: 300, 
    /* backgroundColor: '#48a90a',
    borderRadius: 10,*/
    padding: 10, 
    textAlign:'center',

  },
});


function mapStateToProps(decks, {navigation}){

  const { deckId } = navigation.state.params

  return{
    deckId ,
    questions: decks[deckId].questions === undefined || decks[deckId].questions == 0 ? [] : decks[deckId].questions
  }
}

export default connect(mapStateToProps)(QuizView)