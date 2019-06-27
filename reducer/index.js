import {RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK } from '../actions/index'
import { makeDeck } from '../utils/actionHelpers'





function decks (state =[], action){

  switch(action.type){
    case RECEIVE_DECKS :

        debugger

      return{
        ...state ,
        ... action.decks,
      }

    case ADD_DECK :

      newDeck = makeDeck(action.deckName)
      return{
        ...state , 
        ... newDeck ,
      }
    case REMOVE_DECK :

      const newState = {...state}
      delete newState[action.deckId]

      //console.log('TEST newState: ', newState)

      return{
        ...newState
      }

    case ADD_CARD : 

      /* 
        build the question object
        get copy of current questions 
        add the question object to copy 
        copy deck object
        add new questions array to new deck
        merge back into state

      */

      cardObj = {}
      cardObj.question = action.questionText 
      cardObj.answer =  action.answerText 

      newQuestions = state[action.deckId].questions.slice()
      newQuestions.splice(newQuestions.length, 0, cardObj)

      newDeck = state[action.deckId]
      newDeck.questions = newQuestions

      newKey = {}
      newKey[action.deckId] =  newDeck
      


      return{
        ...state ,
        ...newKey ,
      }


    default :
      return state

  }
}

export default decks