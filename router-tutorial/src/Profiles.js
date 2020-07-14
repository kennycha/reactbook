import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h1>Profiles</h1>
      <h3>users: </h3>
      <ul>
        <li>
          <Link to="/profiles/kenny">Kenny</Link>
        </li>
        <li>
          <Link to="/profiles/ssam">Ssam</Link>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>Choose a user</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
