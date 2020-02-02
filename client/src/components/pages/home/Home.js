import React, { Fragment } from "react";
import { connect } from "react-redux";
import HomeGuest from "./HomeGuest";
import HomeUser from "./HomeUser";
import HomeBroadcaster from "./HomeBroadcaster";
import PropTypes from "prop-types";

const Home = ({ user: { user, isAuthenticated } }) => {
  return (
    <Fragment>
      {isAuthenticated ? (
        user.role === "user" ? (
          <HomeUser />
        ) : (
          <HomeBroadcaster />
        )
      ) : (
        <HomeGuest />
      )}
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
