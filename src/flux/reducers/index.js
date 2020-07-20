import gameReducer from './gameReducer';
import boardReducer from './boardReducer';
import tileReducer from './tileReducer';
import playerReducer from './playerReducer';
import { combineReducers } from 'redux';

const createRootReducer = () => combineReducers({
    game: gameReducer,
    board: boardReducer,
    tile: tileReducer,
    player: playerReducer
});

export default createRootReducer;