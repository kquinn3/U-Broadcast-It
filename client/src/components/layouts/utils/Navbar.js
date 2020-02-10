import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import removeAuthToken from "../../../utils/removeAuthToken";

const NavbarItem = ({ link, iName, iTitle, iSpan }) => {
  return (
    <Fragment>
      <li className="nav-item" data-toggle="collapse" data-target="#navbarNav">
        <Link className="nav-link" to={link}>
          <i
            className={iName}
            data-toggle="tooltip"
            data-placement="left"
            title={iTitle}
          ></i>
          <span className="d-sm-none ml-2">{iSpan}</span>
        </Link>
      </li>
    </Fragment>
  );
};

const NavbarLogout = ({ click }) => {
  return (
    <Fragment>
      <li className="nav-item" data-toggle="collapse" data-target="#navbarNav">
        <button className="nav-link nav-btn" onClick={click}>
          <i
            className="fas fa-sign-out-alt"
            data-toggle="tooltip"
            data-placement="left"
            title="Logout"
          ></i>
          <span className="d-sm-none ml-2">Logout</span>
        </button>
      </li>
    </Fragment>
  );
};

const Navbar = ({ user: { isAuthenticated, isBroadcaster }, logout }) => {
  useEffect(() => {
    if (!isAuthenticated) removeAuthToken();

    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    console.log("Logout button is clicked");
    logout();
    window.location = "/login";
  };

  const guestLinks = (
    <Fragment>
      <NavbarItem link="/" iName="fas fa-home" iTitle="Home" iSpan="Home" />
      <NavbarItem
        link="/about"
        iName="fas fa-info-circle"
        iTitle="More Information"
        iSpan="About"
      />
      <NavbarItem
        link="/broadcast"
        iName="fas fa-search"
        iTitle="Search Broadcasts"
        iSpan="Find Games"
      />
      <NavbarItem
        link="/register"
        iName="fas fa-user-plus"
        iTitle="Register"
        iSpan="Register"
      />
      <NavbarItem
        link="/login"
        iName="fas fa-sign-in-alt"
        iTitle="Login"
        iSpan="Login"
      />
    </Fragment>
  );

  const userLinks = (
    <Fragment>
      <NavbarItem
        link="/"
        iName="fas fa-tachometer-alt"
        iTitle="Dashboard"
        iSpan="Dashboard"
      />
      <NavbarItem
        link="/about"
        iName="fas fa-info-circle"
        iTitle="More Information"
        iSpan="About"
      />
      <NavbarItem
        link="/broadcast"
        iName="fas fa-search"
        iTitle="Search Broadcasts"
        iSpan="Find Games"
      />
      <NavbarLogout click={onLogout} />
    </Fragment>
  );

  const broadcasterLinks = (
    <Fragment>
      <NavbarItem
        link="/"
        iName="fas fa-tachometer-alt"
        iTitle="Dashboard"
        iSpan="Dashboard"
      />
      <NavbarItem
        link="/about"
        iName="fas fa-info-circle"
        iTitle="More Information"
        iSpan="About"
      />
      <NavbarItem
        link="/broadcast"
        iName="fas fa-search"
        iTitle="Search Broadcasts"
        iSpan="Find Games"
      />
      <NavbarItem
        link="/schedulegame"
        iName="fas fa-calendar-alt"
        iTitle="Schedule Game"
        iSpan="Schedule Game"
      />
      <NavbarLogout click={onLogout} />
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary mb-3">
        <div className="container">
          {/* u-Broadcast it title */}
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
              {isAuthenticated
                ? isBroadcaster
                  ? broadcasterLinks
                  : userLinks
                : guestLinks}
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
