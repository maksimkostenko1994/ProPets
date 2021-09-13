import React from 'react'
import MainPageNav from './MainPageNav'
import MainPageContent from './MainPageContent'

export default function MainPageSection() {
	return (
		<section className="mainPageSection">
			<MainPageNav/>
			<MainPageContent/>
		</section>
	)
}