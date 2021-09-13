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
				<Button
					color='white'
					hoverColor='yellow'
					borderColor='white'
					height={34}
					width={112}
					text='Sign in' />
				{/* <button className="btnSignInMainPage">Sign in</button> */}
			</div>
		</div>
	)
}

