import { ferrShuffle, borrShuffle, cut, borr, ferr } from './shuffle.js';
import { STANDARD_DECK } from './decks.constants.js';
import { STANDARD_NUMBERS, STANDARD_SUITS } from './varaq.constants';

describe('shuffle', () => {
    test('cut keeps the lenght and order the same and displaces all cards by same number', () => {
        let r1 = cut(STANDARD_DECK);
        let aceOfSpade = STANDARD_DECK[0];
        let displacement =0;
        for (let i=0; i< r1.length; ++i) {
            if (aceOfSpade.suit == r1[i].suit && aceOfSpade.number == r1[i].number) {
                displacement = i;
                break;
            }
        }

        expect(r1.length).toEqual(STANDARD_DECK.length);

        for (let i=0; i < r1.length; ++i) {
            let newPos = (i + displacement) % STANDARD_DECK.length
            expect(STANDARD_DECK[i].suit).toEqual(r1[newPos].suit);
            expect(STANDARD_DECK[i].number).toEqual(r1[newPos].number);
        }
    });

    test('Borr keeps the lenght', () => {
        let r1 = borr(STANDARD_DECK);

        expect(r1.length).toEqual(STANDARD_DECK.length);
    });

    test('Ferr keeps the lenght', () => {
        let r1 = ferr(STANDARD_DECK);

        expect(r1.length).toEqual(STANDARD_DECK.length);
    });
});

