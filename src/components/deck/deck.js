import React, { Component } from 'react';
import Card from '../card/card';
import CardStack from '../../structures/cards-stack';

const FETCH_DX = 80;
const FETCH_DY = 80;



export default class Deck extends Component {

	constructor(props) {
		super();
		this.state = Object.assign({}, props);
	}


    renderSingleCard(card, cardIndex) {
    	const fetchX = card.fetched ? FETCH_DX : 0;
    	const fetchY = card.fetched ? FETCH_DY : 0;

        const rotationProperty = this.props.rotated ? cardIndex : '';
        const xProperty = this.props.shiftX ? this.props.x * 1 + cardIndex * this.props.shiftX  - fetchX : this.props.x  - fetchX;
        const yProperty = this.props.shiftY ? this.props.y * 1 + cardIndex * this.props.shiftY - fetchY : this.props.y - fetchY;

    	if(card.fetched) {
    		console.log(cardIndex, ' card is fetched. x=', xProperty, ' y=', yProperty);
    	}


    	console.log(xProperty, yProperty, rotationProperty, card.suit, card.number,`card-${cardIndex}`);

        return <Card key={`key-${cardIndex}`} x={xProperty} y={yProperty} rotateDegrees={rotationProperty} suit={card.suit} 
        number={card.number} id={`card-${cardIndex}`} onCardClick={this.onCardClick.bind(this)}  cardIndex={cardIndex} />;
    }

    onCardClick(cardIndex) {
    	
    	let clickedCard = this.state.cards[cardIndex];
    	clickedCard = Object.assign({}, clickedCard, {fetched: true});
    	console.log('clickedCard>>>>', clickedCard);

    	this.state.cards.replaceNth(clickedCard, cardIndex);

    	this.setState( Object.assign({}, this.state));
    	
    }

    render() {
        let  cardsJsx = this.state.cards.map((card, index) => this.renderSingleCard(card, index));
        
        console.log(' deck render ', cardsJsx);

        return <div> {cardsJsx} </div>;
    } 

}
