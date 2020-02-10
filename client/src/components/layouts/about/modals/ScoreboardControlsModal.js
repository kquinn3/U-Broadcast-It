import React, { Fragment } from "react";

const ScoreboardControlsModal = (
  <Fragment>
    <h6 className="text-left my-3">
      {" "}
      Click{" "}
      <button>
        <i className="fas fa-minus-circle text-body "></i>
      </button>{" "}
      to open and close the scoreboard controls.
    </h6>
    <h6 className="text-left my-3">
      Click the "Start" button to make the game "Live" and the "Finish" button
      to make the game "Final". If you accidentally, hit "Finish", you can
      restart the game, by hitting "Start".
    </h6>
    <h6 className="text-left my-3">
      Initially the "period" control will be selected and have a white color.
      The scores and time controls will be yellow and selectable.
    </h6>
    <h6 className="text-left my-3">
      When a control is selected hit the "+" "-" "0" or "Reset" buttons to
      adjust the selected parameter.
    </h6>
    <h6 className="text-left my-3">
      If you want to send details of the game, type it in the yellow box that
      says "Enter game update"
    </h6>
    <h6 className="text-left my-3">
      To send the scoreboard and game updates, click the "Update" button
    </h6>
  </Fragment>
);

export default ScoreboardControlsModal;
