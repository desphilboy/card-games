import React, { Component } from 'react';

const baseCardsImageUrl = '../images/1x/';

export default class Card extends Component {


    calculateClass() {
        return `card card-${this.props.suit}-${this.props.number}`;

    }

    calculateImageSrcName() {
        return `${baseCardsImageUrl}${this.props.number}_${this.props.suit}.png`;
    }

    render() {

    return   (<div className={ this.calculateClass() } id='card'>
        {this.props.number} of {this.props.suit}
        <img src={ this.calculateImageSrcName() }></img>
        </div>);
    }
}
