import React from 'react'
import mainImg from './img/Image2.png'
import MainPageLostBtn from './MainPageLostBtn'
import MainPageFoundBtn from './MainPageFoundBtn'

export default function MainPageContent() {
	return (
		<div className="mainPageContainer">
			<div className="mainLeftContainer">
				<h1>Welcome to your <span>pawfessional</span> community</h1>
				<div className="btnContainer">
					<MainPageLostBtn/>
					<MainPageFoundBtn/>
				</div>
				<p className="mainPageJoinLink">I'm okay, just want to <a href="#">JOIN</a> the pawsome community!</p>
			</div>
			<div className="mainRightContainer">
				<img src={mainImg} alt="main-img"/>
			</div>
		</div>
	)
}