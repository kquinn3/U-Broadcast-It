import React, { Fragment } from "react";

const ProfileModal = (
  <Fragment>
    <h6 className="text-left my-3">
      When you login your profile is displayed on the top left
    </h6>
    <h6 className="text-left my-3">
      Change Default Search Radius, Zipcode and Favorite Team. Hit the save
      button to save selections.{" "}
    </h6>
    <h6 className="text-left my-3">
      Your Broadcasts will display for broadcasters
    </h6>
    <h6 className="text-left my-3">
      Broadcasts of your favorite team and in your selected area will display
    </h6>
    <h6 className="text-left my-3 table-warning">
      Scheduled games are in yellow.
    </h6>
    <h6 className="text-left my-3 table-success">Active games are in green.</h6>
    <h6 className="text-left my-3 table-danger">Completed games are in red.</h6>
  </Fragment>
);

export default ProfileModal;
