import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const HomeUser = () => {
  return (
    <Fragment>
      <h1>Welcome User</h1>
    </Fragment>
  );
};

HomeUser.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(HomeUser);
