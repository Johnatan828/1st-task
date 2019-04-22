import React from 'react';
import'./UserOutput.css';
const userOutput = (props)=>{

    return (
        <div className='UserOutput'>
            <p>userName: {props.userName}</p>
            <p>More text</p>
        </div>
    );
};

export default userOutput;