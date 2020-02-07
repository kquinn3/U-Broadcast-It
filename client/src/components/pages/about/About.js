import React, { Fragment } from "react";

import AboutInfoSmall from "./AboutInfoSmall";
import AboutInfoLarge from "./AboutInfoLarge";
import Roles from "./squares/Roles";
import Profile from "./squares/Profile";
import Search from "./squares/Search";
import Schedule from "./squares/Schedule";
import SmallGame from "./squares/SmallGame";
import LargeGame from "./squares/LargeGame";
import ScoreboardControls from "./squares/ScoreboardControls";
import AddMessage from "./squares/AddMessage";
import LeaveSuggestion from "./squares/LeaveSuggestion";


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

          <Roles  />
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
