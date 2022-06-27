import React from "react";
import '../styles/Button.css'

function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div className={`container-btn ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.manageClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Button;