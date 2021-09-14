import React from 'react'
import Button from '../button/Button'
import logoFull from './img/Group1.png'

export default function MainPageNav() {
	return (
		<div className="navMainPage">
			<div className="navContainer">
				<a href="#" className="logo">
					<img src={logoFull} alt="logo-full" />
				</a>
				<Button	btnStyle='btnType1'	btnIcon='' text='Sign in' />
			</div>
		</div>
	)
}

