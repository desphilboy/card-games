import { createPlayer } from '../player'; 
export const createGameBoard = () => ({
    name:'gameBoardName',
    player1: createPlayer()
});