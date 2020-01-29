import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import removeAuthToken from "../../utils/removeAuthToken";

const Navbar = ({ user: { user, isAuthenticated, isBroadcaster }, logout }) => {
  useEffect(() => {
    if (!isAuthenticated) removeAuthToken();

    // eslint-disable-next-line
  }, []);

  //@todo Need to get this working and need to get the Navbar straightened out when logged in. Possibly concatenate the name or move it to middle
  const onLogout = () => {
    logout();
    //history.push("/");
  };

  const broadcasterLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/schedulegame">
          <i
            className="fas fa-calendar-alt"
            data-toggle="tooltip"
            data-placement="left"
            title="Schedule a Game"
          ></i>
          <span className="d-sm-none">Schedule Game</span>
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">
          <i
            className="fas fa-user"
            data-toggle="tooltip"
            data-placement="left"
            title="View Dashboard"
          ></i>{" "}
          <span className="d-sm-none">Profile</span>
        </Link>
      </li>
      <li>
        <a className="nav-link" onClick={onLogout} href="/">
          <i
            className="fas fa-sign-out-alt"
            data-toggle="tooltip"
            data-placement="left"
            title="Profile"
          ></i>{" "}
          <span className="d-sm-none">Dashboard</span>
          {/* <span className="hide-sm">Logout</span> */}
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          <i
            className="fas fa-info-circle"
            data-toggle="tooltip"
            data-placement="left"
            title="More Information"
          ></i>{" "}
          <span className="d-sm-none">About</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/broadcast">
          <i
            className="fas fa-search"
            data-toggle="tooltip"
            data-placement="left"
            title="Search Broadcasts"
          ></i>{" "}
          <span className="d-sm-none">Find Games</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/demo">
          <i
            className="fas fa-play"
            data-toggle="tooltip"
            data-placement="left"
            title="View Demo"
          ></i>{" "}
          <span className="d-sm-none">Demo</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          <i
            className="fas fa-user-plus"
            data-toggle="tooltip"
            data-placement="left"
            title="Register"
          ></i>{" "}
          <span className="d-sm-none">Register</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <i
            className="fas fa-sign-in-alt"
            data-toggle="tooltip"
            data-placement="left"
            title="Login"
          ></i>{" "}
          <span className="d-sm-none">Login</span>
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
            <i className="fas fa-microphone"></i>{" "}
            <span className="text-dark f-xl font-weight-bold">U</span> BROADCAST
            IT
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
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i
                    className="fas fa-home"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Home"
                  ></i>{" "}
                  <span className="d-sm-none">Home</span>
                </Link>
              </li>
              {isBroadcaster && broadcasterLinks}
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-offset"></div>
      <script>$('[data-toggle="tooltip"]').tooltip();</script>
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
