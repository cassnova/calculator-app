import React from "react";
import '../styles/Clear.css'

const Clear = (props) => {
    return (
        <div className="btn-clear">
            {props.children}
        </div>
    )
}

export default Clear;