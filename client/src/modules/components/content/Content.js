import React from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "../post/PostList";
import LostList from "../lost/LostList";
import PostFullInfo from "../post/PostFullInfo";
import LostFullInfo from "../lost/LostFullInfo";
import FoundFullInfo from "../found/FoundFullInfo";
import FoundList from "../found/FoundList";
import HotelList from "../services/hotels/HotelList";
import HotelFullInfo from "../services/hotels/HotelFullInfo";
import WalkingList from "../services/walking/WalkingList";
import WalkingFullInfo from "../services/walking/WalkingFullInfo";
import FosteringList from "../services/fostering/FosteringList";
import FosteringFullInfo from "../services/fostering/FosteringFullInfo";
import VetHelpList from "../services/vet_help/VetHelpList";
import VetHelpFullInfo from "../services/vet_help/VetHelpFullInfo";
import UserProfile from "../user/UserProfile";
import AddPost from "../post/AddPost";
import AddService from "../services/AddService";
import Services from "../services/Services";

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path="/posts" component={PostList} />
                <Route path="/postsFullInfo/:id" component={PostFullInfo} />
                <Route path="/lost" component={LostList} />
                <Route path="/lost/:id" component={LostFullInfo} />
                <Route path="/found" component={FoundList} />
                <Route path="/found/:id" component={FoundFullInfo} />
                <Route path="/services/add" component={AddService} />
                <Route path="/services/:type" component={Services} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/posts/add" component={AddPost} />
            </Switch>
        </div>
    );
};

export default Content;
