import React, { Fragment, useState } from "react";
import Updates from "./Updates";
import Messages from "./Messages";
import Details from "./Details";

const WideScreen = () => {
  return (
    <Fragment>
      <div className="hockey-wide-info">
        <div className="row my-2">
          <div className="my-3 offset-3 col-6">
            <Details />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Updates />
          </div>
          {/* <div className="col-2">
          <Details />
        </div> */}
          <div className="col-6">
            <Messages />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WideScreen;
