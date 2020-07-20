import React from 'react';
import Tile from '../tile';
// import uid from 'uid';

const Board = () => {
    const tiles = [];
    let type = 'odd';

    //Tile setup for board
    for (let i = 0 ; i < 64 ; i++) {
        if (i == 0 || i%8 != 0) tiles.push(<Tile id={i} className={`board-tile-${type} board-tile`}/>);
        else {
            if (type === 'odd') type = 'even';
            else if (type === 'even') type = 'odd';
            tiles.push(<Tile id={i} className={`board-tile-${type} board-tile`}/>);
        }
    }

    return (
        <div class='grid-container'>
            {tiles}
        </div>
    )
}

export default Board;