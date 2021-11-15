import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import "../../../sass/found_tempalte/Found-full-info.scss";
import testPhoto from "./../../../assets/img/cat.png";
const FoundFullInfo = () => {
    return (
        <div id="found-full-info-container">
            <div className="ffi-header">
                <span className="ffi-header-title">
                    Found pet:
                    <span className="ffi-header-title-nick">Nick</span>
                    <span>
                        | <FontAwesomeIcon icon={faMapMarker} />
                    </span>
                    <span>address</span>
                </span>
            </div>
            <hr />
            <div className="ffi-body">
                <div className="ffi-body-left">
                    <img src={testPhoto} alt="imgPhoto" />
                </div>
                <div className="ffi-body-right">
                    <div className="lfi-body-right-header">
                        <h3>Sex,pet breed</h3>
                        <p className="ffi-body-date">found post date</p>
                        <hr />
                    </div>
                    <div>
                        <p>
                            <span>Color:</span>pet-color
                        </p>
                        <p>
                            <span>Sex:</span>pex-sex
                        </p>
                        <p>
                            <span>Height:</span>pet-height
                        </p>
                        <br />
                        <br />
                        <p>
                            <span>Distinctive features:</span>
                            texttexttexttexttexttexttexttexttext texttexttext
                            texttexttexttexttexttexttexttexttexttexttexttext
                        </p>
                    </div>
                </div>
            </div>
            <div className="ffi-description">
                <span>Description: </span>texttexttexttexttexttexttexttexttext
                texttexttext texttexttexttexttexttexttexttexttexttexttexttext
            </div>
            <div className="ffi-footer">
                <p>
                    <span>Owner:</span>Author
                </p>
                <p>
                    <span>Phone:</span>phone number
                </p>
                <p>
                    <span>e-mail:</span>email
                </p>
            </div>
        </div>
    );
};

export default FoundFullInfo;
