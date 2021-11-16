import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import "../../../sass/lost_template/Lost-full-info.scss";
import testPhoto from "./../../../assets/img/cat.png";
const PetFullInfo = () => {
    return (
        <div id="lost-full-info-container">
            <div className="lfi-header">
                <span className="lfi-header-title">
                    Status pet:
                    <span className="lfi-header-title-nick">Nick</span>
                    <span>
                        | <FontAwesomeIcon icon={faMapMarker} />
                    </span>
                    <span>address</span>
                </span>
            </div>
            <hr />
            <div className="lfi-body">
                <div className="lfi-body-left">
                    <img src={testPhoto} alt="imgPhoto" />
                </div>
                <div className="lfi-body-right">
                    <div className="lfi-body-right-header">
                        <h3>Sex,pet breed</h3>
                        <p className="lfi-body-date">lost post date</p>
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
            <div className="lfi-description">
                <span>Description: </span>texttexttexttexttexttexttexttexttext
                texttexttext texttexttexttexttexttexttexttexttexttexttexttext
            </div>
            <div className="lfi-footer">
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

export default PetFullInfo;
