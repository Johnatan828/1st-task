import React from 'react';
import './UserInput.css';

const userInput = (props) =>{
    const instyle={
        border: '2px solid red'
    }
    return <input 
    type='text' 
    style={instyle}
    onChange={props.changes} 
    value={props.currentName}/>;
};

export default userInput;