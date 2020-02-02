import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function HomeGuest() {
  return (
    <Fragment>
      <LandingQuarter
        region="landing-top-left"
        text1="It's the big game"
        text2="...and you can't be there"
      />

      <LandingQuarter
        region="landing-top-right"
        text1="Search U Broadcast It"
        text2="...and track the game"
      />

      <LandingQuarter
        region="landing-bottom-right"
        text1="When something happens"
        text2="...the broadcaster will send the update"
      />
      <LandingQuarter
        region="landing-bottom-left"
        text1="and you will get the result"
        text2="...when it happens"
      />
      <LandingFinal />
    </Fragment>
  );
}

const LandingQuarter = ({ region, text1, text2 }) => {
  const outerDiv = `${region} align-items-stretch justify-content-end`;
  return (
    <Fragment>
      <div className={outerDiv}>
        <p className="text-light bg-primary f-xl font-weight-bold">{text1}</p>
        <p className="text-light bg-primary f-xl font-weight-bold">{text2}</p>
      </div>
    </Fragment>
  );
};

const ButtonGroup = ({ btnSize, btnType }) => {
  const linkTo = `/${btnType}`;
  let btnClass =
    btnSize === "xs"
      ? "btn btn-primary btn-rounded btn-sm align-self-center m-1"
      : "btn btn-primary btn-rounded btn-lg align-self-center m-5";
  let iClass = "",
    iText = "";
  if (btnType === "about") {
    iClass = "fas fa-info-circle";
    iText = " Learn More";
  } else if (btnType === "demo") {
    iClass = "fas fa-play";
    iText = " View Demo";
  } else {
    iClass = "fas fa-search";
    iText = " Search Games";
  }

  return (
    <Fragment>
      <Link to={linkTo}>
        <button className={btnClass} type="button">
          <i className={iClass}></i> {iText}
        </button>
      </Link>
    </Fragment>
  );
};
const LandingFinal = () => {
  const XSmallButtons = "col d-flex d-sm-none justify-content-center";
  const SmallButtons = "col d-sm-flex d-none justify-content-center";

  return (
    <Fragment>
      <div className="landing">
        <div className="row align-items-end h-50">
          <div className={XSmallButtons}>
            <ButtonGroup btnSize="xs" btnType="about" />
            <ButtonGroup btnSize="xs" btnType="demo" />
            <ButtonGroup btnSize="xs" btnType="broadcast" />
          </div>
          <div className={SmallButtons}>
            <ButtonGroup btnSize="sm" btnType="about" />
            <ButtonGroup btnSize="sm" btnType="demo" />
            <ButtonGroup btnSize="sm" btnType="broadcast" />
          </div>
        </div>

        <div className="row align-items-end h-50">
          <div className="col">
            <p className="text-light bg-primary f-xl font-weight-bold">
              Let's get started
            </p>
            <p className="text-light bg-primary f-xl font-weight-bold">
              ...and enjoy the game
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
