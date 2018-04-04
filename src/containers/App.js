import React, {Component} from 'react';
import Card from '../components/card/card';
import Deck from '../components/deck/deck';
import CardsStack from '../structures/cards-stack';


export default class App extends Component {
    render () {

        var deckCards = new CardsStack();


        [
        {suit:'heart', number: 10},
        {suit:'diamond', number: 7},
         {suit:'club', number: 2},
         {},
         {},
         {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
        ].forEach((card) => deckCards.insertTop(card));

        return <div><Deck cards={deckCards} x="20" y="20" shiftX="10" shiftY="5" rotated="true"/> </div>;






    }
}
