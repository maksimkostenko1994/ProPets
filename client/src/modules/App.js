import {Redirect, Route, Switch} from "react-router-dom";
import MainPageNav from "./components/mainPage/MainPageNav";
import MainPageContent from "./components/mainPage/MainPageContent";
import ModalWindow from "./components/modal/ModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {appSelector, authSuccess} from "../store/app";
import {useEffect} from "react";
import Loader from "./components/loader/Loader";
import Home from "./components/home/Home";

function App() {

    const {loading, auth} = useSelector(appSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authSuccess())
    }, [dispatch])

    return (
        <>
            <MainPageNav/>
            <Switch>
                <Route exact path="/" component={MainPageContent}/>
                <Route path="/posts" component={Home}/>
                <Route path="/signin" component={ModalWindow}/>
            </Switch>
            {auth ? <Redirect exact from="/" to="/posts"/> : <Redirect t to="/"/>}
            {loading && <Loader/>}
        </>
    );
}

export default App;
