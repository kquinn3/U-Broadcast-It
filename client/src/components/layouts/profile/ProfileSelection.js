import React, { Fragment } from "react";

const ProfileSelection = ({ profileType, paramFlag, paramNew, paramOld }) => {
  let pText, modalTarget;
  switch (profileType) {
    case "zipcode":
      pText = "Search zipcode";
      modalTarget = "#zipModal";
      break;
    case "radius":
      pText = "Search radius";
      modalTarget = "#radModal";
      break;
    case "favoriteTeam":
      pText = "Favorite Team";
      modalTarget = "#favTeamModal";
      break;
  }
  return (
    <Fragment>
      <div className="d-flex justify-content-between my-2">
        <p>{pText}</p>
        {paramFlag ? (
          <p className="mx-1 bg-warning">{paramNew} </p>
        ) : (
          <p className="mx-1">{paramOld} </p>
        )}
        <button data-toggle="modal" data-target={modalTarget}>
          <i className="mx-1 fas fa-edit text-primary"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default ProfileSelection;
