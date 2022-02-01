import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarker,
    faSearch,
    faPaw,
} from "@fortawesome/free-solid-svg-icons";
import "../../../sass/lost_template/Lost-full-info.scss";
import { useHistory, useParams } from "react-router-dom";
import {
    deletePetAction,
    getOnePetAction,
    petsSelector,
    updatePetAction,
} from "../../../store/pet";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import moment from "moment";
import { authSelector, userSelector } from "../../../store/app";

const PetFullInfo = () => {
    const auth = useSelector(authSelector);
    const { id } = useParams();

    const user = useSelector(userSelector);

    const { push } = useHistory();

    const { currentPet } = useSelector(petsSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOnePetAction(parseInt(id)));
    }, [dispatch, id]);

    const date = currentPet
        ? moment(currentPet.createdAt).format("D MMMM, YYYY")
        : false;

    return (
        currentPet && (
            <div id="lost-full-info-container">
                <div className="lfi-header">
                    <span className="lfi-header-title">
                        {currentPet.status}:
                        <span className="lfi-header-title-nick">
                            {currentPet.nick}
                        </span>
                        <span>
                            | <FontAwesomeIcon icon={faMapMarker} />
                        </span>
                        <span>{currentPet.location}</span>
                    </span>
                </div>
                <hr />
                <div className="lfi-body">
                    <div className="lfi-body-left">
                        <img
                            src={`https://pro-pets-server.herokuapp.com/${currentPet.image}`}
                            alt="imgPhoto"
                        />
                    </div>
                    <div className="lfi-body-right">
                        <div className="lfi-body-right-header">
                            <h3>
                                {currentPet.sex},{currentPet.breed}
                            </h3>
                            {currentPet.status === "lost" ? (
                                <p className="lfi-body-date">{date}</p>
                            ) : (
                                <p className="lfi-body-date">{date}</p>
                            )}
                            <hr />
                        </div>
                        <div>
                            <p>
                                <span>Color:</span>
                                {currentPet.color}
                            </p>
                            <p>
                                <span>Sex:</span>
                                {currentPet.sex}
                            </p>
                            <p>
                                <span>Height:</span>
                                {currentPet.height}
                            </p>
                            <br />
                            <br />
                            <p>
                                <span>Distinctive features:</span>
                                {currentPet.features}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lfi-description">
                    <span>Description: </span>
                    {currentPet.description}
                </div>
                <div className="lfi-footer">
                    <div>
                        <p>
                            <span>Owner:</span>
                            {currentPet.contacts.split(" ")[2]}{" "}
                            {currentPet.contacts.split(" ")[3]}
                        </p>
                        <p>
                            <span>Phone:</span>
                            {currentPet.contacts.split(" ")[0]}
                        </p>
                        <p>
                            <span>e-mail:</span>
                            {currentPet.contacts.split(" ")[1]}
                        </p>
                    </div>
                    {auth && currentPet.status === "lost" && (
                        <div>
                            <Button
                                click={() => {
                                    dispatch(
                                        updatePetAction(
                                            currentPet.id,
                                            "found",
                                            `${user.phone} ${user.email} ${
                                                currentPet.contacts.split(
                                                    " "
                                                )[2]
                                            } ${
                                                currentPet.contacts.split(
                                                    " "
                                                )[3]
                                            }`
                                        )
                                    );
                                    push(`/lost`);
                                }}
                                text="I found a pet"
                                color="btn"
                                icon={faSearch}
                            />
                        </div>
                    )}
                    {auth &&
                        currentPet.status === "found" &&
                        currentPet.userId === user.id && (
                            <div>
                                <Button
                                    click={() => {
                                        dispatch(
                                            deletePetAction(currentPet.id)
                                        );
                                        push(`/found`);
                                    }}
                                    text="Delete"
                                    color="btn"
                                    icon={faPaw}
                                />
                            </div>
                        )}
                </div>
            </div>
        )
    );
};

export default PetFullInfo;
