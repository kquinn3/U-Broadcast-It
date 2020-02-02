import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "../../layouts/Profile";
import FutureGames from "../../layouts/FutureGames";
import {
  getMyGames,
  getFavoriteGames,
  getDefaultGames
} from "../../../actions/gameActions";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const HomeBroadcaster = ({
  user,
  getMyGames,
  getFavoriteGames,
  getDefaultGames
}) => {
  useEffect(() => {
    getMyGames(user.user._id);
    getDefaultGames(user.user.zipcode, user.user.radius);
    getFavoriteGames(user.user.team);
  }, [user]);

  return (
    <Fragment>
      <div className="container">
        <div className="row my-3">
          {/* Left - Profile Column */}
          <div className="col-lg-4">
            <Profile />
            <div className="card card-body bg-light mb-4">
              <h1>Archived Games</h1>
              <h2 className="text-danger text-center">To be added</h2>
            </div>
          </div>
          {/* Right Upcoming Games Column */}
          <div className="col-lg-8">
            <FutureGames type="my" />
            <FutureGames type="favorite" />
            <FutureGames type="defaults" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HomeBroadcaster.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {
  getMyGames,
  getFavoriteGames,
  getDefaultGames
})(HomeBroadcaster);
