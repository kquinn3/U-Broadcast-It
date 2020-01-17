import React, { Fragment, useEffect } from "react";
import FutureGamesItem from "./FutureGamesItem";
import { getMyGames } from "../../actions/gameActions";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const FutureGames = ({ game: { gamesScheduled }, getMyGames }) => {
  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  const init = async () => {
    await getMyGames();
  };

  return (
    <Fragment>
      <h1 className="my-3">Upcoming Broadcasts</h1>
      <div className="table-responsive-sm">
        <table className="table-sm table-striped f-xs">
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
