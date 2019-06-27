export const RECEIVE_DECKS ='RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'


export function receiveDecks(decks){

  return{
    type: RECEIVE_DECKS ,
    decks ,
  }
}

export function addDeck(deckName){
  return{
    type: ADD_DECK ,
    deckName ,
  }
}

export function removeDeck(deckId){
  return{
    type: REMOVE_DECK ,
    deckId ,
  }
}

export function addCard(deckId, questionText, answerText){
  return{
    type: ADD_CARD ,
    deckId , 
    questionText , 
    answerText ,
  }
}