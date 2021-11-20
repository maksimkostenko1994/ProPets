import {Route, Switch, useLocation} from "react-router-dom";
import MainPageNav from "./components/mainPage/MainPageNav";
import MainPageContent from "./components/mainPage/MainPageContent";
import ModalWindow from "./components/modal/ModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {appSelector} from "../store/app";
import {useEffect} from "react";
import Loader from "./components/loader/Loader";
import Home from "./components/home/Home";
import {checkAuthAction} from "../store/auth";

function App() {

    const {loading, auth} = useSelector(appSelector)
    const dispatch = useDispatch()

    const {pathname} = useLocation()

    useEffect(() => {
        dispatch(checkAuthAction())
    }, [dispatch])

    return (
        <>
            <MainPageNav/>
            <Switch>
                <Route exact path="/" component={MainPageContent}/>
                <Route path="/signin" component={ModalWindow}/>
            </Switch>
            {(auth || pathname === "/lost" || pathname === "/found") && <Home/>}
            {loading && <Loader/>}
        </>
    );
}

export default App;
