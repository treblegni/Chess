import React,{ useState } from 'react';

const Tile = (props) =>  {
    const [tile,setTile] = useState({isSelected: false, style: {}, isOccupied: false});

    const handleSelect = () => {
        console.log(tile.isSelected);
        setTile({...tile,isSelected: !tile.isSelected});
        console.log(tile.isSelected);

        if (tile.isSelected) setTile({...tile, style: {borderColor: 'red'}});
        else setTile({...tile, style: {borderColor: 'black'}});
    }

    return (
        <div {...props} style={tile.style} onClick={handleSelect}>
        </div>
    )
}

export default Tile;