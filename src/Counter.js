import React from 'react'

const Counter = (props) => {

    return (
        <React.Fragment>
            <label htmlFor="" style={{marginRight:'0.5rem'}}>Counter: {props.count}</label>
            <button onClick={props.hdlClick} >+</button>
        </React.Fragment>
    );
}

export default Counter;