import React, { Fragment } from "react";
import RolesRegImg from "../../../assets/img/about_page/elizabeth_christina.jpeg";
import ProfileImg from "../../../assets/img/about_page/dashboard.PNG";
import SearchImg from "../../../assets/img/about_page/all_search.PNG";
import ScheduleImg from "../../../assets/img/about_page/schedule.PNG";
import SmallScreenImg from "../../../assets/img/about_page/smallScreen.PNG";
import BigScreenImg from "../../../assets/img/about_page/bigScreen.PNG";
import ScoreboardImg from "../../../assets/img/about_page/scoreboardControls.PNG";
import MessageImg from "../../../assets/img/about_page/messages.PNG";
import IdeasImg from "../../../assets/img/about_page/ideas.jpg";
import AboutInfoSmall from "./AboutInfoSmall";
import AboutInfoLarge from "./AboutInfoLarge";

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
          {/* Roles & Registration Card */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Roles & Registration</h4>
              </div>
              <div className="card-body bg-light">
                <img
                  className="card-img img-responsive"
                  src={RolesRegImg}
                  alt=""
                />
                <h4 className="card-title my-3">Determine Your Role</h4>
              </div>
            </div>
          </div>

          {/* Profile & Broadcasts */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Profile & Broadcasts</h4>
              </div>
              <div className="card-body bg-light">
                <img className="card-img img-fluid" src={ProfileImg} alt="" />
                <h4 className="card-title my-3">Profile & Broadcasts</h4>
              </div>
            </div>
          </div>

          {/* Filtered Search */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Filtered Search</h4>
              </div>
              <div className="card-body bg-light">
                <img className="card-img img" src={SearchImg} alt="" />
                <h4 className="card-title my-3">Filter By Team and Sport</h4>
              </div>
            </div>
          </div>

          {/* Scheduling a Game Card */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Schedule A Game</h4>
              </div>
              <div className="card-body bg-light">
                <img className="card-img img" src={ScheduleImg} alt="" />
                <h4 className="card-title my-3">Scheduling A Game is Easy</h4>
              </div>
            </div>
          </div>

          {/* Game Screen Mobile */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Game Screen</h4>
              </div>
              <div className="card-body bg-light">
                <img className="card-img img" src={SmallScreenImg} alt="" />
                <h4 className="card-title my-3">Small Game Screen</h4>
              </div>
            </div>
          </div>

          {/* Game Screen Mobile */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Game Screen</h4>
              </div>
              <div className="card-body bg-light">
                <img className="card-img img" src={BigScreenImg} alt="" />
                <h4 className="card-title my-3">Big Game Screen</h4>
              </div>
            </div>
          </div>

          {/* Scoreboard Controls */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Scoreboard Controls</h4>
              </div>
              <div className="card-body bg-light">
                <img className="card-img img" src={ScoreboardImg} alt="" />
                <h4 className="card-title my-3">Scoreboard Instructions</h4>
              </div>
            </div>
          </div>

          {/* Message Controls */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Adding Messages</h4>
              </div>
              <div className="card-body bg-light">
                <img className="card-img img" src={MessageImg} alt="" />
                <h4 className="card-title my-3">Message Instructions</h4>
              </div>
            </div>
          </div>
          {/* Suggestions */}
          <div className="col-12 col-md-6 col-lg-4 about">
            <div className="card my-3">
              <div className="card-header bg-primary text-light">
                <h4>Leave Suggestions</h4>
              </div>
              <div className="card-body bg-light">
                <img className="card-img img" src={IdeasImg} alt="" />
                <h4 className="card-title my-3">I'd Love to Hear From You</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
