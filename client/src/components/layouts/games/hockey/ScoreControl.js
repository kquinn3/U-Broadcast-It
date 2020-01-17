import React, { Fragment, useState } from "react";

const ScoreControl = props => {
  return (
    <Fragment>
      <div className="row mt-4  text-center">
        <div className="col p-0">
          <input
            className="margin-auto-1 bg-warning form-control w-90"
            type="text"
            name="txtUpdate"
            value={props.txtUpdate}
            onChange={props.onUpdate}
            disabled={props.status !== "active"}
            placeholder="Enter game update"
          />
        </div>
      </div>

      <div className="row text-center my-3 w-100 justify-content-around">
        <div className="col-3">
          <button
            className="w-80p px-2 text-danger"
            id="begin-broadcast"
            disabled={props.status === "active"}
            onClick={props.onBroadcast}
          >
            Start
          </button>
        </div>
        <div className="col-3">
          <button
            className="w-80p px-2 text-danger"
            disabled={props.status !== "active"}
            type="submit"
          >
            Update
          </button>
        </div>
        <div className="col-3">
          <button
            className="w-80p px-2 text-danger"
            id="end-broadcast"
            disabled={props.status !== "active"}
            onClick={props.onBroadcast}
          >
            Finish
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ScoreControl;
