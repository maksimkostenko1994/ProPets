import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Button({text, ...rest}) {

    const {click, color, icon} = rest

    return (
        <button onClick={() => click()} className="btn-tmp" style={{
            backgroundColor: color,
            padding: !icon && "5px 30px",
            textAlign: !icon && 'center'
        }}>
            {icon && <FontAwesomeIcon className="btnIcon" icon={icon}/>}<p>{text}</p>
        </button>
    )
}