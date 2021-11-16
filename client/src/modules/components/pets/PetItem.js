import testPhoto from "./../../../assets/img/cat.png";
import "../../../sass/lost_template/Lost-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const PetItem = () => {
    return (
        <div className="lost-item">
            <p className="lost-nick"> Nick</p>
            <div className="lost-header">
                <span>
                    <FontAwesomeIcon icon={faMapMarker} />
                </span>
                <p>address</p>
            </div>
            <div className="lost-body">
                <img src={testPhoto} alt="imgPhoto" />
            </div>
            <div className="lost-footer">
                <NavLink to={`/pet/1`} className="lost-details-btn">
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
