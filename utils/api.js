import { AsyncStorage } from 'react-native'
import dummyData from './dummyData'
import { makeDeck } from './actionHelpers'


const FLASH_CARDS_STORAGE_KEY = 'flashCards:decks'


// use to initial where there is no data at all for testing
export function localInitDeck(){

  return dummyData()
  
}

// use to get any data stored locally
export function localGetDecks(){

  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
      .then((result) => {
        console.log('api localDecks: ', JSON.parse(result)) 
        return (JSON.parse(result))
      })

}

//use to store whole redux decks store to local
export function localSetDecks(decks){
  return AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY,JSON.stringify(decks))
    .then(() => console.log('api localSetDecks complete'))
}


export function localRemoveDecks(){
  return AsyncStorage.removeItem(FLASH_CARDS_STORAGE_KEY)
    .then(() => console.log('api localremoveDecks complete'))
}

export function localAddDeck(text){

  newDeck = makeDeck(text)
  return AsyncStorage.mergeItem(
    FLASH_CARDS_STORAGE_KEY,
    JSON.stringify(newDeck)
    ).then(() => localGetDecks())

}


export function localRemoveDeck(deckId){
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
    .then((results) =>{
      const data = JSON.parse(results)
      data[deckId]=undefined
      delete data[deckId]
      AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY,JSON.stringify(data))
    })
}


export function localAddCardToDeck(deckId, questionText, answerText){
  // TODO:
  //    get deck getItem()
  //    add question
  //    call mergeDeck with the amended deck
  newCard = {}
  newCard.question = questionText
  newCard.answer= answerText


  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
  .then((results) =>{
    const data = JSON.parse(results)

    const newQuestions = data[deckId].questions.slice()
    newQuestions.splice(newQuestions.length, 0, newCard)
    data[deckId].questions = newQuestions

    AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY,JSON.stringify(data))
  })


}

