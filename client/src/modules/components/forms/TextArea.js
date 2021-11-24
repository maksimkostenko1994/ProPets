import React from "react";
import Error from "../error/Error";

const TextArea = ({ error, ...rest }) => {
    return (
        <>
            <textarea {...rest} />
            <br />
            {error && <Error text={error} />}
        </>
    );
};
export default TextArea;
