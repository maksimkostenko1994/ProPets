import React from "react";
import Error from "../error/Error";

const Field = ({ error, ...rest }) => {
    return (
        <>
            <input {...rest} />
            {error && <Error text={error} />}
        </>
    );
};

export default Field;
