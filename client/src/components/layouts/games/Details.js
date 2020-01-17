import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Details = ({ game }) => {
  const convertDate = d => {
    const _d = new Date(d);
    let _am = "";
    let _h = _d.getHours();
    if (_h >= 12) _am = "PM";
    else _am = "AM";
    if (_h > 12) _h -= 12;

    return `${_d.toDateString()} at ${_h}:${_d.getMinutes()}${_am}`;
  };
  return (
    <Fragment>
      <div className="details-container text-center f-sm w-90max">
        <p>
          {game.name.team1} vs {game.name.team2}
        </p>
        <p>
          Game is being played in {game.location.city},{game.location.state}
        </p>
        <p>Scheduled Time is</p>
        <p>{convertDate(game.eventTime)}</p>
      </div>
    </Fragment>
  );
};

Details.propTypes = {
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, null)(Details);
