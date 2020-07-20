import React,{ useState } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const Tile = (props) =>  {
    const [style,setTile] = useState({});

    const handleSelect = () => {
    }

    return (
        <div {...props} style={style} onClick={handleSelect}>
        </div>
    )
}

const enhance = compose(
    connect(
        state => ({
            
        }),
        dispatch => ({

        })
    )
)

export default enhance(Tile);