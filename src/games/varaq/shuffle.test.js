import { ferr } from './shuffle.js';
import { STANDARD_DECK } from './decks.constants.js';

describe('shuffle', () => {
    test('dummy test', () => {
        ferr(STANDARD_DECK);
        expect(true).toBe(true);
    });
});