import React, { Component } from 'react' 
import { TouchableOpacity, View, Text } from 'react-native'

export default class DeckList extends Component{



render(){

  const { deckId,  navigateToDeck, deckTitle, deckLength } = this.props

  return (


    <TouchableOpacity
      key={deckId}
      style={{ width: 300, marginTop: 5, borderRadius: 20}}
      onPress={() => navigateToDeck(deckId) }>

      <View  style={{ backgroundColor: '#48A90A', padding: 20, borderRadius: 10,}}>
        
        <Text style={{fontSize: 20}}>
          {deckTitle}
        </Text>

        <Text style={{fontSize: 16, color: 'gray'}}>
          Questions: {deckLength}
        </Text>

      </View>

    </TouchableOpacity>
  
  )
}
}