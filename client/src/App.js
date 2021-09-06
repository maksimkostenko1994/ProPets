import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div style={{display: "flex", height: "40px", justifyContent: "center", alignItems: 'center', margin: "4px"}}>
      <FontAwesomeIcon icon={faUserAlt} size="2x"/><h1>Hello Guys!</h1>
    </div>
  );
}

export default App;
