import "../../../sass/lost_template/Lost-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const PetItem = ({ pet, index }) => {
    return (
        <div className="lost-item">
            <p className="lost-nick"> {pet.nick}</p>
            <div className="lost-header">
                <span>
                    <FontAwesomeIcon icon={faMapMarker} />
                </span>
                <p>{pet.location}</p>
            </div>
            <div className="lost-body">
                <img
                    src={`http://localhost:5000/${pet.image}`}
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
