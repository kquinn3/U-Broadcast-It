import React, { Fragment, useState } from "react";
import Updates from "./Updates";
import Messages from "./Messages";
import Details from "./Details";

const MobileScreen = () => {
  const [mobileView, setMobileView] = useState("details");

  const onMobile = e => {
    e.preventDefault();
    //check if state doesn't equal clicked button, remove active class from old state and put it on button clicked and check state to clicked button
    if (e.target.id !== mobileView) {
      e.target.classList.add("active");
      document.querySelector(`#${mobileView}`).classList.remove("active");
      setMobileView(e.target.id);
    }
  };
  const padding = (
    <Fragment>
      <br />
      <br />
      <br />
      <Details />
    </Fragment>
  );

  return (
    <Fragment>
      <div className="hockey-mobile-buttons w-max">
        <div className="btn-group text-center mb-3 w-max">
          <button
            id="details"
            className="btn btn-primary active"
            type="button"
            onClick={onMobile}
          >
            Details
          </button>
          <button
            id="updates"
            className="btn btn-primary"
            type="button"
            onClick={onMobile}
          >
            Updates
          </button>
          <button
            id="messages"
            className="btn btn-primary"
            type="button"
            onClick={onMobile}
          >
            Messages
          </button>
        </div>
      </div>
      <div className="hockey-mobile-info w-90MM">
        {mobileView === "details" ? (
          padding
        ) : mobileView === "updates" ? (
          <Updates />
        ) : (
          <Messages />
        )}
      </div>
    </Fragment>
  );
};

export default MobileScreen;
