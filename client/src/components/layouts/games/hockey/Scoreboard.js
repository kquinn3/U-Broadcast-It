import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EditScoreboard from "./EditScoreboard";
import {
  viewEditScoreboard,
  noViewEditScoreboard
} from "../../../../actions/gameActions";

const Scoreboard = ({ game, viewEditScoreboard, noViewEditScoreboard }) => {
  const onEditScoreboard = () => {
    //ToDo: Change button color, slow down the display
    game.isViewEditScoreboard ? noViewEditScoreboard() : viewEditScoreboard();
  };

  const editButton = (
    <Fragment>
      <button onClick={onEditScoreboard}>
        <i className="fas fa-edit text-body "></i>
      </button>
    </Fragment>
  );

  const removeEditButton = (
    <Fragment>
      <button onClick={onEditScoreboard}>
        <i className="fas fa-minus-circle text-body "></i>
      </button>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="row justify-content-center">
        {game.status === "active" && <p className="text-danger f-lg">Live</p>}
        {game.status === "scheduled" && (
          <p className="text-warning f-lg">Scheduled</p>
        )}
        {game.status === "completed" && (
          <p className="text-warning f-lg">Final</p>
        )}
      </div>
      <div className="row text-center">
        <div className="col-4 p-0">
          <p className="text-warning f-sm p-2">
            {game.name.team1.substring(0, 8)}
          </p>
          <span className="border border-warning rounded  text-danger f-md p-1 hockey-score-item">
            {game.score.hockey.score1}
          </span>
        </div>
        <div className="col-4 p-0">
          <div className="my-2">
            <span className="border border-warning rounded  text-danger f-md p-1 hockey-score-item">
              {game.score.hockey.time.minutes < 10 && 0}
              {game.score.hockey.time.minutes}
            </span>
            <span style={{ color: "red", margin: "0 2px" }}>:</span>
            <span className="border border-warning rounded  text-danger f-md p-1 hockey-score-item">
              {game.score.hockey.time.seconds < 10 && 0}
              {game.score.hockey.time.seconds}
            </span>
          </div>
          <div className="p-1">
            <span className="border border-warning rounded  text-danger f-sm p-1 hockey-score-item">
              {game.score.hockey.period}
            </span>
          </div>
          <p className="text-warning f-xs p-1">period</p>
        </div>
        <div className="col-4 p-0">
          <p className="text-warning f-sm p-2">
            {game.name.team2.substring(0, 8)}
          </p>
          <span className="border border-warning rounded  text-danger f-md p-1 hockey-score-item">
            {game.score.hockey.score2}
          </span>
          <div className="my-2">
            {game.isGameOwner
              ? viewEditScoreboard
                ? removeEditButton
                : editButton
              : null}
          </div>
        </div>
      </div>
      {game.isViewEditScoreboard && <EditScoreboard />}
    </Fragment>
  );
};

Scoreboard.propTypes = {
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  viewEditScoreboard,
  noViewEditScoreboard
})(Scoreboard);
