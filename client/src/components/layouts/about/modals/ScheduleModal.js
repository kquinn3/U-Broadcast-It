import React, { Fragment } from "react";

const ScheduleModal = (
  <Fragment>
    <h6 className="text-left my-3">
      To schedule a broadcast, there are 6 fields. Only users with a role of
      broadcaster will see this page.
    </h6>
    <h6 className="text-left my-3">
      Enter the address of the game. City, state and zipcode should be enough.
      This will be geocoded so that the area will be searchable.
    </h6>
    <h6 className="text-left my-3">
      A date & time picker will display, when the date field is clicked.
    </h6>
    <h6 className="text-left my-3">
      Enter both team names and select the sport. As sports are added, they will
      be selectable and not grayed out.
    </h6>
    <h6 className="text-left my-3">
      Click the save button to schedule the game.
    </h6>
  </Fragment>
);

export default ScheduleModal;
