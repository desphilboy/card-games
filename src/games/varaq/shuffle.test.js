import { ferrShuffle, borrShuffle } from './shuffle.js';
import { STANDARD_DECK } from './decks.constants.js';

describe('shuffle', () => {
    test('dummy test', () => {
    	let r1 = borrShuffle(ferrShuffle(borrShuffle(ferrShuffle(STANDARD_DECK))));
        console.warn(r1, 'length:', r1.length);
        expect(true).toBe(true);
    });
});