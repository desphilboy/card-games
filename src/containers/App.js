import React, {Component} from 'react';
import Card from '../components/card';


export default class App extends Component {
    render () {
        return(
        <div>
        <p>This is my new react app</p>
        <Card rank="A" suit="S" />
        <Card suit="heart" number="7"/>
        <Card suit="spade" number="1"/>
        <Card suit="diamond" number="queen"/>
        <Card suit="club"  number="1"/>
        </div>
        );
    }
}
