
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { AppLoading } from 'expo'

import { localInitDeck, localGetDecks, localSetDecks, localRemoveDecks } from '../utils/api'
import { receiveDecks } from '../actions'


class DeckList extends Component {
  static navigationOptions = {
    title: 'flash card decks',
  };

  state = {
    ready: false
  }

  componentDidMount () {

    const { dispatch } = this.props

      // DEV - load dummy data  
      localRemoveDecks()
        .then(()=>{
          dispatch(receiveDecks(localInitDeck()))
          this.setState(()=> ({ready: true}))
          })

      // operational
      /* localGetDecks()
        .then((result) =>{
          result !== null && dispatch(receiveDecks(result))
          this.setState(()=> ({ready: true}))
        }) */


      // DEV - remove existing local data 
      /* localRemoveDecks()
        .then(()=>{
          localGetDecks()
          .then((result) =>{
            result !== null && dispatch(receiveDecks(result))
            this.setState(()=> ({ready: true}))
          })          
        }) */

  }


  render(){

    const { ready } = this.state
    const { decks } = this.props

    if (ready === false){
      return <AppLoading />
    }

    return (

      <View style={styles.container}>

        {
          (decks !== undefined &&  Object.keys(decks).length !== undefined && Object.keys(decks).length !== 0) 
          ?
          Object.keys(decks).map(key =>{
          return (

            <TouchableOpacity
              key={key}
              style={{ width: 300, marginTop: 5, borderRadius: 20}}
              onPress={() => this.props.navigation.navigate(
                        'DeckView',
                        { deckId: key }
                      )}>
            
              <View  style={{ backgroundColor: '#48A90A', padding: 20, borderRadius: 10,}}>
                
                <Text style={{fontSize: 20}}>
                  {decks[key].title}
                </Text>

                <Text style={{fontSize: 16, color: 'gray'}}>
                  Questions: {decks[key].questions.length}
                </Text>

              </View>
            </TouchableOpacity>
            

          )
          })
          :

            <View
              style={{ width: 300, marginTop: 5, borderRadius: 20}}>

              <View  style={{ backgroundColor: '#48A90A', padding: 20, borderRadius: 10,}}>
                
                <Text style={{fontSize: 20, color: '#4a4a4a'}}>
                  You are deck less
                </Text>

                <Text style={{fontSize: 16, color: 'gray'}}>
                  select Add to begin
                </Text>

              </View>
            </View>
        
        
        }

        <Button
          title="add new deck"
          onPress={() => this.props.navigation.navigate('AddDeck')}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91cb6c',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

function mapStateToProps (decks){

  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
