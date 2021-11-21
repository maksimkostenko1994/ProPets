import React from "react";

const Error = ({ text, errorClass }) => {
    return (
        <div className={errorClass}>
            <p>{text}</p>
        </div>
    );
};

export default Error;
