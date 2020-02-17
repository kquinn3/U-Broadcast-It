import React, { Fragment } from "react";

const ScoreSelect = props => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-4 p-0">
          <button
            id="newScore1"
            type="button"
            onClick={props.onSelectParam}
            className="btn border border-warning rounded bg-warning f-md p-2"
          >
            {props.score1}
          </button>
        </div>
        <div className="col-4 p-0">
          <button
            id="newMinutes"
            type="button"
            onClick={props.onSelectParam}
            className="btn border border-warning rounded bg-warning f-md p-2"
          >
            {props.minutes < 10 && 0}
            {props.minutes}
          </button>
          <span style={{ color: "red", margin: "0 2px" }}>:</span>
          <button
            id="newSeconds"
            type="button"
            onClick={props.onSelectParam}
            className="btn border border-warning rounded bg-warning f-md p-2"
          >
            {props.seconds < 10 && 0}
            {props.seconds}
          </button>

          <div className="my-2">
            <button
              id="newPeriod"
              type="button"
              onClick={props.onSelectParam}
              className="btn border border-warning rounded bg-light f-md p-2"
            >
              {props.period}
            </button>
          </div>
        </div>
        <div className="col-4 p-0">
          <button
            id="newScore2"
            type="button"
            onClick={props.onSelectParam}
            className="btn border border-warning rounded bg-warning f-md p-2"
          >
            {props.score2}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ScoreSelect;
