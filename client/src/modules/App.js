import MainPageSection from './components/mainPage/MainPageSection';
import Button from "./components/button/Button.js";

import {faPaw, faSave, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <>
            <MainPageSection/>
            <Button text='Publish' icon={faPaw} color="#06B2BB"/>
            <Button text='Submit' icon={faPaw} color="#06B2BB"/>
            <Button text='I lost my pet' icon={faSearch} color="#FA5456"/>
            <Button text='I found a pet' icon={faPaw} color="#06B2BB"/>
            <Button text='Add new' icon={faPlus} color="#06B2BB"/>
            <Button text='Save changes' icon={faSave} color="#06B2BB"/>
            <Button text='Cancel' color={"snow"}/>
        </>
    );
}

export default App;
