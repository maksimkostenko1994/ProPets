import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faPaw, faSave, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function Button({onClick, text, btnIcon, btnStyle }) {
	function iconSelection(icon) {
		const icon1 = faPaw, icon2 = faSave, icon3 = faSearch, icon4 = faPlus
		switch (icon) {
			case 'paw': return icon1
			case 'save': return icon2
			case 'search': return icon3
			case 'plus': return icon4
			case '' || 'none': return ''
		}
	}
	return (
		<>
			<button onClick={()=> onClick()} className={btnStyle}><FontAwesomeIcon className="btnIcon" icon={iconSelection(btnIcon)}/>{text}</button>
		</>
	)
}