import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FutureGames from "../layouts/FutureGames";
import PropTypes from "prop-types";

const Home = ({ user: { user, isAuthenticated } }) => {
  const authGuest = (
    <Fragment>
      <div className="landing">
        <div className="row align-items-end h-50">
          <div className="col d-flex d-sm-none justify-content-center">
            <Link to="/about">
              <button
                className="btn btn-primary btn-rounded btn-sm align-self-center m-1"
                type="button"
              >
                <i className="fas fa-info-circle"></i> Learn More
              </button>
            </Link>
            <Link to="/demo">
              <button
                className="btn-primary btn-rounded btn-sm align-self-center m-1"
                type="button"
              >
                <i className="fas fa-play"></i> View Demo
              </button>
            </Link>
            <Link to="/broadcast">
              <button
                className="btn btn-primary btn-rounded btn-sm align-self-center m-1"
                type="button"
              >
                <i className="fas fa-search"></i> Search Games
              </button>
            </Link>
          </div>
          <div className="col d-sm-flex d-none justify-content-center">
            <Link to="/about">
              <button
                className="btn btn-primary btn-rounded btn-lg align-self-center m-5"
                type="button"
              >
                <i className="fas fa-info-circle"></i> Learn More
              </button>
            </Link>
            <Link to="/demo">
              <button
                className="btn-primary btn-rounded btn-lg align-self-center m-5"
                type="button"
              >
                <i className="fas fa-play"></i> View Demo
              </button>
            </Link>
            <Link to="/broadcast">
              <button
                className="btn btn-primary btn-rounded btn-lg align-self-center m-5"
                type="button"
              >
                <i className="fas fa-search"></i> Search Games
              </button>
            </Link>
          </div>
        </div>
        <div className="row align-items-end h-50">
          <div className="col">
            <p className="text-light bg-primary f-xl font-weight-bold">
              Let's get started
            </p>
            <p className="text-light bg-primary f-xl font-weight-bold">
              ...and enjoy the game
            </p>
          </div>
        </div>
      </div>

      <div className="landing-top-left align-items-stretch justify-content-end">
        <p className="text-light bg-primary f-xl font-weight-bold">
          It's the big game
        </p>
        <p className="text-light bg-primary f-xl font-weight-bold">
          ...and you can't be there
        </p>
      </div>

      <div className="landing-top-right align-items-stretch justify-content-end">
        <p className="text-light bg-primary f-xl font-weight-bold">
          Search U Broadcast It
        </p>
        <p className="text-light bg-primary f-xl font-weight-bold">
          ...and track the game
        </p>
      </div>

      <div className="landing-bottom-right align-items-stretcj justify-content-end">
        <p className="text-light bg-primary f-xl font-weight-bold">
          When something happens
        </p>
        <p className="text-light bg-primary f-xl font-weight-bold">
          ...the broadcaster will send the update
        </p>
      </div>

      <div className="landing-bottom-left align-items-stretch justify-content-end">
        <p className="text-light bg-primary f-xl font-weight-bold">
          and you will get the result
        </p>
        <p className="text-light bg-primary f-xl font-weight-bold">
          ...when it happens
        </p>
      </div>

      {/* <FutureGames /> */}
    </Fragment>
  );

  const authUser = (
    <Fragment>
      <h1>Hello User</h1>
      <FutureGames />
    </Fragment>
  );

  const authBroadcaster = (
    <Fragment>
      <FutureGames />
      <Link className="nav-link" to="../schedulegame">
        Schedule a Broadcast
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      {isAuthenticated
        ? user.role === "user"
          ? authUser
          : authBroadcaster
        : authGuest}
    </Fragment>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Home);
