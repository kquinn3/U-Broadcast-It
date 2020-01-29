import React, { Fragment } from "react";
import FutureGamesItem from "./FutureGamesItem";
import { getMyGames } from "../../actions/gameActions";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const FutureGames = ({ game: { gamesScheduled }, getMyGames }) => {
  return (
    <Fragment>
      <div className="card bg-light">
        <h1 className="my-3 card-title text-center">Upcoming Broadcasts</h1>
        {gamesScheduled !== null ? (
          <div className="table-responsive-sm card-body">
            <table className="table-sm table-striped f-xs-lg">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th className="d-none d-md-block">Sport</th>
                  <th>Visitor</th>
                  <th>Home</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {gamesScheduled !== null &&
                  gamesScheduled.map(game => (
                    <FutureGamesItem game={game} key={game.id} />
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="card-body text-center">
            <p>There are no games scheduled in your search</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

FutureGames.propTypes = {
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  getMyGames
})(FutureGames);
