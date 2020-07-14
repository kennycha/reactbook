import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>About</h1>
      <p>This project is about react-routing tutorial</p>
      {showDetail && <p>You set the detail value to true</p>}
    </div>
  );
};

export default About;
