import {RECEIVE_DECKS, ADD_DECK } from '../actions/index'
import { makeDeck } from '../utils/actionHelpers'



function decks (state =[], action){

  switch(action.type){
  case RECEIVE_DECKS :
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

  default :
    return state

  }
}

export default decks