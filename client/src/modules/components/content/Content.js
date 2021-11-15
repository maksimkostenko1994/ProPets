import React from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "../post/PostList";
import LostList from "../lost/LostList";
import PostFullInfo from "../post/PostFullInfo";
import LostFullInfo from "../lost/LostFullInfo";
import FoundFullInfo from "../found/FoundFullInfo";
import FoundList from "../found/FoundList";
import UserProfile from "../user/UserProfile";
import AddPost from "../post/AddPost";
import AddService from "../services/AddService";
import Services from "../services/Services";
import ServiceFullInfo from "../services/ServiceFullInfo";

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path="/postsFullInfo/:id" component={PostFullInfo} />
                <Route path="/lost/:id" component={LostFullInfo} />
                <Route path="/lost" component={LostList} />
                <Route path="/found/:id" component={FoundFullInfo} />
                <Route path="/found" component={FoundList} />
                <Route path="/services/add" component={AddService} />
                <Route path="/service/:id" component={ServiceFullInfo} />
                <Route path="/services/:type" component={Services} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/posts/add" component={AddPost} />
                <Route path="/posts" component={PostList} />
            </Switch>
        </div>
    );
};

export default Content;
