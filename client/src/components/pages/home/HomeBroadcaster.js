import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "../../layouts/Profile";
import FutureGames from "../../layouts/FutureGames";
import PIC_LP from "../../../assets/img/lake_placid_10.jpeg";
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
            <div className="d-none d-md-block card bg-light">
              <img
                className="card-img-top img-fluid"
                src={PIC_LP}
                alt="Lake Placid hockey scoreboard"
              />
              <div className="card-body text-center">
                <h4>Lake Placid</h4>
                <p>Youth Hockey Tournament, January 2020</p>
                <p>Champions Franklin, Ma </p>
              </div>
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
