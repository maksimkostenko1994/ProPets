import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Button({text, ...rest}) {

    const {click, color, icon, params, name} = rest

    return (
        <button name={name} onClick={click && (params ? (() => click(...params)) : (() => click()))}
                className={`btn-tmp ${color}`} style={{
            color: (color === "redBtn" || color === "btnWhite") && "black",
            padding: !icon && "6px 30px",
            textAlign: !icon && 'center'
        }}>
            {icon && <FontAwesomeIcon className="btnIcon" icon={icon}/>}<p>{text}</p>
        </button>
    )
}