import React, { Fragment } from "react";

const SmallGameModal = (
  <Fragment>
    <h6 className="text-left my-3">
      On small screens, the scoreboard will be displayed on top. The scoreboard
      will display "Scheduled", "Live" or "Final" depending on the status of the
      game.
    </h6>
    <h6 className="text-left my-3">
      Click the "Details" button for game location and time.
    </h6>
    <h6 className="text-left my-3">
      Click the "Updates" button to display updates that the broadcaster
      creates. Click "1st", "2nd" or "3rd" to see updates for that specific
      period.
    </h6>
    <h6 className="text-left my-3">
      Click the "Messages" button for to view or send a message. You must have
      an account to send a message.
    </h6>
  </Fragment>
);

export default SmallGameModal;
