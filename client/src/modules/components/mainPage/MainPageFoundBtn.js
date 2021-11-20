import React from 'react'
import {useHistory} from "react-router-dom";

export default function MainPageFoundBtn() {

	const history = useHistory()

	return (
		<button className="btnFound" onClick={e => history.push(`/found`)}>
			<div className="btn-found-hover"><h3>What to do?</h3></div>
			<div className="btn-found-state"><h3 className="textBtnLost">I found a pet!</h3></div>
		</button>
	)
}