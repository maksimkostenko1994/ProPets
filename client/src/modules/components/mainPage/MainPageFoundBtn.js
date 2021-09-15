import React from 'react'

export default function MainPageFoundBtn() {
	return (
		<button className="btnFound" onMouseOver={btnFoundChangeText} onMouseOut={btnFoundReturnText}>
			<h3 className="textBtnFound">I found a pet!</h3>
		</button>
	)
}

function btnFoundChangeText(){document.querySelector('.textBtnFound').innerHTML = 'What to do?'}
function btnFoundReturnText(){document.querySelector('.textBtnFound').innerHTML = 'I found a pet!'}