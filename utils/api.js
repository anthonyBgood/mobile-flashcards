import { AsyncStorage } from 'react-native'
import dummyData from './dummyData'

const FLASH_CARDS_STORAGE_KEY = 'flashCards:decks'


export function startDeck(){

  return dummyData()
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