import "../../../sass/lost_template/Lost-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const PetItem = ({ pet, index }) => {
    const nickName = pet.nick && pet.nick !== "null" ? pet.nick : "Nickname";

    return (
        <div className="lost-item">
            <div className="lost-header">
                <div>
                    <p className="lost-nick">
                        {pet.status === "lost" ? nickName : pet.type}
                    </p>
                </div>
                <div className="lost-header-adress">
                    <span>
                        <FontAwesomeIcon icon={faMapMarker} />
                    </span>
                    <p>{pet.location}</p>
                </div>
            </div>
            <div className="lost-body">
                <img
                    src={`https://pro-pets-server.herokuapp.com/${pet.image}`}
                    alt="pet-icon"
                />
            </div>
            <div className="lost-footer">
                <NavLink to={`/pet/${index}`} className="lost-details-btn">
                    view details
                </NavLink>
                <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </div>
        </div>
    );
};
export default PetItem;
