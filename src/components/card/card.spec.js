'use strict';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import { expect } from 'chai';
import { mount } from 'enzyme';
import Card from './card';

describe('Card component', () => {
            let cardParams = {};
            let mountedCard;
            const mountCard = () => {
                mount( <Card {...cardParams }/>);
                };

                beforeEach(() => {
                    mountedCard = mountCard()
                    console.log('before each 1');
                });


                it('should include class "card"  in the className all the time', () => {
                    const div = mountedCard.find('div');
                    expect(div.length).toBeGreaterThan(0);
                });
            });
