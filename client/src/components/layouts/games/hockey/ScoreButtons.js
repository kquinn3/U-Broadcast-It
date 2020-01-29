import React, { Fragment } from "react";

const ScoreButtons = props => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col p-0">
          <button
            id="newPlus"
            className="mx-1 px-3 text-danger"
            disabled={props.status !== "active"}
            onClick={props.onScoreButton}
          >
            +
          </button>
          <button
            id="newMinus"
            className="mx-1 px-3 text-danger"
            disabled={props.status !== "active"}
            onClick={props.onScoreButton}
          >
            -
          </button>

          <button
            id="newZero"
            className="mx-1 px-3 text-danger"
            disabled={props.status !== "active"}
            onClick={props.onScoreButton}
          >
            0
          </button>
          <button
            id="newReset"
            className="mx-1 text-danger"
            disabled={props.status !== "active"}
            onClick={props.onScoreButton}
          >
            Reset
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ScoreButtons;
