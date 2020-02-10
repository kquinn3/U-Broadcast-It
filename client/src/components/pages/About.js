import React, { Fragment } from "react";

import AboutInfoSmall from "../layouts/about/AboutInfoSmall";
import AboutInfoLarge from "../layouts/about/AboutInfoLarge";
import Roles from "../layouts/about/squares/Roles";
import Profile from "../layouts/about/squares/Profile";
import Search from "../layouts/about/squares/Search";
import Schedule from "../layouts/about/squares/Schedule";
import SmallGame from "../layouts/about/squares/SmallGame";
import LargeGame from "../layouts/about/squares/LargeGame";
import ScoreboardControls from "../layouts/about/squares/ScoreboardControls";
import AddMessage from "../layouts/about/squares/AddMessage";
import LeaveSuggestion from "../layouts/about/squares/LeaveSuggestion";

const About = () => {
  return (
    <Fragment>
      <div className="d-lg-none">
        <AboutInfoSmall />
      </div>

      <div className="d-none d-lg-block">
        <AboutInfoLarge />
      </div>

      <div className="container bg-light">
        <div className="row text-center">
          <Roles />
          <Profile />
          <Search />
          <Schedule />
          <SmallGame />
          <LargeGame />
          <ScoreboardControls />
          <AddMessage />
          <LeaveSuggestion />
        </div>
      </div>
    </Fragment>
  );
};
export default About;
