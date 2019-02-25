import uuidv5 from 'uuid/v5';
import { mixShuffle } from '../varaq/shuffle';
import { STANDARD_DECK } from '../varaq/decks.constants';
import { createGameBoard } from '../boards';

const createMarkGame = (player) => ({
    id: uuidv5(),
    deck: mixShuffle(STANDARD_DECK),
    gameBoard: createGameBoard(FOUR_IN_TWO),
})