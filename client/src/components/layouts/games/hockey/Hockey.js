import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Scoreboard from "./Scoreboard.js";
import MobileScreen from "../MobileScreen";
import WideScreen from "../WideScreen";

const Hockey = ({ game }) => {
  return (
    <Fragment>
      <div className="game-hockey"></div>
      <div className="hockey-scoreboard my-2 justify-content-center w-max">
        <Scoreboard />
      </div>
      <div className="d-md-none">
        <MobileScreen />
      </div>
      <div className="d-none d-md-block">
        <WideScreen />
      </div>
    </Fragment>
  );
};

Hockey.propTypes = {
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, null)(Hockey);
