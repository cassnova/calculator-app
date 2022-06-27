import React from "react";
import '../styles/Clear.css'

const Clear = (props) => {
    return (
        <div className="btn-clear" onClick={() => props.manageClear()}>
            {props.children}
        </div>
    )
}

export default Clear;