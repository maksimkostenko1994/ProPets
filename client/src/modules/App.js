import {Route} from "react-router-dom";
import PostList from "./components/post/PostList";
import MainPageNav from "./components/mainPage/MainPageNav";
import MainPageContent from "./components/mainPage/MainPageContent";
import ModalWindow from "./components/modal/ModalWindow";

function App() {

    return (
        <>
            <MainPageNav/>
            <Route exact path="/" component={MainPageContent}/>
            <Route path="/posts" component={PostList}/>
            <Route path="/signin" component={ModalWindow}/>
        </>
    );
}

export default App;
