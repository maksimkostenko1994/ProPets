import React from 'react'
import logoShort from './img/Group11.png'
import {useHistory} from "react-router-dom";

export default function MainPageLostBtn() {

	const {push} = useHistory()
	return (
		<button className="btnLost" onClick={e => push(`/lost`)}>
			<div className="btn-lost-hover"><h3>Click to find</h3></div>
			<div className="btn-lost-state"><h3 className="textBtnLost">I lost my pet!</h3></div>
			<img src={logoShort} alt="logo-short"/>
		</button>
	)
}