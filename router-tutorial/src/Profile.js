import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  kenny: {
    name: "차영부",
    description: "bz man trying to be a developer",
  },
  ssam: {
    name: "김채원",
    description: "ssam-moo",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>Cant find User</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
