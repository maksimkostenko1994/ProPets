import React from 'react'
import mainImg from './img/Image2.png'
import MainPageLostBtn from './MainPageLostBtn'
import MainPageFoundBtn from './MainPageFoundBtn'
import {Link} from "react-router-dom";
import DogAndBird from "../../../assets/img/dogCatBirdBig.png"
import Logo from "../logo/Logo";

export default function MainPageContent() {
    return (
        <>
            <div className="mainPageContainer">
                <div className="header-container">
                    <div className="mainLeftContainer">
                        <h1>Welcome to your <span>pawfessional</span> community</h1>
                        <div className="btnContainer">
                            <MainPageLostBtn/>
                            <MainPageFoundBtn/>
                        </div>
                    </div>
                    <div className="mainRightContainer">
                        <img src={mainImg} alt="main-img"/>
                    </div>
                </div>
                <p className="mainPageJoinLink">I'm okay, just want to <Link to="/signin">JOIN</Link> the
                    pawsome
                    community!</p>
            </div>

            <div className="section-title">
                <h1>Our fluffy space for lovers, admirers, dads and moms <br/>of our four-legged, winged, tailed guys.
                </h1>
            </div>

            <div className="section-info">
                <div className="info-image">
                    <img src={DogAndBird} alt=""/>
                </div>
                <div className="info-items">
                    <h2>Here is collected everything that your pet needs:</h2>
                    <ul>
                        <li><span/>profession veterinarian tips;</li>
                        <li><span/>useful information about education and care;</li>
                        <li><span/>information about pet-sitting and walking service</li>
                        <li><span/>and of course, great communication with new <br/>friends in your social network!</li>
                    </ul>
                    <p><span/>Make an account and <Link to="/signin">JOIN</Link> to us!</p>
                </div>
            </div>

            <footer className="section-footer">
                <div className="footer-container">
                    <div>
                        <a href="#top"><Logo color="whiteText"/></a>
                    </div>
                    <div>
                        <p>1600 Amphitheatre Pkwy <br/>Mountain View, CA 94043, USA</p>
                    </div>
                </div>
            </footer>
        </>
    )
}