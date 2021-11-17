import React from "react";
import { Route, Switch } from "react-router-dom";
import PostList from "../post/PostList";
import PostFullInfo from "../post/PostFullInfo";
import UserProfile from "../user/UserProfile";
import AddPost from "../post/AddPost";
import AddService from "../services/AddService";
import Services from "../services/Services";
import ServiceFullInfo from "../services/ServiceFullInfo";
import AddLostPost from "../pets/AddLostPost";
import PetsList from "../pets/PetsList";
import PetFullInfo from "../pets/PetFullInfo";

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route path="/postsFullInfo/:id" component={PostFullInfo} />
                <Route path="/lost/add" component={AddLostPost} />
                <Route path="/lost" component={PetsList} />
                <Route path="/pet/:id" component={PetFullInfo} />
                <Route path="/found" component={PetsList} />
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
