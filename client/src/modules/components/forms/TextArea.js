import Error from "../error/Error";

const TextArea = ({error, ...rest}) => {
    return (
        <>
            <textarea {...rest} />
            {error && <Error text={error}/>}
        </>
    );
};
export default TextArea;
