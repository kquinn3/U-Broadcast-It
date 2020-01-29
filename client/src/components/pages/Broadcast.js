import React, { Fragment, useState } from "react";
import { getMyFilteredGames } from "../../actions/gameActions";
import { connect } from "react-redux";
import FutureGames from "../layouts/FutureGames";
import PIC_LP from "../../assets/img/lake_placid_1.jpeg";

const Broadcast = ({ getMyFilteredGames }) => {
  const [search, setSearch] = useState({
    miles: "",
    zipcode: "",
    team: "",
    sport: "all"
  });
  const { miles, zipcode, team, sport } = search;

  //Get all inputs
  const onChange = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const onSport = e => {
    setSearch({ ...search, sport: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("miles", miles);
    console.log("zipcode", zipcode);
    console.log("team", team);
    console.log("sport", sport);
    const filtered = {
      miles,
      zipcode,
      team,
      sport
    };
    getMyFilteredGames(filtered);
  };

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="row my-3">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card card-body bg-light mb-4">
                <h4 className="mb-3">
                  <i className="fas fa-search mr-3"></i>By Location
                </h4>
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="miles"
                          value={miles}
                          required
                          placeholder="Miles From"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="zipcode"
                          value={zipcode}
                          placeholder="Enter Zipcode"
                          required
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>

                  <h4 className="mb-3">
                    <i className="fas fa-filter mr-3"></i>Filter
                  </h4>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="team"
                      value={team}
                      placeholder="team name"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="sport"
                      className="mb-2 form-control"
                      onChange={onSport}
                    >
                      <option value="all">All Sports</option>
                      <option value="hockey">Hockey</option>
                      <option value="basketball">Basketball</option>
                    </select>
                  </div>

                  <input
                    type="submit"
                    value="Find Games"
                    className="btn btn-primary btn-block"
                  />
                </form>
              </div>

              <div className="d-none d-md-block card bg-light">
                <img
                  className="card-img-top img-fluid"
                  src={PIC_LP}
                  alt="Lake Placid hockey scoreboard"
                />
                <div className="card-body text-center">
                  <h4>Lake Placid</h4>
                  <p>Site of the 1980 US Gold Medal </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <FutureGames />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

// Broadcast.propTypes = {
//   game: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  getMyFilteredGames
})(Broadcast);
