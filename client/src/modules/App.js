import MainPageSection from './components/mainPage/MainPageSection';
import Button from "./components/button/Button.js";

import {faPaw, faSave, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

function App() {

    return (
        <>
            <MainPageSection/>
            <Button text='Publish' icon={faPaw} color="btn"/>
            <Button text='Submit' icon={faPaw} color="btn"/>
            <Button text='I lost my pet' icon={faSearch} color="redBtn"/>
            <Button text='I found a pet' icon={faPaw} color="btn"/>
            <Button text='Add new' icon={faPlus} color="btn"/>
            <Button text='Save changes' icon={faSave} color="btn"/>
            <Button text='Cancel' color="btnWhite"/>
        </>
    );
}

export default App;
