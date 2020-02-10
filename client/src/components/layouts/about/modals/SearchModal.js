import React, { Fragment } from "react";

const SearchModal = (
  <Fragment>
    <h6 className="text-left my-3">
      A Filtered search is available to all guests and registered users
    </h6>
    <h6 className="text-left my-3">
      Change Search Radius and Zipcode. You also have the choice of filtering by
      team and sport.{" "}
    </h6>
    <h6 className="text-left my-3">
      The upcoming broadcasts of your search will be displayed.
    </h6>
    <h6 className="text-left my-3 table-warning">
      Scheduled games are in yellow.
    </h6>
    <h6 className="text-left my-3 table-success">Active games are in green.</h6>
    <h6 className="text-left my-3 table-danger">Completed games are in red.</h6>
  </Fragment>
);

export default SearchModal;
