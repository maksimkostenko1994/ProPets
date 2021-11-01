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

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path="/posts" component={PostList} />
                <Route path="/posts/:id" component={PostFullInfo} />
                <Route path="/lost" component={LostList} />
                <Route path="/lost/:id" component={LostFullInfo} />
                <Route path="/found" component={FoundList} />
                <Route path="/found/:id" component={FoundFullInfo} />
                <Route path="/hotels" component={HotelList} />
                <Route path="/hotels/:id" component={HotelFullInfo} />
                <Route path="/walking" component={WalkingList} />
                <Route path="/walking/:id" component={WalkingFullInfo} />
                <Route path="/fostering" component={FosteringList} />
                <Route path="/fostering/:id" component={FosteringFullInfo} />
                <Route path="/vet-help" component={VetHelpList} />
                <Route path="/vet-help/:id" component={VetHelpFullInfo} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/posts/add" component={AddPost} />
                <Route path="/services/add" component={AddService} />
            </Switch>
        </div>
    );
};

export default Content;
