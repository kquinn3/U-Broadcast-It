import React, { Fragment, useEffect } from "react";
import Profile from "../profile/Profile";
import FutureGames from "../FutureGames";
import FragmentLakePlacid from "../utils/FragmentLakePlacid";

import {
  getMyGames,
  getFavoriteGames,
  getDefaultGames
} from "../../../actions/gameActions";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const HomeAuthorized = ({
  user,
  getMyGames,
  getFavoriteGames,
  getDefaultGames
}) => {
  useEffect(() => {
    user.user.role === "broadcaster" && getMyGames(user.user._id);
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
            <FragmentLakePlacid reg="dashboard" />
          </div>
          {/* Right Upcoming Games Column */}
          <div className="col-lg-8">
            {user.user.role === "broadcaster" && <FutureGames type="my" />}
            <FutureGames type="favorite" />
            <FutureGames type="defaults" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HomeAuthorized.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {
  getMyGames,
  getFavoriteGames,
  getDefaultGames
})(HomeAuthorized);
