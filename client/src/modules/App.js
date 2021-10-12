import MainPageSection from './components/mainPage/MainPageSection';
import Button from "./components/button/Button.js";
import "../sass/textBtn.scss"

function App() {
    return (
        <>
            <MainPageSection/>
            <Button btnStyle='btnType2' btnIcon='paw' text='Publish'/>
            <Button btnStyle='btnType2' btnIcon='paw' text='Submit'/>
            <Button btnStyle='btnType3' btnIcon='search' text='I lost my pet'/>
            <Button btnStyle='btnType4' btnIcon='paw' text='I found a pet'/>
            <Button btnStyle='btnType4' btnIcon='plus' text='Add new'/>
            <Button btnStyle='btnType4' btnIcon='save' text='Save changes'/>
            <Button btnStyle='btnType5' btnIcon='' text='Cancel'/>
        </>
    );
}

export default App;
