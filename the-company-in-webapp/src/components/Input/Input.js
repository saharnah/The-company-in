import React from 'react';
import './Input.css';

const Input = (props) => (
    <div className="input-container">
        <input {...props} />
        {props.error && (<span className="input-error">{props.error}</span>)}
    </div>
)

export default Input;
