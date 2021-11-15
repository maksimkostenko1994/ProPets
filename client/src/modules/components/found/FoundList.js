import React from "react";
import "./../../../sass/found_tempalte/Found-list.scss";
import FoundItem from "./FoundItem";

const FoundList = () => {
    return (
        <div className="found-container">
            <p className="found-title">Found pets</p>
            <hr />
            <div className="found-list">
                <FoundItem />
            </div>
        </div>
    );
};

export default FoundList;
