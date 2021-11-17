import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import "../../../sass/lost_template/Lost-full-info.scss";
import { useParams } from "react-router";
import { getOnePetById } from "../../../store/pets";

const PetFullInfo = () => {
    const { id } = useParams();
    const pet = getOnePetById(id);

    return (
        <div id="lost-full-info-container">
            <div className="lfi-header">
                <span className="lfi-header-title">
                    {pet.status}:
                    <span className="lfi-header-title-nick">{pet.nick}</span>
                    <span>
                        | <FontAwesomeIcon icon={faMapMarker} />
                    </span>
                    <span>{pet.location}</span>
                </span>
            </div>
            <hr />
            <div className="lfi-body">
                <div className="lfi-body-left">
                    <img
                        src={`http://localhost:5000/${pet.image}`}
                        alt="imgPhoto"
                    />
                </div>
                <div className="lfi-body-right">
                    <div className="lfi-body-right-header">
                        <h3>
                            {pet.sex},{pet.breed}
                        </h3>
                        <p className="lfi-body-date">lost post date</p>
                        <hr />
                    </div>
                    <div>
                        <p>
                            <span>Color:</span>
                            {pet.color}
                        </p>
                        <p>
                            <span>Sex:</span>
                            {pet.sex}
                        </p>
                        <p>
                            <span>Height:</span>
                            {pet.height}
                        </p>
                        <br />
                        <br />
                        <p>
                            <span>Distinctive features:</span>
                            {pet.distinctive}
                        </p>
                    </div>
                </div>
            </div>
            <div className="lfi-description">
                <span>Description: </span>
                {pet.description}
            </div>
            <div className="lfi-footer">
                <p>
                    <span>Owner:</span>
                    user.full_name
                </p>
                <p>
                    <span>Phone:</span>
                    user.phone
                </p>
                <p>
                    <span>e-mail:</span>
                    user.email
                </p>
            </div>
        </div>
    );
};

export default PetFullInfo;
