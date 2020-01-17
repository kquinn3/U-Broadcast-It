import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FutureGames from "../layouts/FutureGames";
import PropTypes from "prop-types";

const Home = ({ user: { user, isAuthenticated } }) => {
  const authGuest = (
    <Fragment>
      <h1>Hello Guest</h1>
      <FutureGames />
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
