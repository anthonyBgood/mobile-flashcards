
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'

import { connect } from 'react-redux'
import { AppLoading } from 'expo'

import { localInitDeck, localGetDecks, localSetDecks, localRemoveDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import DeckListComponent from './DeckListComponent'


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
          localSetDecks(this.props.decks)
            .then(() =>{
              this.setState(()=> ({ready: true}))
            })
          
          })

      // operational
      /* localGetDecks()
        .then((result) =>{
          result !== null && dispatch(receiveDecks(result))
          this.setState(()=> ({ready: true}))
        }) */

  }

  navigateToDeck = (deckId) => {
    this.props.navigation.navigate('DeckView',{ deckId: deckId })
  }


  render(){

    const { ready } = this.state
    const { decks } = this.props

    if (ready === false){
      return <AppLoading />
    }

    return (

      <View style={styles.container}>

        <View style={{flex:3, paddingTop:30 }}>
          {
            (decks !== undefined &&  Object.keys(decks).length !== undefined && Object.keys(decks).length !== 0) 
            ?
            <FlatList 
              data= {Object.keys(decks)} 
              keyExtractor={(item) => item}
              extraData={decks}
              renderItem={({item}) => 
              
                <DeckListComponent 
                  key={item}
                  deckId={item}  
                  navigateToDeck={this.navigateToDeck}
                  deckTitle={decks[item].title}
                  deckLength={decks[item].questions.length}/>              
              }/>

            :
              <View style={{ width: 300, marginTop: 5, borderRadius: 20}}>
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
        </View>
        
        <View style={{flex:1, justifyContent: 'center'}}>
          <Button
            title="add new deck"
            onPress={() => this.props.navigation.navigate('AddDeck')}
          />
        </View>
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



/* Object.keys(decks).map(deckId =>{
  return (
    
    <DeckListComponent 
        key={deckId}
        deckId={deckId}  
        navigateToDeck={this.navigateToDeck}
        deckTitle={decks[deckId].title}
        deckLength={decks[deckId].questions.length}/>

  )}) */

  /* renderItem={({item}) => <Text>{item} {JSON.stringify(decks[item])}</Text>}/> */