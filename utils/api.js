import { AsyncStorage } from 'react-native'
import dummyData from './dummyData'


const FLASH_CARDS_STORAGE_KEY = 'flashCards:decks'


/*

SUGGESTED AsyncStorage methods

  getDecks: return all of the decks along with their titles, questions, and answers. 

  getDeck: take in a single id argument and return the deck associated with that id. 

  saveDeckTitle: take in a single title argument and add it to the decks. 

  addCardToDeck: take in two arguments, 
            title and card, and will add the card to the list of questions for the 
            deck with the associated title. 
*/

export function startDeck(){

  return dummyData()
  

/*
   AsyncStorage.clear()    
  return AsyncStorage.getItem(this.CALENDAR_STORAGE_KEY)
    .then((value) =>{
      console.log('asyncValue: ', value)

      debugger
      return dummyData()
      //return (value !== null? value: dummyData())
    })
    .catch(() => dummyData()) 
*/

}


export function mergeDeck ({key, deck}){
  return AsyncStorage.mergeItem(
    FLASH_CARDS_STORAGE_KEY,
    JSON.stringify({[key]:deck}))
}


export function removeDeck(key){
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
    .then((results) =>{
      const data = JSON.parse(results)
      data[key]=undefined
      delete data[key]
      AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY,JSON.stringify(data))
    })
}


export function addQuestion(key, question,answer){
  // TODO:
  //    get deck getItem()
  //    add question
  //    call mergeDeck with the amended deck
}

export function removeQuestion(key, questionStr){
  // TODO:
  //    get deck getItem()
  //    filter to remove question
  //    call mergeDeck with the amended deck
}