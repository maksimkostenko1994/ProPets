import React from 'react'
import logoShort from './img/Group11.png'

export default function MainPageLostBtn() {
	return (
		<button className="btnLost" onMouseOver={btnLostChangeText} onMouseOut={btnLostReturnText}>
			<h3 className="textBtnLost">I lost my pet!</h3>
			<img src={logoShort} alt="logo-short"/>
		</button>
	)
}

function btnLostChangeText(){document.querySelector('.textBtnLost').innerHTML = 'Click to find!'}
function btnLostReturnText(){document.querySelector('.textBtnLost').innerHTML = 'I lost my pet!'}