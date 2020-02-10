import React, { Fragment } from "react";

import ProSportsImg from "../../../assets/img/about_page/tom_bruins.png";
import VictoriaImg from "../../../assets/img/about_page/victoria_cropped.jpeg";

const AboutInfoSmall = () => {
  return (
    <Fragment>
      <div className="container bg-light w-max-about">
        <div className="row text-center">
          <div className="w-100">
            <div className="jumbotron bg-light">
              <div className="card my-3">
                <div className="row">
                  <div className="w-100">
                    <div className="row card-body">
                      <div className="w-100">
                        <strong>Professional Sporting Events</strong>
                      </div>
                      <div className="col-4 bg-light text-left">
                        <img
                          className="card-img img-responsive m-2"
                          src={ProSportsImg}
                          alt="Professional hockey game"
                        />
                      </div>
                      <div className="col-8 text-left">
                        <p className="my-2">
                          <strong>You have choices</strong>
                        </p>
                        <p>
                          <i className="m-1 fas fa-check bg-primary text-light"></i>
                          Attend it
                        </p>
                        <p>
                          <i className="m-1 fas fa-check bg-primary text-light"></i>
                          Watch it
                        </p>
                        <p>
                          <i className="m-1 fas fa-check bg-primary text-light"></i>
                          Track it
                        </p>
                      </div>
                    </div>

                    {/* <!-- ANIMATED --> */}
                    <br />
                    <div className="row progress">
                      <div className="w-100 progress-bar progress-bar-striped progress-bar-animated bg-primary prog-bar"></div>
                    </div>
                    <br />
                    {/* <!-- END ANIMATED --> */}

                    <div className="row card-body">
                      <div className="w-100">
                        <strong>Amateur Sporting Events</strong>
                      </div>
                      <div className="order-2 col-4 bg-light text-right">
                        <img
                          className="card-img img-responsive m-2"
                          src={VictoriaImg}
                          alt="Professional hockey game"
                        />
                      </div>
                      <div className="order-1 col-8 text-left">
                        <p className="my-2">
                          <strong>Do You have choices?</strong>
                        </p>
                        <p>
                          <i className="m-1 fas fa-check bg-primary text-light"></i>
                          Attend it{" "}
                        </p>
                        <p>
                          <i className="m-1 fas fa-times bg-danger text-light"></i>
                          Watch it
                        </p>
                        <p>
                          <i className="m-1 fas fa-times bg-danger text-light"></i>
                          Track it
                        </p>
                      </div>
                    </div>

                    {/* <!-- ANIMATED --> */}
                    <br />
                    <div className="row progress">
                      <div className="w-100 progress-bar progress-bar-striped progress-bar-animated bg-primary prog-bar"></div>
                    </div>
                    <br />
                    {/* <!-- END ANIMATED --> */}

                    <div className="row card-body">
                      <div className="col-12">
                        <p>
                          <strong className="text-center">
                            With U Broadcast It
                          </strong>
                        </p>
                        <p className="mb-2">
                          <strong className="text-center">
                            Now You have choices
                          </strong>
                        </p>

                        <p className="text-left">
                          <i className="m-1 fas fa-check bg-primary text-light"></i>
                          Register the game
                        </p>
                        <p className="text-left">
                          <i className="m-1 fas fa-check bg-primary text-light"></i>
                          Go and broadcast it
                        </p>
                        <p className="text-left">
                          <i className="m-1 fas fa-check bg-primary text-light"></i>
                          Track it on U Broadcast It
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutInfoSmall;
