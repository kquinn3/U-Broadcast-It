import React, { Fragment } from "react";
import { connect } from "react-redux";
import HomeGuest from "../layouts/home/HomeGuest";
import HomeAuthorized from "../layouts/home/HomeAuthorized";
import PropTypes from "prop-types";
import "../../assets/css/Landing.css";

const Home = ({ user: { user, isAuthenticated } }) => {
  return (
    <Fragment>{isAuthenticated ? <HomeAuthorized /> : <HomeGuest />}</Fragment>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Home);
