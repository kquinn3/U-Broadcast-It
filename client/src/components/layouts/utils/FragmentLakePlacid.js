import React, { Fragment } from "react";
import PIC_LP_SEARCH from "../../../assets/img/lake_placid_1.jpeg";
import PIC_LP_DASHBOARD from "../../../assets/img/lake_placid_10.jpeg";

// Home User and Broadcaster page, reg="dashboard"
const FragmentLakePlacid = ({ reg }) => {
  return (
    <Fragment>
      <div className="d-none d-md-block card bg-light">
        <img
          className="card-img-top img-fluid"
          src={reg === "search" ? PIC_LP_SEARCH : PIC_LP_DASHBOARD}
          alt="Lake Placid hockey scoreboard"
        />
        <div className="card-body text-center">
          <h4>Lake Placid</h4>
          {reg === "search" ? (
            <p>Site of the 1980 US Gold Medal </p>
          ) : (
            <Fragment>
              <p>Youth Hockey Tournament, January 2020</p>
              <p>Champions Franklin, Ma </p>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default FragmentLakePlacid;
