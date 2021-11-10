import React, {useEffect} from 'react';
import LeftNavBar from "../leftNavBar/LeftNavBar";
import Content from "../content/Content";
import RightNavBar from "../rightNavBar/RightNavBar";
import {checkAuthAction} from "../../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../../store/app";

const Home = () => {

    return (
        <div className="home-box" style={{
            backgroundColor: "#06B2BB",
            height: "92.7vh"
        }}>
            <LeftNavBar/>
            <Content/>
            <RightNavBar/>
        </div>
    );
};

export default Home;