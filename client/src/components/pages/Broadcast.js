import React, { Fragment, useState } from "react";
import { getMyFilteredGames } from "../../actions/gameActions";
import { connect } from "react-redux";
import FutureGames from "../layouts/FutureGames";
import SearchWithFilter from "../layouts/searches/SearchWithFilter";
import FragmentLakePlacid from "../layouts/utils/FragmentLakePlacid";

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
              <SearchWithFilter
                onSubmit={onSubmit}
                onChange={onChange}
                onSport={onSport}
                miles={miles}
                zipcode={zipcode}
                team={team}
              />
              <FragmentLakePlacid reg="search" />
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

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  getMyFilteredGames
})(Broadcast);
