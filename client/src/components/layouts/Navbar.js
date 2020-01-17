import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import removeAuthToken from "../../utils/removeAuthToken";

const Navbar = ({ user: { user, isAuthenticated }, logout }) => {
  useEffect(() => {
    if (!isAuthenticated) removeAuthToken();

    // eslint-disable-next-line
  }, []);

  //@todo Need to get this working and need to get the Navbar straightened out when logged in. Possibly concatenate the name or move it to middle
  const onLogout = () => {
    logout();
    //history.push("/");
  };

  const authWelcome = (
    <Fragment>
      <li className="nav-item mr-5 text-dark navbar-brand font-weight-bold">
        <span className="nav-link">Hello {user && user.name}</span>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <a className="nav-link" onClick={onLogout} href="/">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary mb-3">
        {/* <nav className="navbar navbar-expand-sm bg-primary navbar-white"> */}
        <div className="container">
          <h1 className="navbar-brand">
            <i className="fas fa-chalkboard">U Broadcast It</i>
          </h1>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {isAuthenticated && authWelcome}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/broadcast">
                  Broadcasts
                </Link>
              </li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-offset"></div>
    </Fragment>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { logout })(Navbar);
