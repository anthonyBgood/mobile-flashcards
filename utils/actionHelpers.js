


export function makeDeck (deckName){

  let deckDetails= {}
  deckDetails.title = deckName
  deckDetails.questions =[]
  
  let newDeck = {}
  newDeck[deckName] = deckDetails


  return newDeck


}