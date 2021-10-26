import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Button({text, ...rest}) {

    const {click, color, icon, params} = rest

    return (
        <button onClick={click && (params ? (() => click(...params)) : (() => click()))}
                className={`btn-tmp ${color}`} style={{
            color: (color === "redBtn" || color === "btnWhite") && "black",
            padding: !icon && "5px 30px",
            textAlign: !icon && 'center'
        }}>
            {icon && <FontAwesomeIcon className="btnIcon" icon={icon}/>}<p>{text}</p>
        </button>
    )
}