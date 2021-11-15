import React from "react";
import LostItem from "./LostItem";
import "./../../../sass/lost_template/Lost-list.scss";

const LostList = () => {
    return (
        <div className="lost-container">
            <p className="lost-title">Lost pets</p>
            <hr />
            <div className="lost-list">
                <LostItem />
            </div>
        </div>
    );
};

export default LostList;
