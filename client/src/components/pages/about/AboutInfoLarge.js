import React, { Fragment } from "react";

import ProSportsImg from "../../../assets/img/about_page/tom_bruins.png";
import VictoriaImg from "../../../assets/img/about_page/victoria_cropped.jpeg";

const AboutInfoLarge = () => {
  return (
    <Fragment>
      <div className="container bg-light">
        <div className="row text-center">
          <div className="w-100">
            <div class="jumbotron bg-light">
              <div className="card my-3">
                <div className="row card-body">
                  <div className="order-1 col-4 bg-light text-left">
                    <img
                      className="card-img img-responsive m-2"
                      src={ProSportsImg}
                      alt="Professional hockey game"
                    />
                  </div>
                  <div className="order-3 col-4 bg-light text-right">
                    <img
                      className="card-img img-responsive m-2"
                      src={VictoriaImg}
                      alt="Professional hockey game"
                    />
                  </div>

                  {/* Center Column */}
                  <div className="order-2 col-4">
                    <div class="d-flex flex-column">
                      {/* Top */}
                      <div className="h-about-pic">
                        <h5 className="bg-primary text-light text-center my-2">
                          <strong>Professional Sports</strong>
                        </h5>
                        <div className="text-center">
                          <h6 className="my-2">
                            <strong>You have choices</strong>
                          </h6>
                        </div>
                        <div className="text-left">
                          <p>
                            <i className="m-1 fas fa-check bg-primary text-light"></i>
                            Attend the game
                          </p>
                          <p>
                            <i className="m-1 fas fa-check bg-primary text-light"></i>
                            Watch the game on tv
                          </p>
                          <p>
                            <i className="m-1 fas fa-check bg-primary text-light"></i>
                            Track the game on the internet
                          </p>
                        </div>
                      </div>

                      {/* Middle */}
                      <div className="h-about-pic">
                        <h5 className="bg-primary text-light text-center my-2">
                          <strong>Amateur Sports</strong>
                        </h5>
                        <div className="text-center">
                          <h6 className="my-2">
                            <strong>Do You have choices?</strong>
                          </h6>
                        </div>
                        <div className="text-left">
                          <p className="my-2"></p>
                          <p>
                            <i className="m-1 fas fa-check bg-primary text-light"></i>
                            Attend the game{" "}
                          </p>
                          <p>
                            <i className="m-1 fas fa-times bg-danger text-light"></i>
                            Watch the game on tv
                          </p>
                          <p>
                            <i className="m-1 fas fa-times bg-danger text-light"></i>
                            Track the game on the internet
                          </p>
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="h-about-pic">
                        <h5 className="bg-primary text-light text-center my-2">
                          <strong>With U Broadcast It</strong>
                        </h5>
                        <div className="text-center">
                          <h6 className="my-2">
                            <strong>Now You have choices</strong>
                          </h6>
                        </div>
                        <div className="text-right">
                          <p className="text-left">
                            <i className="m-1 fas fa-check bg-primary text-light"></i>
                            Register the game online
                          </p>
                          <p className="text-left">
                            <i className="m-1 fas fa-check bg-primary text-light"></i>
                            Go to the game and broadcast it
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
      </div>
    </Fragment>
  );
};
export default AboutInfoLarge;
