import React, { Component } from 'react';
import './card.less';

const baseCardsImageUrl = '/images/1x/';
const BACK_IMAGE = 'back-green.png';
const baseRotationDegrees = 1.0;

export class Card extends Component {

    constructor(props) {
        super();
        this.state = Object.assign({}, props);
    }

    componentWillReceiveProps(props) {
        this.setState(Object.assign({}, props));
    }

    calculateClass() {
        if(this.props.known === false ) return 'card card-unknown';
        return `card card-${this.props.suit}-${this.props.number}`;

    }

    calculateImageSrcName() {
        if (!this.props.number || !this.props.suit || this.props.back) {
            return `${baseCardsImageUrl}${BACK_IMAGE}`;
        }

        return `${baseCardsImageUrl}${this.props.number}_${this.props.suit}.png`;
    }

    calculateIdText()
    {
        if (!this.props.number || !this.props.suit || this.props.known === false) {
            return 'unknown card';
        }
        return `${this.props.number} of ${this.props.suit}`;
    }


    calculateStylePosition() {
         if (!this.state.y || !this.state.x) {
            return {};
        }
       console.log(this.state);
        return {top: `${this.state.y}px`, left: `${this.state.x}px`, position: 'absolute'};
    }


    calculateStyleRotation() {
         if (!this.props.rotateDegrees) {
            return {};
        }
        return {transform: `rotate(${baseRotationDegrees * this.props.rotateDegrees}deg)`};
    }

    cardImageClick() {
        console.log('Card on click is called', this.props.cardIndex);
         this.props.onCardClick(this.props.cardIndex);
    }

    render() {
        console.log('card render');
        return(
            <div style={ this.calculateStylePosition() }
            className={ this.calculateClass() } id={this.props.id}>
            <img src={this.calculateImageSrcName()} style={this.calculateStyleRotation()} alt={this.calculateIdText()} onClick={this.cardImageClick.bind(this)}>
            </img>
            </div>
        );
    }
}
